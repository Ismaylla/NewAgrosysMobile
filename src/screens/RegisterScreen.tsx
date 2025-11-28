// src/screens/Login/LoginScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { colors } from "../theme/colors";
import { useNavigation } from '@react-navigation/native';
import { Logo } from '../components/Logo'
import { FormTitle } from '../components/FormTitle'
import Checkbox from 'expo-checkbox';
import { BackButton } from '../components/BackButton';
import { FormBackground } from '../components/FormBackground'


import {Input} from '../components/Input';
import {PrimaryButton} from '../components/PrimaryButton';


export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [lembrar, setLembrar] = useState(false);

  const navigation = useNavigation();
  

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.topWrapper}>
          <Logo width={90}/>
        </View>


        <FormBackground>
          <FormTitle children='CRIAR CONTA' />

          <Input
            label="Usuário"
            placeholder="Nome ou @gmail.com"
            value={usuario}
            onChange={setUsuario}
          />

          <Input
            label="Email"
            placeholder="@gmail.com"
            value={email}
            onChange={setEmail}
          />

          <Input
            label="Senha"
            placeholder="Senha"
            value={senha}
            onChange={setSenha}
          />

          <View style={styles.justifyButton}>
            <PrimaryButton title="Criar Conta" onPress={() => navigation.navigate("Login" as never)} />
          </View>
          
        </FormBackground>
        <View style={[styles.flex, styles.footer]}>
          <BackButton onPress={() => navigation.navigate("Home" as never)}/>
        </View>
      </ScrollView>
      
    </KeyboardAvoidingView>
  );
}

const TOP_HEIGHT = 210;

const styles = StyleSheet.create({
  flex: { flex: 1 },

  container: {
    minHeight: '100%',
    backgroundColor: colors.background,
  },

  topWrapper: {
    height: TOP_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },

  forgotRow: {
    alignItems: 'flex-end',
    marginTop: 8,
    marginBottom: 6,
  },

  forgotText: {
    color: '#1D4528',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },

  justifyButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    
  },

  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkboxLabel: {
    marginLeft: 6,
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },

  footer: {
    minWidth: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'flex-end',
    paddingBottom: 60
  }

});
