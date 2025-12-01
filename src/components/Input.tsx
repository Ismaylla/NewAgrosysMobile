

import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

type Props = { 
  placeholder?: string; 
  value?: string; 
  onChange?: (t: string) => void; 
  label?: string;
  editable?: boolean;

  secureTextEntry?: boolean; // ADICIONADO: permite campo de senha
};

export function Input({
  placeholder,
  value,
  onChange,
  label,
  editable = true,
  secureTextEntry = false, // ADICIONADO: valor padrão
}: Props) {
  return (
    <View style={styles.wrap}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        editable={editable}
        secureTextEntry={secureTextEntry} // ADICIONADO: ativa máscara da senha
        style={[
          styles.input,
          editable === false && styles.inputDisabled,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { 
    marginVertical: 6 
  },

  label: { 
    marginBottom: 6, 
    color: '#0d2610', 
    fontWeight: '700' 
  },

  input: { 
    backgroundColor: 'white', 
    padding: 10, 
    borderRadius: 8, 
    marginBottom: 20 
  },

  inputDisabled: { 
    backgroundColor: '#eee', 
    color: '#666' 
  }
});
