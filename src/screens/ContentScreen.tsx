import React from "react";
import { View, StyleSheet } from "react-native";
import SidebarLayout from "../components/SidebarLayout";
import { Text } from "../components/Text";
import { colors } from "../theme/colors";
import { Logo } from "../components/Logo";
import { useNavigation } from "@react-navigation/native";

export default function ContentScreen() {
    const navigation = useNavigation();

    const menuItems = [
        {
            title: "Gestão de Colheitas",
            onPress: () => navigation.navigate("ListagemColheitas" as never),
        },
        {
            title: "Gestão de Produtos",
            onPress: () => navigation.navigate("ListagemProdutos" as never),
        },
        {
            title: "Gestão de Vendas",
            onPress: () => navigation.navigate("RegistroVenda" as never),
        },

        {
            title: "Meu Perfil",
            onPress: () => navigation.navigate("Perfil" as never),
        },
        {
            title: "Sair",
            onPress: () => navigation.navigate("Home" as never),
        },
    ];

    return (
        <SidebarLayout headerTitle="AGROSYS" menuItems={menuItems}>
            <View style={styles.welcomeContainer}>
                <Logo width={120} height={120} />

                <Text style={styles.title} variant="title">
                    Bem-vindo ao AgroSys!
                </Text>

                <Text style={styles.subtitle}>
                    Use o menu lateral para iniciar sua gestão.
                </Text>
            </View>
        </SidebarLayout>
    );
}

const styles = StyleSheet.create({
    welcomeContainer: {
        alignItems: "center",
        paddingVertical: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.primaryDark,
        marginTop: 15,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        color: colors.primaryDark,
        marginTop: 10,
        textAlign: "center",
        paddingHorizontal: 20,
    },
});
