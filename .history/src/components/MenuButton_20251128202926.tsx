import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

type Props = {
  title: string;
  onPress: () => void;
};

export function MenuButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    marginBottom: 15,
  },

  menuText: {
    fontSize: 16,
    color: colors.white,
    weight: 600,
  },
});
