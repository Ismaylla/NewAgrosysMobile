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

interface UapItem {
  id: string;
  nome: string;
  tipoCultivo: string;
  localizacao: string;
  area: string;
  responsavel: string;
}

const MOCK_UAPS: UapItem[] = [
  {
    id: "UAP-001",
    nome: "UAP Fruticultura",
    tipoCultivo: "Fruticultura",
    localizacao: "Setor Norte",
    area: "2.5 hectares",
    responsavel: "João Silva"
  },
  {
    id: "UAP-002",
    nome: "UAP Hortaliças",
    tipoCultivo: "Hortaliças",
    localizacao: "Setor Leste",
    area: "1.2 hectares",
    responsavel: "Maria Souza"
  }
];

const formatDataToDetailBody = (item: UapItem | null) => {
  if (!item) return [];
  return [
    { label: "ID da UAP", value: item.id },
    { label: "Nome da UAP", value: item.nome },
    { label: "Tipo de Cultivo", value: item.tipoCultivo },
    { label: "Localização", value: item.localizacao },
    { label: "Área", value: item.area },
    { label: "Responsável", value: item.responsavel }
  ];
};

export default function ListagemUapScreen() {
  const navigation = useNavigation() as any;

  const [filtroNome, setFiltroNome] = useState("");
  const [filtroCultivo, setFiltroCultivo] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUap, setSelectedUap] = useState<UapItem | null>(null);

  const handleOpenDetailModal = (item: UapItem) => {
    setSelectedUap(item);
    setIsModalVisible(true);
  };

  const handleCloseDetailModal = () => {
    setIsModalVisible(false);
    setSelectedUap(null);
  };

  const handleEdit = () => {
    if (selectedUap) {
      navigation.navigate("RegistroUap", { id: selectedUap.id });
      handleCloseDetailModal();
    }
  };

  return (
    <SidebarLayout headerTitle="Gestão de UAPs">

      <FormHeader
        title="Gestão de UAPs"
        subtitle="Acompanhamento Unidades de Produção"
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
              id: "tipoCultivo",
              placeholder: "Tipo de Cultivo",
              value: filtroCultivo,
              onChange: setFiltroCultivo,
              options: [
                { label: "Fruticultura", value: "fruticultura" },
                { label: "Hortaliças", value: "hortalicas" },
                { label: "Grãos", value: "graos" }
              ]
            }
          ]}
        />
      </View>

      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
          {MOCK_UAPS.map((item) => (
            <CardListItem
              key={item.id}

              /* ⭐ TÍTULO COM ID + NOME */
              title={`${item.id} - ${item.nome}`}
              titleIcon="chevron-right"

              /* ⭐ CAMPOS DO CARD: cultivo, localização e área */
              fields={[
                { label: "Tipo de Cultivo", value: item.tipoCultivo, icon: "tag" },
                { label: "Localização", value: item.localizacao, icon: "map-pin" },
                { label: "Área", value: item.area, icon: "map" }
              ]}

              onPress={() => handleOpenDetailModal(item)}
            />
          ))}
        </ScrollView>

        <View style={{ padding: 20, paddingBottom: 0, alignItems: "center" }}>
          <PrimaryButton
            title="+ Cadastrar UAP"
            onPress={() => navigation.navigate("RegistroUap")}
          />
        </View>
      </View>

      <DetailModal
        isVisible={isModalVisible}
        onClose={handleCloseDetailModal}
        title={selectedUap ? `Detalhes: ${selectedUap.nome}` : "Detalhes da UAP"}
        onEdit={handleEdit}
        onDelete={() => {}}
      >
        {selectedUap ? (
          <DetailBody data={formatDataToDetailBody(selectedUap)} />
        ) : (
          <View>
            <Text>Carregando detalhes...</Text>
          </View>
        )}
      </DetailModal>

    </SidebarLayout>
  );
}
