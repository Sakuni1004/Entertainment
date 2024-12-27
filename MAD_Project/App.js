import React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/loginScreen";
import RegisterScreen from "./src/screens/registerScreen";
import HomeScreen from "./src/screens/homeScreen";
import ListScreen from "./src/screens/listScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
