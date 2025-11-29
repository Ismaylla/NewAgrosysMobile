import React from "react";
import { Text, TouchableOpacity, StyleSheet, View, TextStyle } from "react-native";
import { colors } from "../theme/colors";

type Props = {
  children: React.ReactNode;
  marginTop?: TextStyle["marginTop"];
};

export function RowCentralized({ children, marginTop }: Props) {
  return (
    <View style={[styles.justifyButton, { marginTop: marginTop }]}>
        {children}
    </View>
  );
}

const styles = StyleSheet.create({
  justifyButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});
