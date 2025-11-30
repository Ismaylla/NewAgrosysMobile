import React, { Dispatch, SetStateAction } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// 1. Tipagem dos Itens de Filtro
export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterItem {
  id: string;
  placeholder: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  options: FilterOption[];
}

// 2. Tipagem do Componente FilterBar
interface FilterBarProps {
  icon?: string;
  title?: string;
  onPress?: () => void; // futuramente abre modal
  filters?: FilterItem[];
}

export function FilterBar({
  icon = "filter",
  title = "Filtros",
  onPress,
  filters,
}: FilterBarProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftArea}>
        {icon ? <Ionicons name={icon as any} size={20} color="#2E7D32" /> : null}
        {title ? <Text style={styles.title}>{title}</Text> : null}
      </View>

      <Ionicons name="chevron-down" size={18} color="#2E7D32" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 14,
    marginBottom: 15,

    // Layout
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    // Sombras (Android + iOS)
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },

  leftArea: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2E7D32",
  },
});
