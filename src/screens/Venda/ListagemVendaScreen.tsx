// import React, { useState } from "react";
// import { View, ScrollView } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// // Components
// import SidebarLayout from "../../components/SidebarLayout";
// import { FormHeader } from "../../components/FormHeader";
// import { FilterBar } from "../../components/FilterBar";
// import { CardListItem } from "../../components/CardListItem";
// import { PrimaryButton } from "../../components/PrimaryButton";

// // Modal
// import { Text } from "../../components/Text";
// import DetailModal from "../../components/DetailModal";
// import { DetailBody, DetailItemProps } from "../../components/DetailBody";

// /* -------------------------------------------------------------------------- */
// /* DADOS MOCKADOS                                                              */
// /* -------------------------------------------------------------------------- */
// interface VendaItem {
//   id: string;
//   data: string;
//   uap: string;
//   produto: string;
//   quantidade: number;
//   formaPagamento: string;
//   condicaoEntrega: string;
//   precoUnitario: number;
//   desconto: number;
//   valorTotal: number;
// }

// const MOCK_VENDAS: VendaItem[] = [
//   {
//     id: "VEN-001",
//     data: "10/05/2025",
//     uap: "UAP 01",
//     produto: "Produto A",
//     quantidade: 10,
//     formaPagamento: "Dinheiro",
//     condicaoEntrega: "Entrega Imediata",
//     precoUnitario: 50,
//     desconto: 10,
//     valorTotal: 450, // (10 * 50) * 0.9
//   },
//   {
//     id: "VEN-002",
//     data: "12/05/2025",
//     uap: "UAP 02",
//     produto: "Produto B",
//     quantidade: 5,
//     formaPagamento: "Cartão",
//     condicaoEntrega: "Programada",
//     precoUnitario: 100,
//     desconto: 0,
//     valorTotal: 500,
//   },
// ];

// /* -------------------------------------------------------------------------- */
// /* FORMATADOR PARA O DETAIL BODY                                               */
// /* -------------------------------------------------------------------------- */
// const formatDataToDetailBody = (item: VendaItem | null): DetailItemProps[] => {
//   if (!item) return [];

//   return [
//     { label: "ID da Venda", value: item.id },
//     { label: "Produto", value: item.produto },
//     { label: "Data da Venda", value: item.data },
//     { label: "UAP", value: item.uap },
//     { label: "Quantidade", value: item.quantidade },
//     { label: "Preço Unitário (R$)", value: item.precoUnitario },
//     { label: "Desconto (%)", value: item.desconto },
//     { label: "Valor Total (R$)", value: item.valorTotal },
//     { label: "Forma de Pagamento", value: item.formaPagamento },
//     { label: "Condição de Entrega", value: item.condicaoEntrega },
//   ];
// };

// export default function ListagemVendasScreen() {
//   const navigation = useNavigation() as any;

//   /* ------------------------------------------------------------------------ */
//   /* FILTROS                                                                   */
//   /* ------------------------------------------------------------------------ */
//   const [filtroUap, setFiltroUap] = useState("");
//   const [filtroAno, setFiltroAno] = useState("");
//   const [filtroProduto, setFiltroProduto] = useState("");

//   /* ------------------------------------------------------------------------ */
//   /* MODAL                                                                     */
//   /* ------------------------------------------------------------------------ */
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [selectedVenda, setSelectedVenda] = useState<VendaItem | null>(null);

//   const handleOpenDetailModal = (item: VendaItem) => {
//     setSelectedVenda(item);
//     setIsModalVisible(true);
//   };

//   const handleCloseDetailModal = () => {
//     setIsModalVisible(false);
//     setSelectedVenda(null);
//   };

//   const handleViewNotas = () => {
//     handleCloseDetailModal();
//     navigation.navigate("ListagemNotas"); // tela de notas
//   };

//   return (
//     <SidebarLayout headerTitle="Gestão de Vendas">
//       {/* CABEÇALHO */}
//       <FormHeader
//         title="Gestão de Vendas"
//         subtitle="Controle e acompanhamento das vendas"
//         onBack={() => navigation.navigate("Content")}
//       />

