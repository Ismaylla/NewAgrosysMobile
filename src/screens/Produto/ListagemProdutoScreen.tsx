import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import SidebarLayout from "../../components/SidebarLayout";
import { FormHeader } from "../../components/FormHeader";
import { FilterBar } from "../../components/FilterBar";
import { CardListItem } from "../../components/CardListItem";
import { PrimaryButton } from "../../components/PrimaryButton";

/* -------------------------------------------------------------------------- */
/* 🎯 DADOS MOCKADOS                                                           */
/* -------------------------------------------------------------------------- */
const MOCK_PRODUTOS = [
  {
    id: "PROD-001",
    nome: "Produto A",
    categoria: "Categoria A",
    quantidade: "100",
    local: "Armazém 1",
  },
  {
    id: "PROD-002",
    nome: "Produto B",
    categoria: "Categoria B",
    quantidade: "50",
    local: "Armazém 2",
  },
];

/* -------------------------------------------------------------------------- */
/* 📋 MENU LATERAL                                                             */
/* -------------------------------------------------------------------------- */
const getMenuItems = (navigation: any) => [
  { title: "Gestão de Produtos", onPress: () => navigation.navigate("ListagemProdutos") },
  { title: "Gestão de Colheitas", onPress: () => navigation.navigate("ListagemColheitas") },
  { title: "Gestão de Vendas", onPress: () => {} },

  { title: "Meu Perfil", onPress: () => {} },
  { title: "Sair", onPress: () => navigation.navigate("Home") },
];


export default function ListagemProdutoScreen() {
  const navigation = useNavigation();

  /* ------------------------------------------------------------------------ */
  /* 🔎 ESTADOS DE FILTRO                                                      */
  /* ------------------------------------------------------------------------ */
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroNome, setFiltroNome] = useState("");

  return (
    <SidebarLayout headerTitle="Gestão de Produtos" menuItems={getMenuItems(navigation)}>

      {/* -------------------------------------------------------------------- */}
      {/* 🔙 CABEÇALHO                                                         */}
      {/* -------------------------------------------------------------------- */}
      <FormHeader
        title="Gestão de Produtos"
        subtitle="Controle e acompanhamento dos produtos"
        onBack={() => navigation.navigate("Content" as never)}
      />

      {/* -------------------------------------------------------------------- */}
      {/* 🔎 FILTROS                                                           */}
      {/* -------------------------------------------------------------------- */}
      <View style={{ marginTop: 15, marginBottom: 5 }}>
        <FilterBar
          title="Filtros de Busca"
          icon="filter"
          filters={[
            {
              id: "nome",
              placeholder: "Nome",
              value: filtroNome,
              onChange: setFiltroNome,
            },
            {
              id: "categoria",
              placeholder: "Categoria",
              value: filtroCategoria,
              onChange: setFiltroCategoria,
              options: [
                { label: "Categoria A", value: "a" },
                { label: "Categoria B", value: "b" },
              ],
            },
          ]}
        />
      </View>

      {/* -------------------------------------------------------------------- */}
      {/* 📦 LISTA DE PRODUTOS                                                  */}
      {/* -------------------------------------------------------------------- */}
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
          {MOCK_PRODUTOS.map((item) => (
            <CardListItem
              key={item.id}
              title={item.nome} // O nome será o "id grande"
              titleIcon="chevron-right"
              fields={[
                { label: "Categoria", value: item.categoria, icon: "layers" },
                { label: "Quantidade", value: item.quantidade, icon: "archive" },
                { label: "Local", value: item.local, icon: "map-pin" },
              ]}
              onPress={() =>
                navigation.navigate("RegistroProdutos" as never, { id: item.id })
              }
            />
          ))}
        </ScrollView>

        {/* ------------------------------------------------------------------ */}
        {/* ➕ BOTÃO FIXO DE CADASTRO                                          */}
        {/* ------------------------------------------------------------------ */}
        <View style={{ padding: 20, paddingBottom: 0, alignItems: "center" }}>
          <PrimaryButton
            title="+ Cadastrar Produto"
            onPress={() => navigation.navigate("RegistroProdutos" as never)}
          />
        </View>
      </View>

    </SidebarLayout>
  );
}
