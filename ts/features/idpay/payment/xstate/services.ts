import * as E from "fp-ts/lib/Either";
import * as O from "fp-ts/lib/Option";
import * as TE from "fp-ts/lib/TaskEither";
import { flow, pipe } from "fp-ts/lib/function";
import { AuthPaymentResponseDTO } from "../../../../../definitions/idpay/AuthPaymentResponseDTO";
import { CodeEnum } from "../../../../../definitions/idpay/TransactionErrorDTO";
import { IDPayClient } from "../../common/api/client";
import { Context } from "./context";
import { PaymentFailureEnum } from "./failure";

export type Services = {
  preAuthorizePayment: {
    data: AuthPaymentResponseDTO;
  };
  authorizePayment: {
    data: AuthPaymentResponseDTO;
  };
};

const createServicesImplementation = (client: IDPayClient, token: string) => {
  const preAuthorizePayment = async (
    context: Context
  ): Promise<AuthPaymentResponseDTO> => {
    const putPreAuthPaymentTask = (trxCode: string) =>
      TE.tryCatch(
        async () =>
          await client.putPreAuthPayment({
            bearerAuth: token,
            trxCode
          }),
        () => PaymentFailureEnum.GENERIC
      );

    const dataResponse = await pipe(
      context.trxCode,
      TE.fromOption(() => PaymentFailureEnum.GENERIC),
      TE.chain(putPreAuthPaymentTask)
    )();

    return pipe(
      dataResponse,
      E.fold(
        failure => Promise.reject(failure),
        flow(
          E.map(({ status, value }) => {
            switch (status) {
              case 200:
                return Promise.resolve(value);
              case 403:
                if (value.code === CodeEnum.PAYMENT_BUDGET_EXHAUSTED) {
                  return Promise.reject(PaymentFailureEnum.BUDGET_EXHAUSTED);
                }
                return Promise.reject(PaymentFailureEnum.REJECTED);
              default:
                return Promise.reject(PaymentFailureEnum.GENERIC);
            }
          }),
          E.getOrElse(() => Promise.reject(PaymentFailureEnum.GENERIC))
        )
      )
    );
  };

  const authorizePayment = async (
    context: Context
  ): Promise<AuthPaymentResponseDTO> => {
    const putAuthPaymentTask = (trxCode: string) =>
      TE.tryCatch(
        async () =>
          await client.putAuthPayment({
            bearerAuth: token,
            trxCode
          }),
        () => PaymentFailureEnum.GENERIC
      );

    const dataResponse = await pipe(
      context.transactionData,
      O.map(({ trxCode }) => trxCode),
      TE.fromOption(() => PaymentFailureEnum.GENERIC),
      TE.chain(putAuthPaymentTask)
    )();

    return pipe(
      dataResponse,
      E.fold(
        failure => Promise.reject(failure),
        flow(
          E.map(({ status, value }) => {
            switch (status) {
              case 200:
                return Promise.resolve(value);
              case 403:
                if (value.code === CodeEnum.PAYMENT_BUDGET_EXHAUSTED) {
                  return Promise.reject(PaymentFailureEnum.BUDGET_EXHAUSTED);
                }
                return Promise.reject(PaymentFailureEnum.REJECTED);
              case 404:
                return Promise.reject(PaymentFailureEnum.EXPIRED);
              case 429:
                return Promise.reject(PaymentFailureEnum.TOO_MANY_REQUESTS);
              default:
                return Promise.reject(PaymentFailureEnum.GENERIC);
            }
          }),
          E.getOrElse(() => Promise.reject(PaymentFailureEnum.GENERIC))
        )
      )
    );
  };

  return {
    preAuthorizePayment,
    authorizePayment
  };
};

export { createServicesImplementation };
