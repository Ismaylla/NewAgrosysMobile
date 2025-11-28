import React from "react";
import { Image, StyleSheet } from "react-native";

type Props = {
  width?: number;
  height?: number;
};


export function Logo({width, height}: Props ) {
  return (
    <Image
      source={require("../../assets/logo.png")} // coloque seu logo aqui
      style={[
        styles.logo,
        width ? { width } : {},
        height ? { height } : {},
      ]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 140,
    height: 140,
  },
});
