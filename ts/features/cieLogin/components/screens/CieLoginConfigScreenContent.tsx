import React from "react";
import { useDispatch } from "react-redux";
import { Divider } from "@pagopa/io-app-design-system";
import { CheckboxListItem } from "../../../../components/ui/CheckboxListItem";
import { CieEntityIds } from "../../../../components/cie/CieRequestAuthenticationOverlay";
import { cieLoginDisableUat, cieLoginEnableUat } from "../../store/actions";
import { isCieLoginUatEnabledSelector } from "../../store/selectors";
import { useIOSelector } from "../../../../store/hooks";

const CieLoginConfigScreenContent = () => {
  const dispatch = useDispatch();
  const useCieUat = useIOSelector(isCieLoginUatEnabledSelector);
  return (
    <>
      <CheckboxListItem
        icon="warningFilled"
        selected={useCieUat}
        onValueChange={newValue => {
          if (newValue) {
            dispatch(cieLoginEnableUat());
          } else {
            dispatch(cieLoginDisableUat());
          }
        }}
        value={`Abilita endpoint di collaudo (${CieEntityIds.DEV})`}
        description={
          "Questa opzione serve agli sviluppatori, per testare la login con CIE."
        }
        accessibilityLabel={""}
      />
      <Divider />
    </>
  );
};

export default CieLoginConfigScreenContent;
