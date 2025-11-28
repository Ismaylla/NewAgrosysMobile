import React from 'react';
import { Text, StyleSheet, TextStyle  } from 'react-native';
import { colors } from "../theme/colors";

type Props = {
  children: string;
  color?: string;
  size?: number;
  weight?: TextStyle["fontWeight"];
  style?: TextStyle;
};

export function FormTitle({
  children,
  color = colors.primary,
  size = 28,
  weight = "600",
  style,
}: Props ) {
  return (
    <Text  style={[
        styles.base,
        { color, fontSize: size, fontWeight: weight },
        style,
      ]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  base: {
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.25)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
    letterSpacing: 2,
    marginBottom: 12,
  },
});
