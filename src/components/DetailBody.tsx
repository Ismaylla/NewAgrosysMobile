// src/components/DetailBody.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { fontSizes, fontFamilies, fontWeights } from '../theme/fonts';
import { spacing } from '../theme/spacing';

// Interface para definir a estrutura de um único item de detalhe
export interface DetailItemProps {
  label: string;
  value: string | number;
}

// Componente para exibir um único par de Label/Value (Campo/Valor)
const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => (
  <View style={detailItemStyles.container}>
    <Text style={detailItemStyles.label}>{label}:</Text>
    {/* Ajusta o alinhamento do valor para a direita */}
    <Text style={detailItemStyles.value}>{value}</Text> 
  </View>
);

const detailItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm, 
    borderBottomWidth: 1,
    borderBottomColor: colors.cardGray,
  },
  label: {
    fontSize: fontSizes.md,
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.bold as any, // Resolução de tipo
    color: colors.primaryDark,
    flex: 1, // Para ocupar o espaço e empurrar o valor para a direita
  },
  value: {
    fontSize: fontSizes.md,
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular as any, // Resolução de tipo
    color: colors.primary,
    textAlign: 'right',
    flex: 2, // Para dar mais espaço ao valor, se necessário
  },
});

// Interface para definir os detalhes que este corpo receberá
interface DetailBodyProps {
  data: DetailItemProps[];
}

// O componente principal que recebe um array de detalhes
export const DetailBody: React.FC<DetailBodyProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      {/* Mapeia o array de detalhes para renderizar os DetailItems */}
      {data.map((item, index) => (
        <DetailItem key={index} label={item.label} value={item.value} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: spacing.sm,
  },
});