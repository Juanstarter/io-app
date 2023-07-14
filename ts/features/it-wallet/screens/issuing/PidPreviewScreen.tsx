import React, { useState } from "react";
import { View } from "native-base";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PidCredential from "../../components/PidCredential";
import { IOStyles } from "../../../../components/core/variables/IOStyles";
import BaseScreenComponent from "../../../../components/screens/BaseScreenComponent";
import I18n from "../../../../i18n";
import { emptyContextualHelp } from "../../../../utils/emptyContextualHelp";
import { FeatureInfo } from "../../../../components/FeatureInfo";
import ScreenContent from "../../../../components/screens/ScreenContent";
import { VSpacer } from "../../../../components/core/spacer/Spacer";
import FooterWithButtons from "../../../../components/ui/FooterWithButtons";
import { getPidMock } from "../../utils/mocks";
import ClaimsList from "../../components/ClaimsList";
import { useItwAbortFlow } from "../../hooks/useItwAbortFlow";
import { ITW_ROUTES } from "../../navigation/routes";
import { useOnFirstRender } from "../../../../utils/hooks/useOnFirstRender";
import ItwLoadingSpinnerOverlay from "../../components/ItwLoadingSpinnerOverlay";

/**
 * Renders a preview screen which displays a visual representation and the claims contained in the PID.
 */
const PidPreviewScreen = () => {
  const spacerSize = 32;
  const pidMock = getPidMock();
  const { present, bottomSheet } = useItwAbortFlow();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Temporary timeout to simulate loading, will be removed in the future.
   */
  useOnFirstRender(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  const cancelButtonProps = {
    block: true,
    bordered: true,
    onPress: present,
    title: I18n.t("features.itWallet.issuing.pidPreviewScreen.buttons.notNow")
  };
  const saveButtonProps = {
    block: true,
    primary: true,
    onPress: () =>
      navigation.navigate(ITW_ROUTES.ACTIVATION.PID_ISSUING, {
        vc: pidMock
      }),
    title: I18n.t("features.itWallet.issuing.pidPreviewScreen.buttons.add")
  };

  return (
    <BaseScreenComponent
      goBack={true}
      headerTitle={I18n.t("features.itWallet.issuing.title")}
      contextualHelp={emptyContextualHelp}
    >
      <SafeAreaView style={{ ...IOStyles.flex }}>
        <ItwLoadingSpinnerOverlay
          isLoading={isLoading}
          captionTitle={I18n.t(
            "features.itWallet.issuing.pidPreviewScreen.loading.title"
          )}
          captionSubtitle={I18n.t(
            "features.itWallet.issuing.pidPreviewScreen.loading.subtitle"
          )}
        >
          <ScreenContent
            title={I18n.t("features.itWallet.issuing.pidPreviewScreen.title")}
          >
            <VSpacer />
            <View style={IOStyles.horizontalContentPadding}>
              <PidCredential
                name={`${pidMock.verified_claims.claims.given_name} ${pidMock.verified_claims.claims.family_name}`}
                fiscalCode={pidMock.verified_claims.claims.tax_id_number}
              />
              <VSpacer />
              <FeatureInfo
                body={I18n.t(
                  "features.itWallet.issuing.pidPreviewScreen.checkNotice"
                )}
                iconName="notice"
              />
              <VSpacer />
              <ClaimsList claims={pidMock} />
              <VSpacer size={spacerSize} />
            </View>
          </ScreenContent>

          <FooterWithButtons
            type={"TwoButtonsInlineThird"}
            leftButton={cancelButtonProps}
            rightButton={saveButtonProps}
          />
          {bottomSheet}
        </ItwLoadingSpinnerOverlay>
      </SafeAreaView>
    </BaseScreenComponent>
  );
};

export default PidPreviewScreen;
