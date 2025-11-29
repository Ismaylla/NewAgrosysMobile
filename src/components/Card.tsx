// src/components/Card.tsx (CÓDIGO FINAL E LIMPO)
// Este é um componente genérico para Cards/Contêineres com sombra.

import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export function Card({ children, style }: Props) {
  return (
    <View style={[styles.card, style]}>
      {/* CORREÇÃO: Removemos qualquer espaço solto ao redor de {children} */}
      {children} 
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: colors.cardGray,
      borderRadius: spacing.sm, // Raio padrão de 8px
      padding: spacing.md, // Padding padrão de 16px
      
      // Sombras básicas
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 3 },
      elevation: 5,
    },
});