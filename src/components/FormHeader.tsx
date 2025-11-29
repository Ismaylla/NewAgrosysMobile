import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { BackButton } from "./BackButton";

type Props = {
  title: string;
  subtitle?: string;
  onBack?: () => void;
};

export function FormHeader({ title, subtitle, onBack }: Props) {
  return (
    <View style={styles.container}>
      
      {/* Linha com botão e título centralizado */}
      <View style={styles.row}>
        {onBack ? (
          <BackButton onPress={onBack}  style={{ marginTop: -20 }}  />
        ) : (
          <View style={{ width: 25 }} /> // espaço vazio para manter alinhamento
        )}

        <View style={styles.textWrapper}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>

        <View style={{ width: 25 }} /> {/* balanceia o layout */}
      </View>

      {/* Linha inferior centralizada */}
      <View style={styles.bottomLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 14,
    alignItems: "center",
  },

  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  textWrapper: {
    flex: 1,
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primaryDark,
  },

  subtitle: {
    fontSize: 16,
    color: colors.primary,
    marginTop: 4,
  },

  bottomLine: {
    width: "50%",
    height: 1,
    backgroundColor: "#000",
    marginTop: 12,
    borderRadius: 2,
  },
});
