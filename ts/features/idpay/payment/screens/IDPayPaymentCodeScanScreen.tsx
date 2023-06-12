import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import CameraScanMarkerSVG from "../../../../../img/camera-scan-marker.svg";
import {
  BarcodeCamera,
  ScannedBarcode
} from "../../../../components/BarcodeCamera";
import { ContentWrapper } from "../../../../components/core/ContentWrapper";
import { LabelSmall } from "../../../../components/core/typography/LabelSmall";
import { IOColors } from "../../../../components/core/variables/IOColors";
import IconButton from "../../../../components/ui/IconButton";
import I18n from "../../../../i18n";
import {
  AppParamsList,
  IOStackNavigationProp
} from "../../../../navigation/params/AppParamsList";
import { IDPayPaymentRoutes } from "../navigation/navigator";

const IDPayPaymentCodeScanScreen = () => {
  const onBarcodeScanned = (barcode: ScannedBarcode) => {
    alert(`trxCode: ${barcode.value}`);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.cameraContainer}>
        <BarcodeCamera
          onBarcodeScanned={onBarcodeScanned}
          marker={<CameraMarker />}
          fullHeight={true}
        />
      </View>
      <TabNavigation />
      <LinearGradient
        colors={["#03134480", "#03134400"]}
        style={styles.headerContainer}
      >
        <StatusBar barStyle={"light-content"} />
        {/* FIXME replace with the new header from the Design System 2.0  */}
        <CustomHeader />
      </LinearGradient>
    </View>
  );
};

const CustomHeader = () => {
  const navigation = useNavigation<IOStackNavigationProp<AppParamsList>>();

  const handleBackNavigation = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ marginHorizontal: 8 }}>
      <View
        style={{
          paddingVertical: 16,
          paddingHorizontal: 24,
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <View>
          <IconButton
            icon="close"
            onPress={handleBackNavigation}
            accessibilityLabel={I18n.t("global.buttons.close")}
            color="contrast"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const CameraMarker = () => (
  <View style={styles.cameraMarkerContainer}>
    <CameraScanMarkerSVG width={230} height={230} />
  </View>
);

const TabNavigation = () => {
  const navigation = useNavigation<IOStackNavigationProp<AppParamsList>>();

  const navigateToCodeInputScreen = () =>
    navigation.navigate(IDPayPaymentRoutes.IDPAY_PAYMENT_MAIN, {
      screen: IDPayPaymentRoutes.IDPAY_PAYMENT_CODE_INPUT
    });

  const showUploadModal = () => {
    // TODO QRCode upload will be handled in another PR
    alert("TODO 😄");
  };

  return (
    <SafeAreaView style={styles.navigationContainer}>
      <ContentWrapper>
        <View style={styles.navigationTabs}>
          <View style={[styles.tab, styles.tabActive]}>
            <LabelSmall color="grey-850" weight="Regular">
              {I18n.t("idpay.payment.qrCode.scan.tabs.scan")}
            </LabelSmall>
          </View>
          <TouchableOpacity style={styles.tab} onPress={showUploadModal}>
            <LabelSmall color="white" weight="Regular">
              {I18n.t("idpay.payment.qrCode.scan.tabs.upload")}
            </LabelSmall>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={navigateToCodeInputScreen}
          >
            <LabelSmall color="white" weight="Regular">
              {I18n.t("idpay.payment.qrCode.scan.tabs.input")}
            </LabelSmall>
          </TouchableOpacity>
        </View>
      </ContentWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: IOColors["blueIO-850"]
  },
  headerContainer: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: 160
  },
  cameraContainer: {
    backgroundColor: IOColors["blueIO-50"],
    flex: 1,
    flexGrow: 1,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  cameraMarkerContainer: {
    width: "100%",
    height: "110%",
    justifyContent: "center"
  },
  navigationContainer: {
    backgroundColor: IOColors["blueIO-850"],
    margin: 8
  },
  navigationTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
    paddingTop: 32
  },
  tab: {
    width: 100,
    alignItems: "center",
    paddingVertical: 8
  },
  tabActive: {
    backgroundColor: IOColors.white,
    borderRadius: 85
  }
});

export { IDPayPaymentCodeScanScreen };
