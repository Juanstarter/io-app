import React from "react";
import { Linking, StyleSheet, View } from "react-native";
import {
  Camera,
  CameraPermissionStatus,
  useCameraDevices
} from "react-native-vision-camera";
import { BarcodeFormat, useScanBarcodes } from "vision-camera-code-scanner";
import { IOColors } from "../../../../components/core/variables/IOColors";

type QRCodeCameraConfiguration = {
  marker?: React.ReactNode;
  onQrCodeScanned?: (content: string) => void;
};

type QRCodeCamera = {
  cameraComponent: React.ReactNode;
  cameraPermissionStatus: CameraPermissionStatus;
  requestCameraPermission: () => Promise<void>;
  openCameraSettings: () => Promise<void>;
};

const DEFAULT_CONFIGURATION: QRCodeCameraConfiguration = {};

const useQRCodeCamera = (
  config: QRCodeCameraConfiguration = DEFAULT_CONFIGURATION
): QRCodeCamera => {
  const { marker, onQrCodeScanned } = config;

  const devices = useCameraDevices();
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    React.useState<CameraPermissionStatus>("not-determined");
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true
  });

  React.useEffect(() => {
    Camera.getCameraPermissionStatus()
      .then(setCameraPermissionStatus)
      .catch(() => setCameraPermissionStatus("not-determined"));
  }, []);

  const requestCameraPermission = async () => {
    const permissions = await Camera.requestCameraPermission();
    setCameraPermissionStatus(permissions);
  };

  const openCameraSettings = async () => {
    await Linking.openSettings();
    const permissions = await Camera.getCameraPermissionStatus();
    setCameraPermissionStatus(permissions);
  };

  React.useEffect(() => {
    if (barcodes.length !== 0) {
      onQrCodeScanned?.(barcodes[0].content.data.toString());
    }
  }, [barcodes, onQrCodeScanned]);

  const cameraComponent = (
    <View style={styles.cameraContainer}>
      {devices.back && (
        <Camera
          style={styles.camera}
          device={devices.back}
          audio={false}
          frameProcessor={frameProcessor}
          frameProcessorFps={5}
          isActive={true}
        />
      )}

      {marker && <View style={{ alignSelf: "center" }}>{marker}</View>}
    </View>
  );

  return {
    cameraComponent,
    cameraPermissionStatus,
    requestCameraPermission,
    openCameraSettings
  };
};

const styles = StyleSheet.create({
  cameraContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: IOColors.black
  },
  camera: {
    position: "absolute",
    width: "100%",
    height: "100%"
  }
});

export { useQRCodeCamera };
export type { QRCodeCamera };
