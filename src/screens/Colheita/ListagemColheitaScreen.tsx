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
const MOCK_COLHEITAS = [
  {
    id: "COL-001",
    data: "10/05/2025",
    uap: "UAP 01",
    responsavel: "João Silva",
  },
  {
    id: "COL-002",
    data: "12/05/2025",
    uap: "UAP 03",
    responsavel: "Mariana",
  },
];

/* -------------------------------------------------------------------------- */
/* 📋 MENU LATERAL                                                             */
/* -------------------------------------------------------------------------- */
const getMenuItems = (navigation: any) => [
  { title: "Gestão de Colheitas", onPress: () => navigation.navigate("ListagemColheitas") },
  { title: "Gestão de Vendas", onPress: () => {} },
  { title: "Gestão de Ferramentas", onPress: () => {} },
  { title: "Cadastros Gerais", onPress: () => {} },
  { title: "Meu Perfil", onPress: () => {} },
  { title: "Sair", onPress: () => navigation.navigate("Home") },
];

export default function ListagemColheitaScreen() {
  const navigation = useNavigation();

  /* ------------------------------------------------------------------------ */
  /* 🔎 ESTADOS DE FILTRO                                                      */
  /* ------------------------------------------------------------------------ */
  const [filtroUap, setFiltroUap] = useState("");
  const [filtroAno, setFiltroAno] = useState("");
  const [filtroResponsavel, setFiltroResponsavel] = useState("");

  return (
    <SidebarLayout headerTitle="Gestão de Colheitas" menuItems={getMenuItems(navigation)}>

      {/* -------------------------------------------------------------------- */}
      {/* 🔙 CABEÇALHO                                                         */}
      {/* -------------------------------------------------------------------- */}
      <FormHeader
        title="Gestão de Colheitas"
        subtitle="Controle e acompanhamento das colheitas"
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
              id: "ano",
              placeholder: "Ano",
              value: filtroAno,
              onChange: setFiltroAno,
              options: [
                { label: "2025", value: "2025" },
                { label: "2024", value: "2024" },
                { label: "2023", value: "2023" },
              ],
            },
            {
              id: "uap",
              placeholder: "UAP",
              value: filtroUap,
              onChange: setFiltroUap,
              options: [
                { label: "UAP 01", value: "01" },
                { label: "UAP 02", value: "02" },
                { label: "UAP 03", value: "03" },
              ],
            },
            {
              id: "responsavel",
              placeholder: "Responsável",
              value: filtroResponsavel,
              onChange: setFiltroResponsavel,
              options: [
                { label: "João", value: "joao" },
                { label: "Mariana", value: "mariana" },
                { label: "Pedro", value: "pedro" },
              ],
            },
          ]}
        />
      </View>

      {/* -------------------------------------------------------------------- */}
      {/* 📦 LISTA DE COLHEITAS                                                */}
      {/* -------------------------------------------------------------------- */}
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
          {MOCK_COLHEITAS.map((item) => (
            <CardListItem
              key={item.id}
              title={`Colheita ${item.id}`}
              titleIcon="chevron-right"
              fields={[
                { label: "Data", value: item.data, icon: "calendar" },
                { label: "UAP", value: item.uap, icon: "map-pin" },
                { label: "Responsável", value: item.responsavel, icon: "user" },
              ]}
              onPress={() =>
                navigation.navigate("RegistroColheita" as never, { id: item.id })
              }
            />
          ))}
        </ScrollView>

        {/* ------------------------------------------------------------------ */}
        {/* ➕ BOTÃO FIXO DE CADASTRO                                          */}
        {/* ------------------------------------------------------------------ */}
        <View style={{ padding: 20, paddingBottom: 0, alignItems: "center" }}>
          <PrimaryButton
            title="+ Cadastrar Colheita"
            onPress={() => navigation.navigate("RegistroColheitas" as never)}
          />
        </View>
      </View>

    </SidebarLayout>
  );
}
