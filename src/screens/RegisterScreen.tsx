
// src/screens/Login/RegisterScreen.tsx
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import { colors } from "../theme/colors";
import { useNavigation } from '@react-navigation/native';
import { Logo } from '../components/Logo';
import { FormTitle } from '../components/FormTitle';
import { BackButton } from '../components/BackButton';
import { FormBackground } from '../components/FormBackground';

import { Input } from '../components/Input';
import { PrimaryButton } from '../components/PrimaryButton';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useState('');
  const [showPass, setShowPass] = useState(false); // ✅ mostrar/ocultar senha

  const navigation = useNavigation();

  // ✅ Validação de e-mail
  const validarEmail = (email: string) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  // ✅ AÇÃO DO BOTÃO COM TODAS AS VALIDAÇÕES
  const handleRegister = () => {

    // ✅ Validação do nome (mínimo 3 caracteres)
    if (usuario.trim().length < 3) {
      Alert.alert(
        "Nome inválido",
        "O nome deve ter no mínimo 3 caracteres."
      );
      return;
    }

    // ✅ Validação do e-mail
    if (!validarEmail(email)) {
      Alert.alert(
        "E-mail inválido",
        "Digite um e-mail em formato válido (ex: nome@gmail.com)"
      );
      return;
    }

    // ✅ Validação da senha (mínimo 8 caracteres)
    if (senha.length < 8) {
      Alert.alert(
        "Senha inválida",
        "A senha deve conter no mínimo 8 caracteres."
      );
      return;
    }

    // ✅ Se passar em tudo, pode seguir
    navigation.navigate("Login" as never);
  };

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
            placeholder="Digite seu nome"
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
            secureTextEntry={!showPass} // ✅ AQUI CONTROLA A VISUALIZAÇÃO
          />

          {/* ✅ BOTÃO DE MOSTRAR / OCULTAR SENHA */}
          <TouchableOpacity
            onPress={() => setShowPass(!showPass)}
            style={styles.showPassButton}
          >
            <Text style={styles.showPassText}>
              {showPass ? "Ocultar senha" : "Mostrar senha"}
            </Text>
          </TouchableOpacity>

          <View style={styles.justifyButton}>
            <PrimaryButton
              title="Criar Conta"
              onPress={handleRegister}
            />
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

  justifyButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  showPassButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },

  showPassText: {
    color: '#1D4528',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },

  footer: {
    minWidth: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'flex-end',
    paddingBottom: 60
  }
});

