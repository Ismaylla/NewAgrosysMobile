import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { colors } from "../theme/colors";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export function FormBackground({ children, style }: Props) {
  return (
    <View
      style={[styles.card, style]}
    >
      {children}
    </View>
  );
}

const CARD_RADIUS = 10;

const styles = StyleSheet.create({
    card: {
      backgroundColor: colors.cardGray,
      borderRadius: CARD_RADIUS,
      paddingHorizontal: 24,
      paddingTop: 22,
      paddingBottom: 36,
      minHeight: 200,
      minWidth: '85%',
      // shadow Android/iOS
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 6 },
      elevation: 8,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
});
