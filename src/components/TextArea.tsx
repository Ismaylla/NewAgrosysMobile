import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type Props = {
  label?: string;
  value?: string;
  onChange?: (t: string) => void;
  placeholder?: string;
};

export function TextArea({ label, value, onChange, placeholder }: Props) {
  return (
    <View style={styles.wrap}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        style={styles.textarea}
        multiline
        textAlignVertical="top"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginVertical: 10,
  },

  label: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#0d2610",
    marginBottom: 10,
  },

  textarea: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    minHeight: 120,     // altura grande para observações
    width: "100%",      // ocupa toda a largura
    fontSize: 16,
  },
});
