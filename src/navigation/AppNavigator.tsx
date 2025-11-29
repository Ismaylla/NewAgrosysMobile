import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Telas básicas
import HomeScreen from "../screens/HomeScreen";
import ContentScreen from "../screens/ContentScreen";

//Auth
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

//Colheita
import RegistroColheitaScreen from "../screens/Colheita/RegistroColheitaScreen";

//Produto
import RegistroProdutoScreen from "../screens/Produto/RegistroProdutoScreen";

//Venda
import RegistroVendaScreen from "../screens/Venda/RegistroVendaScreen";

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
        <Stack.Screen name="RegistroColheita" component={RegistroColheitaScreen} />
        <Stack.Screen name="RegistroProdutos" component={RegistroProdutoScreen} />
        <Stack.Screen name="RegistroVenda" component={RegistroVendaScreen} />
        <Stack.Screen name="Content" component={ContentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