//       {/* FILTROS */}
//       <View style={{ marginTop: 15, marginBottom: 5 }}>
//         <FilterBar
//           title="Filtros de Busca"
//           icon="filter"
//           filters={[
//             {
//               id: "ano",
//               placeholder: "Ano",
//               value: filtroAno,
//               onChange: setFiltroAno,
//               options: [
//                 { label: "2025", value: "2025" },
//                 { label: "2024", value: "2024" },
//                 { label: "2023", value: "2023" },
//               ],
//             },
//             {
//               id: "uap",
//               placeholder: "UAP",
//               value: filtroUap,
//               onChange: setFiltroUap,
//               options: [
//                 { label: "UAP 01", value: "01" },
//                 { label: "UAP 02", value: "02" },
//                 { label: "UAP 03", value: "03" },
//               ],
//             },
//             {
//               id: "produto",
//               placeholder: "Produto",
//               value: filtroProduto,
//               onChange: setFiltroProduto,
//               options: [
//                 { label: "Produto A", value: "A" },
//                 { label: "Produto B", value: "B" },
//               ],
//             },
//           ]}
//         />
//       </View>

//       {/* LISTAGEM */}
//       <View style={{ flex: 1 }}>
//         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
//           {MOCK_VENDAS.map((item) => (
//             <CardListItem
//               key={item.id}
//               title={`Venda ${item.id}`}
//               titleIcon="chevron-right"
//               fields={[
//                 { label: "Data", value: item.data, icon: "calendar" },
//                 { label: "UAP", value: item.uap, icon: "map-pin" },
//                 { label: "Produto", value: item.produto, icon: "package" },
//                 { label: "Valor Total", value: `R$ ${item.valorTotal}`, icon: "dollar-sign" },
//               ]}
//               onPress={() => handleOpenDetailModal(item)}
//             />
//           ))}
//         </ScrollView>

//         {/* BOTÃO */}
//         <View style={{ padding: 20, paddingBottom: 0, alignItems: "center" }}>
//           <PrimaryButton
//             title="+ Cadastrar Venda"
//             onPress={() => navigation.navigate("RegistroVenda")}
//           />
//         </View>
//       </View>

//       {/* MODAL */}
//       <DetailModal
//         isVisible={isModalVisible}
//         onClose={handleCloseDetailModal}
//         title={
//           selectedVenda
//             ? `Detalhes: Venda ${selectedVenda.id}`
//             : "Detalhes da Venda"
//         }
//         onEdit={handleViewNotas} // botão "Ver Notas"
//         onDelete={() => {}}
//       >
//         {selectedVenda ? (
//           <DetailBody data={formatDataToDetailBody(selectedVenda)} />
//         ) : (
//           <View>
//             <Text>Carregando detalhes...</Text>
//           </View>
//         )}
//       </DetailModal>
//     </SidebarLayout>
//   );
// }
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
interface VendaItem {
  id: string;
  data: string;
  uap: string;
  produto: string;
  quantidade: number;
  formaPagamento: string;
  condicaoEntrega: string;
  precoUnitario: number;
  desconto: number;
  valorTotal: number;
}

const MOCK_VENDAS: VendaItem[] = [
  {
    id: "VEN-001",
    data: "10/05/2025",
    uap: "UAP 01",
    produto: "Produto A",
    quantidade: 10,
    formaPagamento: "Dinheiro",
    condicaoEntrega: "Entrega Imediata",
    precoUnitario: 50,
    desconto: 10,
    valorTotal: 450,
  },
  {
    id: "VEN-002",
    data: "12/05/2025",
    uap: "UAP 02",
    produto: "Produto B",
    quantidade: 5,
    formaPagamento: "Cartão",
    condicaoEntrega: "Programada",
    precoUnitario: 100,
    desconto: 0,
    valorTotal: 500,
  },
];

