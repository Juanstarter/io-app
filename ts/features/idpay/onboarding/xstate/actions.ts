import {
  IDPayOnboardingParamsList,
  IDPayOnboardingRoutes,
  IDPayOnboardingStackNavigationProp
} from "../navigation/navigator";
import { Context } from "./machine";

const createActionsImplementation = (
  navigation: IDPayOnboardingStackNavigationProp<
    IDPayOnboardingParamsList,
    keyof IDPayOnboardingParamsList
  >
) => {
  const navigateToInitiativeDetailsScreen = (context: Context) => {
    if (context.serviceId === undefined) {
      throw new Error("serviceId is undefined");
    }

    navigation.navigate(
      IDPayOnboardingRoutes.IDPAY_ONBOARDING_INITIATIVE_DETAILS,
      {
        serviceId: context.serviceId
      }
    );
  };

  const navigateToPDNDCriteriaScreen = () => {
    navigation.navigate(IDPayOnboardingRoutes.IDPAY_ONBOARDING_PDNDACCEPTANCE);
  };

  const navigateToBoolSelfDeclarationsScreen = () => {
    navigation.navigate(
      IDPayOnboardingRoutes.IDPAY_ONBOARDING_BOOL_SELF_DECLARATIONS
    );
  };

  const navigateToMultiSelfDeclarationsScreen = (context: Context) => {
    navigation.push(
      IDPayOnboardingRoutes.IDPAY_ONBOARDING_MULTI_SELF_DECLARATIONS,
      {
        index: context.multiConsentsIndex
      }
    );
  };

  const navigateToPreviousMultiSelfDeclarationsScreen = (context: Context) => {
    navigation.replace(
      IDPayOnboardingRoutes.IDPAY_ONBOARDING_MULTI_SELF_DECLARATIONS,
      {
        index: context.multiConsentsIndex
      }
    );
  };

  const navigateToCompletionScreen = () => {
    navigation.navigate(IDPayOnboardingRoutes.IDPAY_ONBOARDING_COMPLETION);
  };

  const navigateToFailureScreen = () => {
    navigation.navigate(IDPayOnboardingRoutes.IDPAY_ONBOARDING_FAILURE);
  };

  const exitOnboarding = () => {
    navigation.pop();
  };

  return {
    navigateToInitiativeDetailsScreen,
    navigateToPDNDCriteriaScreen,
    navigateToBoolSelfDeclarationsScreen,
    navigateToCompletionScreen,
    navigateToFailureScreen,
    exitOnboarding,
    navigateToMultiSelfDeclarationsScreen,
    navigateToPreviousMultiSelfDeclarationsScreen
  };
};

export { createActionsImplementation };
