
import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import SidebarLayout from "../../components/SidebarLayout";
import { FormHeader } from "../../components/FormHeader";
import { FilterBar } from "../../components/FilterBar";
import { CardListItem } from "../../components/CardListItem";
import SaleReceiptModal from "../../components/SaleReceiptModal";
import { printSaleReceipt } from "../../scripts/print";

// Interface da nota fiscal
export interface SaleReceiptData {
  id: string;
  data: string;
  uap: string;
  cliente: string;

  produto: {
    nome: string;
    quantidade: number;
    precoUnitario: number;
    desconto: number;
    total: number;
  };

  formaPagamento: string;
  condicaoEntrega: string;

  subtotal: number;
  descontoTotal: number;
  totalFinal: number;
}


const MOCK_NOTAS: SaleReceiptData[] = [
  {
    id: "NF-2025-001",
    data: "10/05/2025",
    uap: "UAP Fruticultura",
    cliente: "Maria da Silva",

    produto: {
      nome: "Mamão Formosa",
      quantidade: 4,
      precoUnitario: 6.5,
      desconto: 1.0,
      total: 4 * 6.5 - 1.0,
    },

    formaPagamento: "PIX",
    condicaoEntrega: "Entrega imediata",

    subtotal: 4 * 6.5,
    descontoTotal: 1.0,
    totalFinal: 4 * 6.5 - 1.0,
  },

  {
    id: "NF-2025-002",
    data: "12/05/2025",
    uap: "UAP Hortaliças",
    cliente: "João Pereira",

    produto: {
      nome: "Alface Crespa",
      quantidade: 12,
      precoUnitario: 1.8,
      desconto: 0,
      total: 12 * 1.8,
    },

    formaPagamento: "Dinheiro",
    condicaoEntrega: "Retirada no local",

    subtotal: 12 * 1.8,
    descontoTotal: 0,
    totalFinal: 12 * 1.8,
  },
];
export default function ListagemNotasScreen() {
    const navigation = useNavigation() as any;
    const [filtroCategoria, setFiltroCategoria] = useState("");
    const [filtroNome, setFiltroNome] = useState("");

    /* ------------------------------------------------------------------------ */
    /* MODAL                                                                     */
    /* ------------------------------------------------------------------------ */
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedNotaFiscal, setSelectedNotaFiscal] = useState<SaleReceiptData | null>(null);

    const handleOpenDetailModal = (nota: SaleReceiptData) => {
        setSelectedNotaFiscal(nota);
        setIsModalVisible(true);
    };


    const handlePrint = async () => {
    if (!selectedNotaFiscal) return;
    await printSaleReceipt(selectedNotaFiscal);
    };

    return (

    <SidebarLayout headerTitle="Gestão de Notas">

      <FormHeader
        title="Gestão Notas fiscais"
        subtitle="Controle de notas fiscais"
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
          {MOCK_NOTAS.map((item) => (
            <CardListItem
              key={item.id}
              title={`Venda ${item.id}`}
              titleIcon="chevron-right"
              fields={[
                { label: "Data", value: item.data, icon: "calendar" },
                { label: "UAP", value: item.uap, icon: "map-pin" },
                { label: "Produto", value: item.produto.nome, icon: "package" },
                { label: "Valor Total", value: `R$ ${item.totalFinal}`, icon: "dollar-sign" },
              ]}
              onPress={() => handleOpenDetailModal(item)}
            />
          ))}
        </ScrollView>

      </View>

       {selectedNotaFiscal && (
        <SaleReceiptModal
            isVisible={isModalVisible}
            onClose={() => setIsModalVisible(false)}
            title="Nota Fiscal Gerada"
            data={selectedNotaFiscal}
            onPrint={handlePrint}
        />
        )}


    </SidebarLayout>



    )

    

};