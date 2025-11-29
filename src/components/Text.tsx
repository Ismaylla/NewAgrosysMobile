// src/components/Text.tsx (Componente de Tipografia FINAL)

import React from 'react';
import { 
  Text as RNText, 
  StyleSheet, 
  TextStyle, // <-- CORREÇÃO: Importação explícita de TextStyle
  TextProps 
} from 'react-native'; 
// Importa os tokens (Assumindo que eles estão exportados em '../theme/fonts')
import { fontFamilies, fontSizes, fontWeights } from '../theme/fonts'; 


// Definimos as variantes que a tela Home usará:
type TextVariant = 'heading' | 'subheading' | 'body' | 'caption' | 'title';

// Este é o componente que substituirá a tag <Text> nativa.
interface CustomTextProps extends TextProps {
  variant?: TextVariant; 
  color?: string; // Aceita cor direta ou token futuro
  weight?: TextStyle['fontWeight'];
  style?: TextStyle;
}

export function Text({ 
    children, 
    variant = 'body', 
    color, 
    weight, 
    style, 
    ...rest 
}: CustomTextProps) {
  
  // Mapeamento das variantes para os tokens de tipografia
  const getTextStyle = (): TextStyle => {
    switch (variant) {
      case 'title':
        return { 
          fontSize: fontSizes.xl, 
          fontFamily: fontFamilies.heading, 
          // Aplica casting para resolver o erro de tipagem
          fontWeight: fontWeights.bold as TextStyle['fontWeight'] 
        };
      case 'subheading':
        return { 
          fontSize: fontSizes.lg, 
          fontFamily: fontFamilies.heading, 
          fontWeight: fontWeights.medium as TextStyle['fontWeight'] 
        };
      case 'caption':
        return { 
          fontSize: fontSizes.sm, 
          fontFamily: fontFamilies.body, 
          fontWeight: fontWeights.regular as TextStyle['fontWeight'] 
        };
      case 'body':
      default:
        return { 
          fontSize: fontSizes.md, 
          fontFamily: fontFamilies.body, 
          fontWeight: fontWeights.regular as TextStyle['fontWeight'] 
        };
    }
  };

  return (
    <RNText 
      style={[
        getTextStyle(), 
        { color: color, fontWeight: weight }, 
        style 
      ]} 
      {...rest}
    >
      {children}
    </RNText>
  );
}