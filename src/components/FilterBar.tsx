import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface FilterBarProps {
  icon?: string;
  title?: string;
  onPress?: () => void; // futuramente abre modal
}

export function FilterBar({
  icon = "filter",
  title = "Filtros",
  onPress,
}: FilterBarProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftArea}>
        {icon && <Ionicons name={icon as any} size={20} color="#2E7D32" />}
        {title && <Text style={styles.title}>{title}</Text>}
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

    // 🌟 Sombras (Android + iOS)
    elevation: 2, // Android
    shadowColor: "#000", // iOS
    shadowOffset: { width: 0, height: 2 }, // iOS
    shadowOpacity: 0.12, // iOS
    shadowRadius: 4, // iOS
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