/* -------------------------------------------------------------------------- */
/* FORMATADOR PARA O DETAIL BODY                                               */
/* -------------------------------------------------------------------------- */
const formatDataToDetailBody = (item: VendaItem | null): DetailItemProps[] => {
  if (!item) return [];

  return [
    { label: "ID da Venda", value: item.id },
    { label: "Produto", value: item.produto },
    { label: "Data da Venda", value: item.data },
    { label: "UAP", value: item.uap },
    { label: "Quantidade", value: item.quantidade },
    { label: "Preço Unitário (R$)", value: item.precoUnitario },
    { label: "Desconto (%)", value: item.desconto },
    { label: "Valor Total (R$)", value: item.valorTotal },
    { label: "Forma de Pagamento", value: item.formaPagamento },
    { label: "Condição de Entrega", value: item.condicaoEntrega },
  ];
};

export default function ListagemVendasScreen() {
  const navigation = useNavigation() as any;

  /* ------------------------------------------------------------------------ */
  /* FILTROS                                                                   */
  /* ------------------------------------------------------------------------ */
  const [filtroUap, setFiltroUap] = useState("");
  const [filtroAno, setFiltroAno] = useState("");
  const [filtroProduto, setFiltroProduto] = useState("");

  /* ------------------------------------------------------------------------ */
  /* MODAL                                                                     */
  /* ------------------------------------------------------------------------ */
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedVenda, setSelectedVenda] = useState<VendaItem | null>(null);

  const handleOpenDetailModal = (item: VendaItem) => {
    setSelectedVenda(item);
    setIsModalVisible(true);
  };

  const handleCloseDetailModal = () => {
    setIsModalVisible(false);
    setSelectedVenda(null);
  };

  const handleViewNotas = () => {
    handleCloseDetailModal();
    navigation.navigate("ListagemNotas");
  };

  return (
    <SidebarLayout headerTitle="Gestão de Vendas">
      {/* CABEÇALHO */}
      <FormHeader
        title="Gestão de Vendas"
        subtitle="Controle e acompanhamento das vendas"
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
              id: "produto",
              placeholder: "Produto",
              value: filtroProduto,
              onChange: setFiltroProduto,
              options: [
                { label: "Produto A", value: "A" },
                { label: "Produto B", value: "B" },
              ],
            },
          ]}
        />
      </View>

      {/* LISTAGEM */}
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
          {MOCK_VENDAS.map((item) => (
            <CardListItem
              key={item.id}
              title={`Venda ${item.id}`}
              titleIcon="chevron-right"
              fields={[
                { label: "Data", value: item.data, icon: "calendar" },
                { label: "UAP", value: item.uap, icon: "map-pin" },
                { label: "Produto", value: item.produto, icon: "package" },
                { label: "Valor Total", value: `R$ ${item.valorTotal}`, icon: "dollar-sign" },
              ]}
              onPress={() => handleOpenDetailModal(item)}
            />
          ))}
        </ScrollView>

        {/* BOTÃO */}
        <View style={{ padding: 20, paddingBottom: 0, alignItems: "center" }}>
          <PrimaryButton
            title="+ Cadastrar Venda"
            onPress={() => navigation.navigate("RegistroVenda")}
          />
        </View>
      </View>

      {/* MODAL */}
      <DetailModal
        isVisible={isModalVisible}
        onClose={handleCloseDetailModal}
        title={
          selectedVenda
            ? `Detalhes: Venda ${selectedVenda.id}`
            : "Detalhes da Venda"
        }
        
        // ⭐ BOTÃO EXCLUSIVO DA TELA DE VENDAS
        onViewNF={handleViewNotas}
        
        onEdit={undefined}
        onDelete={undefined}
      >
        {selectedVenda ? (
          <DetailBody data={formatDataToDetailBody(selectedVenda)} />
        ) : (
          <View>
            <Text>Carregando detalhes...</Text>
          </View>
        )}
      </DetailModal>
    </SidebarLayout>
  );
}
