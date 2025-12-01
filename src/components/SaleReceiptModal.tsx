import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// 🎨 Tema
import { colors } from "../theme/colors";
import { fontSizes, fontFamilies } from "../theme/fonts";
import { spacing } from "../theme/spacing";

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

interface SaleReceiptModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  data: SaleReceiptData;
  onPrint: () => void;
}

const SaleReceiptModal: React.FC<SaleReceiptModalProps> = ({
  isVisible,
  onClose,
  title,
  data,
  onPrint,
}) => {
  return (
    <Modal animationType="fade" transparent visible={isVisible}>
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          {/* Cabeçalho */}
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={26} color={colors.primaryDark} />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
            {/* BLOCO 1 – Identificação */}
            <View style={styles.block}>
              <Text style={styles.blockTitle}>DADOS DA NOTA FISCAL</Text>

              <View style={styles.rowBetween}>
                <Text style={styles.label}>Número:</Text>
                <Text style={styles.value}>{data.id}</Text>
              </View>

              <View style={styles.rowBetween}>
                <Text style={styles.label}>Data:</Text>
                <Text style={styles.value}>{data.data}</Text>
              </View>

              <View style={styles.rowBetween}>
                <Text style={styles.label}>UAP:</Text>
                <Text style={styles.value}>{data.uap}</Text>
              </View>

              <View style={styles.rowBetween}>
                <Text style={styles.label}>Cliente:</Text>
                <Text style={styles.value}>{data.cliente}</Text>
              </View>
            </View>

            {/* BLOCO 2 – Itens */}
            <View style={styles.block}>
              <Text style={styles.blockTitle}>ITENS DA VENDA</Text>

              {/* Cabeçalho da tabela */}
              <View style={styles.tableHeader}>
                <Text style={[styles.colHeader, { flex: 3 }]}>Produto</Text>
                <Text style={[styles.colHeader, { flex: 1, textAlign: "center" }]}>Qtd</Text>
                <Text style={[styles.colHeader, { flex: 2, textAlign: "right" }]}>Unit</Text>
                <Text style={[styles.colHeader, { flex: 2, textAlign: "right" }]}>Desc</Text>
                <Text style={[styles.colHeader, { flex: 2, textAlign: "right" }]}>Total</Text>
              </View>

              {/* Linha de item */}
              <View style={styles.tableRow}>
                <Text style={[styles.colText, { flex: 3 }]}>
                  {data.produto.nome}
                </Text>

                <Text style={[styles.colText, { flex: 1, textAlign: "center" }]}>
                  {data.produto.quantidade}
                </Text>

                <Text style={[styles.colText, { flex: 2, textAlign: "right" }]}>
                  R$ {data.produto.precoUnitario.toFixed(2)}
                </Text>

                <Text style={[styles.colText, { flex: 2, textAlign: "right" }]}>
                  R$ {data.produto.desconto.toFixed(2)}
                </Text>

                <Text style={[styles.colText, { flex: 2, textAlign: "right" }]}>
                  R$ {data.produto.total.toFixed(2)}
                </Text>
              </View>
            </View>

            {/* BLOCO 3 – Pagamento */}
            <View style={styles.block}>
              <Text style={styles.blockTitle}>PAGAMENTO</Text>

              <View style={styles.rowBetween}>
                <Text style={styles.label}>Forma de Pagamento:</Text>
                <Text style={styles.value}>{data.formaPagamento}</Text>
              </View>

              <View style={styles.rowBetween}>
                <Text style={styles.label}>Entrega:</Text>
                <Text style={styles.value}>{data.condicaoEntrega}</Text>
              </View>
            </View>

            {/* BLOCO 4 – Totais */}
            <View style={styles.block}>
              <Text style={styles.blockTitle}>RESUMO DE VALORES</Text>

              <View style={styles.rowBetween}>
                <Text style={styles.label}>Subtotal:</Text>
                <Text style={styles.value}>R$ {data.subtotal.toFixed(2)}</Text>
              </View>

              <View style={styles.rowBetween}>
                <Text style={styles.label}>Descontos:</Text>
                <Text style={styles.value}>R$ {data.descontoTotal.toFixed(2)}</Text>
              </View>

              <View style={[styles.rowBetween, { marginTop: 6 }]}>
                <Text style={styles.totalTitle}>Total Final:</Text>
                <Text style={styles.totalValue}>R$ {data.totalFinal.toFixed(2)}</Text>
              </View>
            </View>
          </ScrollView>

          {/* AÇÕES */}
          <View style={styles.actions}>
            <TouchableOpacity
              style={[styles.actionButton, styles.printButton]}
              onPress={onPrint}
            >
              <Ionicons name="print-outline" size={22} color={colors.white} />
              <Text style={styles.actionText}>Imprimir Nota</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SaleReceiptModal;

// -----------------------------
// ESTILOS
// -----------------------------
const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: spacing.md,
  },

  modal: {
    width: "100%",
    maxHeight: "90%",
    backgroundColor: colors.white,
    borderRadius: spacing.sm,
    padding: spacing.lg,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: colors.cardGray,
    paddingBottom: spacing.sm,
  },

  title: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamilies.heading,
    color: colors.primaryDark,
  },

  scroll: {
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },

  block: {
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: colors.cardGray,
    padding: spacing.md,
    borderRadius: spacing.xs,
  },

  blockTitle: {
    fontSize: fontSizes.md,
    fontFamily: fontFamilies.heading,
    color: colors.primaryDark,
    marginBottom: spacing.sm,
    borderBottomWidth: 1,
    borderColor: colors.cardGray,
    paddingBottom: spacing.xs,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.xs,
  },

  label: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamilies.heading,
    color: colors.grayDark,
  },

  value: {
    fontSize: fontSizes.sm,
    color: colors.grayDark,
  },

  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: colors.cardGray,
    paddingBottom: spacing.xs,
    marginBottom: spacing.xs,
  },

  colHeader: {
    fontSize: fontSizes.xs,
    fontFamily: fontFamilies.heading,
    color: colors.primaryDark,
  },

  tableRow: {
    flexDirection: "row",
    paddingVertical: 4,
  },

  colText: {
    fontSize: fontSizes.xs,
    color: colors.grayDark,
  },

  totalTitle: {
    fontSize: fontSizes.md,
    fontFamily: fontFamilies.heading,
    color: colors.primaryDark,
  },

  totalValue: {
    fontSize: fontSizes.md,
    fontFamily: fontFamilies.heading,
    color: colors.primary,
  },

  actions: {
    marginTop: spacing.sm,
  },

  actionButton: {
    flexDirection: "row",
    height: 48,
    borderRadius: spacing.xs,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xs,
  },

  printButton: {
    backgroundColor: colors.primary,
  },

  actionText: {
    color: colors.white,
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.md,
  },
});
