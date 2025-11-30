
import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SidebarLayout from "../../components/SidebarLayout";
import { FormHeader } from "../../components/FormHeader";
import { FilterBar } from "../../components/FilterBar";
import { CardListItem } from "../../components/CardListItem";
import { PrimaryButton } from "../../components/PrimaryButton";
import { Text } from "../../components/Text";
import DetailModal from "../../components/DetailModal";
import { DetailBody } from "../../components/DetailBody";


interface ProdutoItem {
  id: string;
  nome: string;
  categoria: string;
  quantidade: string;
  local: string;
  descricao: string;
}

const MOCK_PRODUTOS: ProdutoItem[] = [
  {
    id: "PROD-001",
    nome: "Produto A",
    categoria: "Categoria A",
    quantidade: "100",
    local: "Armazém 1",
    descricao: "Produto químico para controle de pragas."
  },
  {
    id: "PROD-002",
    nome: "Produto B",
    categoria: "Categoria B",
    quantidade: "50",
    local: "Armazém 2",
    descricao: "Sementes de alta qualidade para plantio."
  }
];

const getMenuItems = (navigation: any) => [
  { title: "Gestão de Colheitas", onPress: () => navigation.navigate("ListagemColheitas") },
  { title: "Gestão de Produtos", onPress: () => navigation.navigate("ListagemProdutos") },
  { title: "Gestão de Vendas", onPress: () => navigation.navigate("RegistroVenda") },
  { title: "Meu Perfil", onPress: () => navigation.navigate("Perfil") },
  { title: "Sair", onPress: () => navigation.navigate("Home") }
];

const formatDataToDetailBody = (item: ProdutoItem | null) => {
  if (!item) return [];
  return [
    { label: "ID do Produto", value: item.id },
    { label: "Nome", value: item.nome },
    { label: "Categoria", value: item.categoria },
    { label: "Quantidade em Estoque", value: item.quantidade },
    { label: "Local de Armazenamento", value: item.local },
    { label: "Descrição", value: item.descricao }
  ];
};

export default function ListagemProdutoScreen() {
  const navigation = useNavigation() as any;

  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroNome, setFiltroNome] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduto, setSelectedProduto] = useState<ProdutoItem | null>(null);

  const handleOpenDetailModal = (item: ProdutoItem) => {
    setSelectedProduto(item);
    setIsModalVisible(true);
  };

  const handleCloseDetailModal = () => {
    setIsModalVisible(false);
    setSelectedProduto(null);
  };

  const handleEdit = () => {
    if (selectedProduto) {
      navigation.navigate("RegistroProdutos", { id: selectedProduto.id });
      handleCloseDetailModal();
    }
  };

  return (
    <SidebarLayout headerTitle="Gestão de Produtos" menuItems={getMenuItems(navigation)}>

      <FormHeader
        title="Gestão de Produtos"
        subtitle="Controle e acompanhamento dos produtos"
        onBack={() => navigation.navigate("Content")}
      />

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
              options: []
            },
            {
              id: "categoria",
              placeholder: "Categoria",
              value: filtroCategoria,
              onChange: setFiltroCategoria,
              options: [
                { label: "Categoria A", value: "a" },
                { label: "Categoria B", value: "b" }
              ]
            }
          ]}
        />
      </View>

      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
          {MOCK_PRODUTOS.map((item) => (
            <CardListItem
              key={item.id}
              title={item.nome}
              titleIcon="chevron-right"
              fields={[
                { label: "Categoria", value: item.categoria, icon: "layers" },
                { label: "Quantidade", value: item.quantidade, icon: "archive" },
                { label: "Local", value: item.local, icon: "map-pin" }
              ]}
              onPress={() => handleOpenDetailModal(item)}
            />
          ))}
        </ScrollView>

        <View style={{ padding: 20, paddingBottom: 0, alignItems: "center" }}>
          <PrimaryButton
            title="+ Cadastrar Produto"
            onPress={() => navigation.navigate("RegistroProdutos")}
          />
        </View>
      </View>

      <DetailModal
        isVisible={isModalVisible}
        onClose={handleCloseDetailModal}
        title={selectedProduto ? `Detalhes: ${selectedProduto.nome}` : "Detalhes do Produto"}
        onEdit={handleEdit}
        onDelete={() => {}}
      >
        {selectedProduto ? (
          <DetailBody data={formatDataToDetailBody(selectedProduto)} />
        ) : (
          <View>
            <Text>Carregando detalhes...</Text>
          </View>
        )}
      </DetailModal>

    </SidebarLayout>
  );
}
