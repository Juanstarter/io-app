import * as pot from "@pagopa/ts-commons/lib/pot";
import * as React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { useState } from "react";
import {
  Divider,
  HSpacer,
  ListItemSwitch,
  NativeSwitch,
  VSpacer
} from "@pagopa/io-app-design-system";
import { CheckBox } from "../../../components/core/selection/checkbox/CheckBox";
import { RemoteSwitch } from "../../../components/core/selection/RemoteSwitch";
import { DesignSystemScreen } from "../components/DesignSystemScreen";
import { H2 } from "../../../components/core/typography/H2";
import { CheckboxLabel } from "../../../components/core/selection/checkbox/CheckboxLabel";
import { DSComponentViewerBox } from "../components/DSComponentViewerBox";
import { CheckboxListItem } from "../../../components/ui/CheckboxListItem";
import { H4 } from "../../../components/core/typography/H4";
import {
  NewRadioItem,
  RadioGroup
} from "../../../components/core/selection/RadioGroup";
import { SwitchLabel } from "../../../components/core/selection/checkbox/SwitchLabel";
import { IOStyles } from "../../../components/core/variables/IOStyles";
import { AnimatedMessageCheckbox } from "../../../components/core/selection/checkbox/AnimatedMessageCheckbox";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingVertical: 16
  }
});

export const DSSelection = () => (
  <DesignSystemScreen title={"Selection"}>
    <H2 weight={"Bold"} style={{ marginVertical: 16 }}>
      Checkbox
    </H2>
    {/* CheckboxLabel */}
    {renderCheckboxLabel()}
    {/* CheckboxListItem */}
    {renderCheckboxListItem()}
    {/* AnimatedMessageCheckbox */}
    <H2 weight={"Bold"} style={{ marginVertical: 16 }}>
      Checkbox (Messages)
    </H2>
    <AnimatedMessageCheckboxShowroom />
    {/* RadioListItem */}
    <H2 weight={"Bold"} style={{ marginVertical: 16 }}>
      Radio
    </H2>
    <RadioListItemsShowroom />
    <H2 weight={"Bold"} style={{ marginVertical: 16 }}>
      Switch
    </H2>
    {/* Native Switch */}
    <NativeSwitchShowroom />
    {/* ListItemSwitch */}
    <ListItemSwitchShowroom />
    {/* SwitchLabel */}
    {renderAnimatedSwitch()}
    {/* Legacy components */}
    <H2 weight={"SemiBold"} style={{ marginBottom: 16, marginTop: 16 }}>
      Legacy components
    </H2>
    <H4>{"<CheckBox />"}</H4>
    <View style={styles.content}>
      <CheckBox />
      <CheckBox checked={true} />
    </View>
    <H4>{"<RemoteSwitch />"}</H4>
    <View style={styles.content}>
      <RemoteSwitch value={pot.none} />
      <RemoteSwitch
        value={pot.noneError(new Error())}
        onRetry={() => Alert.alert("Retry!")}
      />
      <RemoteSwitch value={pot.some(true)} />
      <RemoteSwitch value={pot.someUpdating(false, true)} />
      <RemoteSwitch value={pot.some(false)} />
      <RemoteSwitch value={pot.someUpdating(true, false)} />
      <VSpacer size={48} />
    </View>
  </DesignSystemScreen>
);

const renderCheckboxLabel = () => (
  <>
    <DSComponentViewerBox name="CheckboxLabel">
      <CheckboxLabel label="This is a test" />
      <VSpacer size={16} />
      <CheckboxLabel label="This is a test with a very loooong looooooooong loooooooong text" />
    </DSComponentViewerBox>
    <DSComponentViewerBox name="CheckboxLabel (disabled)">
      <CheckboxLabel disabled checked={true} label="This is a test" />
      <VSpacer size={16} />
      <CheckboxLabel disabled label="This is a test" />
    </DSComponentViewerBox>
  </>
);

const renderCheckboxListItem = () => (
  <>
    <DSComponentViewerBox name="CheckboxListItem">
      <CheckboxListItem
        value="Usa configurazione rapida"
        accessibilityLabel={""}
      />
      <Divider />
      <CheckboxListItem
        icon="coggle"
        value="Usa configurazione rapida"
        accessibilityLabel={""}
      />
      <Divider />
      <CheckboxListItem
        value="Usa configurazione rapida"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
        }
        accessibilityLabel={""}
      />
      <Divider />
      <CheckboxListItem
        value="Questa è un'altra prova ancora più lunga per andare su due righe"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
        }
        accessibilityLabel={""}
      />
      <Divider />
      <CheckboxListItem
        icon="bonus"
        value="Let's try with a loooong loooooong looooooong title + icon"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
        }
        accessibilityLabel={""}
      />
      <Divider />
      <CheckboxListItem
        icon="coggle"
        value="Usa configurazione rapida"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti."
        }
        accessibilityLabel={""}
      />
    </DSComponentViewerBox>
    <DSComponentViewerBox name="CheckBoxListItem (disabled)">
      <CheckboxListItem
        disabled
        value="Usa configurazione rapida"
        accessibilityLabel={""}
      />
      <Divider />
      <CheckboxListItem
        disabled
        icon="coggle"
        value="Usa configurazione rapida"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti."
        }
        accessibilityLabel={""}
      />
      <Divider />
      <CheckboxListItem
        disabled
        selected={true}
        icon="coggle"
        value="Usa configurazione rapida"
        accessibilityLabel={""}
      />
    </DSComponentViewerBox>
  </>
);

// RADIO ITEMS

