import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import SidebarLayout from "../../components/SidebarLayout";
import { FormHeader } from "../../components/FormHeader";
import { FilterBar } from "../../components/FilterBar";
import { CardListItem } from "../../components/CardListItem";
import { PrimaryButton } from "../../components/PrimaryButton";

// Modal
import { Text } from "../../components/Text";
import DetailModal from "../../components/DetailModal";
import { DetailBody, DetailItemProps } from "../../components/DetailBody";

/* -------------------------------------------------------------------------- */
/* DADOS MOCKADOS                                                              */
/* -------------------------------------------------------------------------- */
interface ColheitaItem {
  id: string;
  data: string;
  uap: string;
  responsavel: string;
  cultura: string;
  peso: number;
}

const MOCK_COLHEITAS: ColheitaItem[] = [
  {
    id: "COL-001",
    data: "10/05/2025",
    uap: "UAP 01",
    responsavel: "João Silva",
    cultura: "Milho",
    peso: 5000,
  },
  {
    id: "COL-002",
    data: "12/05/2025",
    uap: "UAP 03",
    responsavel: "Mariana",
    cultura: "Soja",
    peso: 3500,
  },
];

/* -------------------------------------------------------------------------- */
/* FORMATADOR PARA O DETAIL BODY                                               */
/* -------------------------------------------------------------------------- */
const formatDataToDetailBody = (item: ColheitaItem | null): DetailItemProps[] => {
  if (!item) return [];

  return [
    { label: "ID da Colheita", value: item.id },
    { label: "Cultura", value: item.cultura },
    { label: "Data de Colheita", value: item.data },
    { label: "UAP", value: item.uap },
    { label: "Peso Colhido (kg)", value: item.peso },
    { label: "Responsável", value: item.responsavel },
  ];
};

export default function ListagemColheitaScreen() {
  const navigation = useNavigation() as any;

  /* ------------------------------------------------------------------------ */
  /* FILTROS                                                                   */
  /* ------------------------------------------------------------------------ */
  const [filtroUap, setFiltroUap] = useState("");
  const [filtroAno, setFiltroAno] = useState("");
  const [filtroResponsavel, setFiltroResponsavel] = useState("");

  /* ------------------------------------------------------------------------ */
  /* MODAL                                                                     */
  /* ------------------------------------------------------------------------ */
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedColheita, setSelectedColheita] = useState<ColheitaItem | null>(null);

  const handleOpenDetailModal = (item: ColheitaItem) => {
    setSelectedColheita(item);
    setIsModalVisible(true);
  };

  const handleCloseDetailModal = () => {
    setIsModalVisible(false);
    setSelectedColheita(null);
  };

  const handleEdit = () => {
    if (selectedColheita) {
      navigation.navigate("RegistroColheitas", { id: selectedColheita.id });
      handleCloseDetailModal();
    }
  };

  return (
    <SidebarLayout headerTitle="Gestão de Colheitas">
      {/* CABEÇALHO */}
      <FormHeader
        title="Gestão de Colheitas"
        subtitle="Controle e acompanhamento das colheitas"
        onBack={() => navigation.navigate("Content")}
      />

      {/* FILTROS */}
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

      {/* LISTAGEM */}
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
              onPress={() => handleOpenDetailModal(item)}
            />
          ))}
        </ScrollView>

        {/* BOTÃO */}
        <View style={{ padding: 20, paddingBottom: 0, alignItems: "center" }}>
          <PrimaryButton
            title="+ Cadastrar Colheita"
            onPress={() => navigation.navigate("RegistroColheitas")}
          />
        </View>
      </View>

      {/* MODAL */}
      <DetailModal
        isVisible={isModalVisible}
        onClose={handleCloseDetailModal}
        title={
          selectedColheita
            ? `Detalhes: Colheita ${selectedColheita.id}`
            : "Detalhes da Colheita"
        }
        onEdit={handleEdit}
        onDelete={() => {}}
      >
        {selectedColheita ? (
          <DetailBody data={formatDataToDetailBody(selectedColheita)} />
        ) : (
          <View>
            <Text>Carregando detalhes...</Text>
          </View>
        )}
      </DetailModal>
    </SidebarLayout>
  );
}
