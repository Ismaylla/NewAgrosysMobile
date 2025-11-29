import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "./Text";
import { colors } from "../theme/colors";

type Props = {
  label: string;
  value: string;
};

export function UserInfo({ label, value }: Props) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}:</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: "row",
    marginBottom: 8,
  },

  infoLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.primaryDark,
    marginRight: 6,
  },

  infoValue: {
    fontSize: 14,
    color: colors.primaryDark,
  },
});