const mockRadioItems = (): ReadonlyArray<NewRadioItem<string>> => [
  {
    icon: "coggle",
    value: "Let's try with a basic title",
    description:
      "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano.",
    id: "example-1"
  },
  {
    value: "Let's try with a basic title",
    description:
      "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti.",
    id: "example-2"
  },
  {
    value: "Let's try with a very looong loooooong title instead",
    id: "example-3"
  },
  {
    value: "Let's try with a disabled item",
    description:
      "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti.",
    id: "example-disabled",
    disabled: true
  }
];

const RadioListItemsShowroom = () => {
  const [selectedItem, setSelectedItem] = useState<string | undefined>(
    "example-1"
  );

  return (
    <DSComponentViewerBox name="RadioListItem">
      <RadioGroup<string>
        key="check_income"
        items={mockRadioItems()}
        selectedItem={selectedItem}
        onPress={setSelectedItem}
      />
    </DSComponentViewerBox>
  );
};

const AnimatedMessageCheckboxShowroom = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <DSComponentViewerBox name="AnimatedMessageCheckbox">
        <View style={[IOStyles.row, IOStyles.alignCenter]}>
          <AnimatedMessageCheckbox checked={isEnabled} />
          <HSpacer size={24} />
          <NativeSwitch onValueChange={toggleSwitch} value={isEnabled} />
        </View>
      </DSComponentViewerBox>
    </>
  );
};

// SWITCH

const renderAnimatedSwitch = () => (
  <DSComponentViewerBox name="AnimatedSwitch, dismissed in favor of the native one">
    <SwitchLabel label="This is a test" />
    <VSpacer size={16} />
    <SwitchLabel label="This is a test with a very loooong looooooong loooooooong text" />
  </DSComponentViewerBox>
);

const NativeSwitchShowroom = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <DSComponentViewerBox name="NativeSwitch">
      <View style={{ alignSelf: "flex-start" }}>
        <NativeSwitch value={isEnabled} onValueChange={toggleSwitch} />
      </View>
    </DSComponentViewerBox>
  );
};

type ListItemSwitchSampleProps = Pick<
  React.ComponentProps<typeof ListItemSwitch>,
  "label" | "description" | "value" | "icon" | "paymentLogo" | "action"
>;

const ListItemSwitchSample = ({
  value,
  label,
  description,
  icon,
  action,
  paymentLogo
}: ListItemSwitchSampleProps) => {
  const [isEnabled, setIsEnabled] = useState(value);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      {icon ? (
        <ListItemSwitch
          action={action}
          icon={icon}
          label={label}
          description={description}
          value={isEnabled}
          onSwitchValueChange={toggleSwitch}
        />
      ) : paymentLogo ? (
        <ListItemSwitch
          action={action}
          paymentLogo={paymentLogo}
          label={label}
          description={description}
          value={isEnabled}
          onSwitchValueChange={toggleSwitch}
        />
      ) : (
        <ListItemSwitch
          action={action}
          label={label}
          description={description}
          value={isEnabled}
          onSwitchValueChange={toggleSwitch}
        />
      )}
    </>
  );
};

const ListItemSwitchShowroom = () => (
  <>
    <DSComponentViewerBox name="ListItemSwitch">
      <ListItemSwitchSample label="Testo molto breve" value={true} />
      <Divider />
      <ListItemSwitchSample
        label="Testo molto breve"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
        }
      />
      <Divider />
      <ListItemSwitchSample
        label="Questa è un'altra prova ancora più lunga per andare su due righe"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
        }
      />
      <Divider />
      <ListItemSwitchSample
        icon="bonus"
        label="Let's try with a loooong loooooong title + icon + action"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
        }
        action={{
          label: "Action",
          onPress: () => {
            Alert.alert("Action triggered!");
          }
        }}
      />
      <Divider />
      <ListItemSwitchSample
        icon="bonus"
        label="Let's try with a loooong loooooong title + icon"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
        }
      />
      <Divider />
      <ListItemSwitchSample
        paymentLogo="mastercard"
        label="5354 **** **** 0000"
      />
      <Divider />
      <ListItemSwitchSample paymentLogo="applePay" label="Apple Pay" />
    </DSComponentViewerBox>
    <DSComponentViewerBox name="ListItemSwitch, loading status">
      <ListItemSwitch
        icon="device"
        label="Label"
        value={false}
        isLoading
        description="Loading list item switch"
      />
      <Divider />
      <ListItemSwitch
        icon="device"
        label="Loong loooooong looooooooong loooong title"
        value={false}
        isLoading
        description="Loading list item switch"
      />
    </DSComponentViewerBox>
    <DSComponentViewerBox name="ListItemSwitch with badge">
      <ListItemSwitch
        icon="device"
        label="Usa l'app IO"
        value={false}
        badge={{
          text: "Attivo",
          variant: "info"
        }}
        description="Inquadra il codice QR mostrato dall’esercente e segui le istruzioni in app per autorizzare la spesa."
      />
      <Divider />
      <ListItemSwitch
        icon="coggle"
        label="Loong loooooong loooooooooong loooong title"
        value={false}
        badge={{
          text: "Attivo",
          variant: "info"
        }}
      />
    </DSComponentViewerBox>
    <DSComponentViewerBox name="ListItemSwitch, disabled">
      <ListItemSwitch disabled label="Testo molto breve" value={true} />
      <Divider />
      <ListItemSwitch
        disabled
        label="Testo molto breve"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
        }
      />
      <Divider />
      <ListItemSwitch
        disabled
        icon="bonus"
        label="Let's try with a loooong loooooong title + icon"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
        }
      />
    </DSComponentViewerBox>
  </>
);
