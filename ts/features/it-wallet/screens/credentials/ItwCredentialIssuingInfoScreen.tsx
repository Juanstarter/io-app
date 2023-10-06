import * as React from "react";
import { View, SafeAreaView, Image, ScrollView } from "react-native";
import {
  Body,
  FooterWithButtons,
  H1,
  HSpacer,
  IOStyles,
  Icon,
  IconContained,
  LabelLink,
  VSpacer
} from "@pagopa/io-app-design-system";
import { constVoid, pipe } from "fp-ts/lib/function";
import * as O from "fp-ts/lib/Option";
import { useNavigation } from "@react-navigation/native";
import interno from "../../../../../img/features/it-wallet/interno.png";
import BaseScreenComponent from "../../../../components/screens/BaseScreenComponent";
import { emptyContextualHelp } from "../../../../utils/emptyContextualHelp";
import { useIOSelector } from "../../../../store/hooks";
import { itwDecodedPidValueSelector } from "../../store/reducers/itwPidDecodeReducer";
import ItwErrorView from "../../components/ItwErrorView";
import { cancelButtonProps } from "../../utils/itwButtonsUtils";
import { IOStackNavigationProp } from "../../../../navigation/params/AppParamsList";
import { ItwParamsList } from "../../navigation/ItwParamsList";
import ItwFooterInfoBox from "../../components/ItwFooterInfoBox";
import I18n from "../../../../i18n";
import ItwBulletList, { BulletItem } from "../../components/ItwBulletList";
import { useItwDataProcessing } from "../../hooks/useItwDataProcessing";
import { ContentViewParams } from "./ItwPidDetails";

const MOCK_ORGANIZATION = "eFarma";

/**
 * This screen displays the information about the credential that is going to be shared
 * with the issuer.
 */
const ItwCredentialIssuingInfoScreen = () => {
  const decodedPid = useIOSelector(itwDecodedPidValueSelector);
  const navigation = useNavigation<IOStackNavigationProp<ItwParamsList>>();

  const ContentView = ({ decodedPid }: ContentViewParams) => {
    const { present, bottomSheet } = useItwDataProcessing();
    const MOCK_CREDENTIALS: ReadonlyArray<BulletItem> = [
      {
        title: I18n.t(
          "features.itWallet.issuing.credentialsIssuingInfoScreen.dataSource",
          {
            authsource:
              decodedPid.pid.verification.evidence[0].record.source
                .organization_name
          }
        ),
        data: [
          `${I18n.t(
            "features.itWallet.verifiableCredentials.claims.givenName"
          )} ${decodedPid.pid.claims.givenName}`,
          `${I18n.t(
            "features.itWallet.verifiableCredentials.claims.familyName"
          )} ${decodedPid.pid.claims.familyName}`,
          `${I18n.t(
            "features.itWallet.verifiableCredentials.claims.taxIdCode"
          )} ${decodedPid.pid.claims.taxIdCode}`,
          `${I18n.t(
            "features.itWallet.verifiableCredentials.claims.birthdate"
          )} ${decodedPid.pid.claims.birthdate}`,
          `${I18n.t(
            "features.itWallet.verifiableCredentials.claims.placeOfBirth"
          )} ${decodedPid.pid.claims.placeOfBirth.locality} (${
            decodedPid.pid.claims.placeOfBirth.country
          })`
        ]
      }
    ];
    return (
      <SafeAreaView style={IOStyles.flex}>
        <ScrollView style={IOStyles.horizontalContentPadding}>
          <VSpacer size={32} />
          {/* SECOND HEADER */}
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center"
            }}
          >
            {/* LEFT */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <IconContained
                icon={"device"}
                color={"neutral"}
                variant={"tonal"}
              />
              <HSpacer size={8} />
              <Icon name={"transactions"} color={"grey-450"} size={24} />
              <HSpacer size={8} />
              <IconContained
                icon={"institution"}
                color={"neutral"}
                variant={"tonal"}
              />
            </View>
            {/* RIGHT */}
            <Image
              source={interno}
              resizeMode={"contain"}
              style={{ width: "100%", height: 32 }}
            />
          </View>
          <VSpacer size={24} />
          <H1>
            {I18n.t(
              "features.itWallet.issuing.credentialsIssuingInfoScreen.title"
            )}
          </H1>
          <Body>
            {I18n.t(
              "features.itWallet.issuing.credentialsIssuingInfoScreen.subtitle",
              {
                authsource:
                  decodedPid.pid.verification.evidence[0].record.source
                    .organization_name,
                organization: MOCK_ORGANIZATION
              }
            )}
          </Body>
          <VSpacer size={16} />
          <LabelLink onPress={() => present()}>
            {I18n.t(
              "features.itWallet.issuing.credentialsIssuingInfoScreen.readMore"
            )}
          </LabelLink>
          <VSpacer size={24} />

          {/* Render a list of claims that will be shared with the credential issuer */}
          <ItwBulletList data={MOCK_CREDENTIALS} />

          {/* ItwFooterInfoBox should be replaced with a more ligth component */}
          <ItwFooterInfoBox
            content={I18n.t("features.itWallet.activationScreen.tos")}
          />
          <VSpacer size={48} />
        </ScrollView>
        <FooterWithButtons
          primary={{
            type: "Solid",
            buttonProps: {
              color: "primary",
              accessibilityLabel: I18n.t("global.buttons.cancel"),
              onPress: constVoid,
              label: I18n.t("global.buttons.cancel")
            }
          }}
          secondary={{
            type: "Outline",
            buttonProps: {
              color: "primary",
              accessibilityLabel: I18n.t("global.buttons.continue"),
              onPress: constVoid,
              label: I18n.t("global.buttons.continue")
            }
          }}
          type="TwoButtonsInlineHalf"
        />
        {bottomSheet}
      </SafeAreaView>
    );
  };

  const DecodedPidOrErrorView = () =>
    pipe(
      decodedPid,
      O.fold(
        () => (
          <ItwErrorView
            type="SingleButton"
            leftButton={cancelButtonProps(navigation.goBack)}
          />
        ),
        decodedPid => <ContentView decodedPid={decodedPid} />
      )
    );

  return (
    <BaseScreenComponent goBack={true} contextualHelp={emptyContextualHelp}>
      <DecodedPidOrErrorView />
    </BaseScreenComponent>
  );
};
export default ItwCredentialIssuingInfoScreen;
