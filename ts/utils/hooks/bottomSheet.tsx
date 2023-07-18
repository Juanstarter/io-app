import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
  useBottomSheetModal
} from "@gorhom/bottom-sheet";
import {
  View,
  Modal,
  Platform,
  StyleSheet,
  LayoutChangeEvent
} from "react-native";
import { BottomSheetFooterProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetFooter";
import { NonEmptyArray } from "fp-ts/lib/NonEmptyArray";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomSheetHeader } from "../../components/bottomSheet/BottomSheetHeader";
import { useHardwareBackButtonToDismiss } from "../../hooks/useHardwareBackButton";
import { TestID } from "../../types/WithTestID";
import {
  IOVisualCostants,
  IOStyles
} from "../../components/core/variables/IOStyles";
import { isScreenReaderEnabled } from "../accessibility";
import { VSpacer } from "../../components/core/spacer/Spacer";
import { IOSpacingScale } from "../../components/core/variables/IOSpacing";
import { IOBottomSheetHeaderRadius } from "../../components/core/variables/IOShapes";

type Props = {
  children: React.ReactNode;
  footer?: React.ReactNode;
} & TestID;

const styles = StyleSheet.create({
  bottomSheet: {
    borderTopRightRadius: IOBottomSheetHeaderRadius,
    borderTopLeftRadius: IOBottomSheetHeaderRadius,
    // Don't delete the overflow property
    // oterwise the above borderRadius won't work
    overflow: "hidden"
  }
});
/**
 * Build the base content of a BottomSheet including content padding and a ScrollView
 */
const BottomSheetContent: React.FunctionComponent<Props> = ({
  children,
  testID
}: Props) => (
  <BottomSheetScrollView
    style={{
      flex: 1,
      paddingHorizontal: IOVisualCostants.appMarginDefault
    }}
    testID={testID}
  >
    {children}
  </BottomSheetScrollView>
);

export type BottomSheetModalProps = {
  content: React.ReactNode;
  config: {
    handleComponent: React.ReactElement;
  };
};

export type IOBottomSheetModal = {
  present: () => void;
  dismiss: (a: string) => void;
  bottomSheet: JSX.Element;
};

/**
 * Utility function to build a BottomSheet considering accessibility. This will create a common BottomSheet object to be used in the `present` function
 * that is available only in component context since it uses the context api made available from https://gorhom.github.io/react-native-bottom-sheet/modal/methods
 * @param content
 * @param title
 * @param snapPoint
 * @param onClose
 */
export const bottomSheetContent = (
  content: React.ReactNode,
  title: string | React.ReactNode,
  onClose: (source: string) => void
): BottomSheetModalProps => {
  const header = <BottomSheetHeader title={title} onClose={onClose} />;

  const bottomSheetBody: React.ReactNode = (
    <BottomSheetContent>{content}</BottomSheetContent>
  );

  return {
    content: bottomSheetBody,
    config: {
      handleComponent: header
    }
  };
};

/**
 * @typedef BottomSheetOptions
 * @type {BottomSheetOptions}
 * @property {component} component The React.Element to be rendered inside the bottom sheet body
 * @property {title} title String or React.Element to be rendered as bottom-sheet header title
 * @property {footer} footer React.Element or undefined to be rendered as sticky footer of our bottom sheet
 * @property {snapPoint} snapPoint The array of points used to pin the height of the bottom sheet
 * @property {onDismiss} onDismiss The possible function to be used as an effect of the dismissal of the bottom sheet
 */
type BottomSheetOptions = {
  component: React.ReactNode;
  title: string | React.ReactNode;
  snapPoint: NonEmptyArray<number | string>;
  footer?: React.ReactElement;
  onDismiss?: (source: string) => void;
};

/**
 * Hook to generate a bottomSheet with a title, snapPoint and a component, in order to wrap the invocation of bottomSheetContent
 * @param bottomSheetOptions
 * @see {BottomSheetOptions}
 */
