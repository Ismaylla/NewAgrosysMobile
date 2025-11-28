import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Logo } from "../components/Logo";
import { OutlineButton } from "../components/OutlineButton";
import { PrimaryButton } from "../components/PrimaryButton";
import { colors } from "../theme/colors";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Logo />

      <Text style={styles.title}>AGROSYS</Text>

      <View style={styles.buttons}>
        <OutlineButton title="ENTRAR" onPress={() => navigation.navigate("Login" as never)} />
        <PrimaryButton title="CADASTRAR" onPress={() => navigation.navigate("Register" as never)} />
      </View>
    </View>
  );
}

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: height * 0.12,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primaryDark,
    marginTop: 20,
    letterSpacing: 1,
  },
  buttons: {
    marginTop: height * 0.20,
    alignItems: "center",
    gap: 20,
  },
});
