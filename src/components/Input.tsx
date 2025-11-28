import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';


type Props = { 
    placeholder?: string; 
    value?: string; 
    onChange?: (t: string) => void; 
    label?: string 
};


export function Input({ placeholder, value, onChange, label }: Props) {
    return (
        <View style={styles.wrap}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput value={value} onChangeText={onChange} placeholder={placeholder} style={styles.input} />
        </View>
    );
}


const styles = StyleSheet.create({
    wrap: { marginVertical: 6 },
    label: { marginBottom: 6, color: '#0d2610', fontWeight: '700' },
    input: { backgroundColor: 'white', padding: 10, borderRadius: 8, marginBottom:20}
});