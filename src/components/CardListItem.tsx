import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "../theme/colors";
interface Field {
  label: string;
  value: string | number;
  icon?: string; // ← ícone opcional
}

interface CardListItemProps {
  title: string;
  titleIcon?: string; // ← ícone no título ("info", "chevron-right", "external-link")
  fields: Field[];
  onPress: () => void;
}

export function CardListItem({
  title,
  titleIcon = "info", // ← ícone padrão
  fields,
  onPress,
}: CardListItemProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      
      {/* Título + ícone */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        <Feather name={titleIcon} size={20} color= "colors.primaryDark" />
      </View>

{/* Campos */}
{fields.map((field, index) => (
  <View key={index} style={styles.fieldRow}>
    
    {/* Ícone representando o conteúdo */}
    <Feather
      name={field.icon ?? "circle"} // ícone padrão caso não venha nada
      size={18}
      color="colors.primaryDark"
      style={styles.fieldIcon}
    />

    {/* Textos */}
    <View>
      <Text style={styles.fieldValue}>{field.value}</Text>
    </View>

  </View>
))}

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
  backgroundColor: "#fff",
  borderRadius: 14,
  paddingHorizontal: 14,
  paddingVertical: 18,
  marginBottom: 18,

  // ANDROID
  elevation: 3,

  // iOS
  shadowColor: "#000",
  shadowOpacity: 0.12,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.primaryDark,
  },

  fieldRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  fieldIcon: {
    marginRight: 6,
  },

  fieldLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },

  fieldValue: {
    fontSize: 16,
    color: colors.primary,
    marginTop: -2,
  },
});
