
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Context
import { useAuth } from "../../contexts/AuthContext";

// Components
import SidebarLayout from "../../components/SidebarLayout";
import { Text } from "../../components/Text";
import { colors } from "../../theme/colors";
import { PrimaryButton } from "../../components/PrimaryButton";
import { ProfileAvatar } from "../../components/ProfileAvatar";
import { UserInfo } from "../../components/UserInfo";
import { FormHeader } from "../../components/FormHeader";

export default function ProfileScreen() {
  const navigation = useNavigation() as any;
  const { height } = Dimensions.get("window");

  // USUÁRIO VINDO DO CONTEXT (BACKEND FUTURO)
  const { user } = useAuth();

  return (
    <SidebarLayout headerTitle="Meu Perfil">
      
      {/* HEADER*/}
      <FormHeader
        title="Meu Perfil"
        subtitle="Visualize seus dados"
        onBack={() => navigation.goBack()}
      />

      <View style={[styles.container, { paddingTop: height * 0.05 }]}>

        {/* ÍCONE DE PERFIL DO FIGMA */}
        <View style={styles.avatarWrapper}>
          <ProfileAvatar />
        </View>

        {/* TÍTULO */}
        <Text style={styles.title}>MEUS DADOS</Text>

        {/* CARD COM INFORMAÇÕES */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Informações do Usuário</Text>

          <UserInfo label="Nome" value={user?.nome || "Não informado"} />
          <UserInfo label="Email" value={user?.email || "Não informado"} />
          <UserInfo label="Perfil" value={user?.perfil || "Usuário"} />

          {/* BOTÃO CENTRALIZADO */}
          <View style={styles.buttonWrapper}>
            <PrimaryButton
              title="Editar Dados"
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </SidebarLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  avatarWrapper: {
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.primaryDark,
    marginTop: 10,
    letterSpacing: 1,
  },

  card: {
    width: "85%",
    backgroundColor: colors.white,
    marginTop: 40,
    borderRadius: 16,
    padding: 20,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.primaryDark,
    marginBottom: 12,
    textAlign: "center",
  },

  buttonWrapper: {
    marginTop: 20,
    alignItems: "center",
  },
});
