import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../theme/colors';

type Props = {
  onPress: () => void;
  size?: number;       // tamanho do botão
  iconSize?: number;   // tamanho do ícone
  style?: ViewStyle;   // customização opcional
};

export function BackButton({
  onPress,
  size = 25,
  iconSize = 15,
  style,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { width: size, height: size, borderRadius: size / 2 }, style]}
      activeOpacity={0.7}
    >
      <Feather name="chevron-left" size={iconSize} color="#ffffffff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',

    // sombra iOS
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },

    // sombra Android
    elevation: 4,
  },
});
