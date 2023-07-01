import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { isGestureEnabled } from "../../../utils/navigation";
import ItwActivationDetailsScreen from "../screens/ItwActivationDetailsScreen";
import { ItwParamsList } from "./params";
import { ITW_ROUTES } from "./routes";

const Stack = createStackNavigator<ItwParamsList>();

export const ItwStackNavigator = () => (
  <Stack.Navigator
    headerMode={"none"}
    screenOptions={{ gestureEnabled: isGestureEnabled }}
  >
    <Stack.Screen
      name={ITW_ROUTES.ACTIVATION.DETAILS}
      component={ItwActivationDetailsScreen}
    />
  </Stack.Navigator>
);
