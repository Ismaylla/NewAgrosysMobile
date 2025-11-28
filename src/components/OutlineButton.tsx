import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

type Props = {
  title: string;
  onPress: () => void;
};

export function OutlineButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderWidth: 2,
    borderColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 50,
    width: 200,
    alignItems: "center",
  },
  text: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 14,
  },
});
