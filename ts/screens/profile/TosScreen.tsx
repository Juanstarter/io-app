/**
 * A screen to show the app Terms of Service.
 * This screen is used as Privacy screen From Profile section.
 */
import * as React from "react";
import { useCallback, useLayoutEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HeaderSecondLevel } from "@pagopa/io-app-design-system";
import LoadingSpinnerOverlay from "../../components/LoadingSpinnerOverlay";
import { ContextualHelpPropsMarkdown } from "../../components/screens/BaseScreenComponent";
import TosWebviewComponent from "../../components/TosWebviewComponent";
import { privacyUrl } from "../../config";
import I18n from "../../i18n";
import { useStartSupportRequest } from "../../hooks/useStartSupportRequest";

const styles = StyleSheet.create({
  webViewContainer: {
    flex: 1
  }
});

const contextualHelpMarkdown: ContextualHelpPropsMarkdown = {
  title: "profile.main.privacy.privacyPolicy.contextualHelpTitlePolicy",
  body: "profile.main.privacy.privacyPolicy.contextualHelpContentPolicy"
};

/**
 * A screen to show the ToS to the user.
 */
const TosScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  const startSupportRequest = useStartSupportRequest({
    faqCategories: ["privacy"],
    contextualHelpMarkdown
  });

  const navigation = useNavigation();

  const handleLoadEnd = useCallback(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  const handleReload = useCallback(() => {
    setIsLoading(true);
  }, [setIsLoading]);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderSecondLevel
          type="singleAction"
          title={I18n.t("profile.main.privacy.title")}
          backAccessibilityLabel={I18n.t("global.buttons.back")}
          goBack={navigation.goBack}
          firstAction={{
            icon: "help",
            onPress: startSupportRequest,
            accessibilityLabel: I18n.t(
              "global.accessibility.contextualHelp.open.label"
            )
          }}
        />
      )
    });
  }, [navigation, startSupportRequest]);

  return (
    <LoadingSpinnerOverlay isLoading={isLoading}>
      <SafeAreaView style={styles.webViewContainer}>
        <TosWebviewComponent
          handleLoadEnd={handleLoadEnd}
          handleReload={handleReload}
          webViewSource={{ uri: privacyUrl }}
          shouldRenderFooter={false}
        />
      </SafeAreaView>
    </LoadingSpinnerOverlay>
  );
};

export default TosScreen;
