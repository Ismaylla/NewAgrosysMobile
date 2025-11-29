import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ContentScreen from "../screens/ContentScreen";
import RegistroColheitaScreen from "../screens/Colheitas/RegistroColheitaScreen";


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />

        {/* Tela inicial correta */}
        <Stack.Screen name="Content" component={ContentScreen} />
        <Stack.Screen name="RegistroColheita" component={RegistroColheitaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
