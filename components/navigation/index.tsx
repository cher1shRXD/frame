import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../home";
import CameraScreen from "../camera";
import ConfirmPhotoScreen from "../confirmPhoto";
import ResultScreen from "../resultScreen";


const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConfirmPhotoScreen"
        component={ConfirmPhotoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}

export default Navigation;
