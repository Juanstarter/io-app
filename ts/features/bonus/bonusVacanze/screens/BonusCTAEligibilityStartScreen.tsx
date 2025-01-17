import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "../../../../store/actions/types";
import { checkBonusVacanzeEligibility } from "../store/actions/bonusVacanze";
import LoadBonusEligibilityScreen from "./eligibility/LoadBonusEligibilityScreen";

export type Props = ReturnType<typeof mapDispatchToProps>;

// this is a dummy screen reachable only from a message CTA
// when the component is mounted the checkBonusEligibility action will be dispatched
const BonusCTAEligibilityStartScreen = (props: Props) => {
  const { startEligibilityCheck } = props;
  useEffect(() => startEligibilityCheck(), [startEligibilityCheck]);

  return <LoadBonusEligibilityScreen />;
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  startEligibilityCheck: () => {
    dispatch(checkBonusVacanzeEligibility.request());
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(BonusCTAEligibilityStartScreen);