export const useIOBottomSheetModal = ({
  component,
  title,
  snapPoint,
  footer,
  onDismiss
}: BottomSheetOptions): IOBottomSheetModal => {
  console.log(`=== bottomSheet render `);
  const myRef = React.useRef<string>("");
  const { dismissAll } = useBottomSheetModal();
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const setBSOpened = useHardwareBackButtonToDismiss(() => {
    myRef.current = "BackButton";
    dismissAll();
  }); // TODO back button
  const [screenReaderEnabled, setIsScreenReaderEnabled] =
    useState<boolean>(false);

  const bottomSheetProps = bottomSheetContent(
    component,
    title,
    (sourceFromX: string) => {
      myRef.current = sourceFromX;
      dismissAll();
    }
  );

  const present = () => {
    bottomSheetModalRef.current?.present();
    setBSOpened();
  };

  // // Add opacity fade effect to backdrop
  const BackdropElement = useCallback(
    (backdropProps: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...backdropProps}
        opacity={0.2}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        /* onPress={() => {
          myRef.current = "backdrop";
        }} // TODO qui becchiamo il backdrop */
      />
    ),
    []
  );

  useEffect(() => {
    isScreenReaderEnabled()
      .then(sre => setIsScreenReaderEnabled(sre))
      .catch(_ => setIsScreenReaderEnabled(false));
  }, []);

  const inset = useSafeAreaInsets();

  const bottomSheet = (
    <BottomSheetModal
      style={[styles.bottomSheet, { marginTop: inset.top }]}
      footerComponent={(_: BottomSheetFooterProps) =>
        footer !== undefined ? (
          <>
            {footer}
            <VSpacer size={16} />
          </>
        ) : null
      }
      snapPoints={[...snapPoint]}
      ref={bottomSheetModalRef}
      handleComponent={_ => bottomSheetProps.config.handleComponent}
      backdropComponent={BackdropElement}
      enableDismissOnClose={true}
      accessible={false}
      // set this attribute to an empty string to avoid the default announcement from the library
      accessibilityPositionChangeAnnouncement={""}
      handleComponentAccessibility={{
        accessible: false
      }}
      importantForAccessibility={"yes"}
      onDismiss={() => onDismiss?.(myRef.current)} // TODO specificare che è stata la X
    >
      {screenReaderEnabled && Platform.OS === "android" ? (
        <Modal>
          <View style={IOStyles.flex} accessible={true}>
            {bottomSheetProps.config.handleComponent}
            {bottomSheetProps.content}
          </View>
          <>
            {footer !== undefined ? (
              <>
                {footer}
                <VSpacer size={16} />
              </>
            ) : null}
            <VSpacer size={16} />
          </>
        </Modal>
      ) : (
        bottomSheetProps.content
      )}
    </BottomSheetModal>
  );
  return {
    present,
    dismiss: (externalSource: string) => {
      // QUI LA SOURCE È VALORIZZATA DAI PULSANTI
      myRef.current = externalSource;
      dismissAll();
    },
    bottomSheet
  };
};

const DEFAULT_AUTORESIZABLE_SNAP_POINT = 1;
const DEFAULT_BOTTOM_PADDING: IOSpacingScale = 24;
/**
 * Hook to generate a bottomSheet with a title, snapPoint and a component, that autosizes to the height of its content
 * @param bottomSheetOptions
 * @see {BottomSheetOptions}
 * @param bottomPadding the bottom padding of the bottom sheet, default is 24
 */
export const useIOBottomSheetAutoresizableModal = (
  {
    component,
    title,
    footer,
    onDismiss
  }: Omit<BottomSheetOptions, "snapPoint">,
  bottomPadding: number = DEFAULT_BOTTOM_PADDING
) => {
  const [snapPoint, setSnapPoint] = React.useState<number>(
    DEFAULT_AUTORESIZABLE_SNAP_POINT
  );
  const insets = useSafeAreaInsets();
  const handleContentOnLayout = React.useCallback(
    (event: LayoutChangeEvent) => {
      const { height } = event.nativeEvent.layout;

      setSnapPoint(insets.bottom + insets.top + bottomPadding + height);
    },
    [insets, bottomPadding]
  );

  const footerComponent = footer ? (
    <View style={{ paddingBottom: insets.top }}>{footer}</View>
  ) : undefined;

  return useIOBottomSheetModal({
    component: (
      <View
        style={{
          paddingBottom: insets.bottom
        }}
        onLayout={handleContentOnLayout}
      >
        {component}
      </View>
    ),
    title,
    snapPoint: [snapPoint],
    footer: footerComponent,
    onDismiss
  });
};

/**
 * Hook to generate a bottomSheet with a title, snapPoint and a component, in order to wrap the invocation of bottomSheetContent
 * @param component
 * @param title
 * @param snapPoint
 * @param footer
 * @param onDismiss callback to be called when the bottom sheet is dismissed
 * @deprecated
 * use `useIOBottomSheetModal` instead
 * TODO remove once all the occurencies of `useLegacyIOBottomSheetModal` will be replaced by `useIOBottomSheetModal`
 */
export const useLegacyIOBottomSheetModal = (
  component: React.ReactNode,
  title: string | React.ReactNode,
  snapPoint: number,
  footer?: React.ReactElement,
  onDismiss?: (source: string) => void
): IOBottomSheetModal => {
  const insets = useSafeAreaInsets();

  return useIOBottomSheetModal({
    component,
    title,
    snapPoint: [snapPoint + insets.top],
    footer: footer ? (
      <View style={{ paddingBottom: insets.top }}>{footer}</View>
    ) : undefined,
    onDismiss
  });
};
