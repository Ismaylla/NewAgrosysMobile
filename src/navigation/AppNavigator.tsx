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
import ListagemColheitaScreen from "../screens/Colheita/ListagemColheitaScreen";

//Produto
import RegistroProdutoScreen from "../screens/Produto/RegistroProdutoScreen";
import ListagemProdutoScreen from "../screens/Produto/ListagemProdutoScreen";

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
        
        {/*
          Bloco de Colheita Resolvido:
          Mantido RegistroColheita e adicionado ListagemColheita.
        */}
        <Stack.Screen name="RegistroColheitas" component={RegistroColheitaScreen} />
        <Stack.Screen name="ListagemColheitas" component={ListagemColheitaScreen} />
        
        <Stack.Screen name="RegistroProdutos" component={RegistroProdutoScreen} />
        <Stack.Screen name="ListagemProdutos" component={ListagemProdutoScreen} />
        <Stack.Screen name="RegistroVenda" component={RegistroVendaScreen} />
        <Stack.Screen name="Content" component={ContentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}