import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../theme/colors";

/* ✅ Tipo correto para os nomes dos ícones */
type FeatherIconName = React.ComponentProps<typeof Feather>["name"];

interface Field {
  label: string;
  value: string | number;
  icon?: FeatherIconName;
}

interface CardListItemProps {
  title: string;
  titleIcon?: FeatherIconName;
  fields: Field[];
  onPress: () => void;
}

export function CardListItem({
  title,
  titleIcon = "info",
  fields,
  onPress,
}: CardListItemProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      
      {/* Título + ícone */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        <Feather
          name={titleIcon}
          size={20}
          color={colors.primaryDark}
        />
      </View>

      {/* Campos */}
      {fields.map((field, index) => (
        <View key={index} style={styles.fieldRow}>
          
          {/* Ícone */}
          <Feather
            name={field.icon ?? "circle"}
            size={18}
            color={colors.primaryDark}
            style={styles.fieldIcon}
          />

          {/* Valor */}
          <View>
            <Text style={styles.fieldValue}>
              {String(field.value)}
            </Text>
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

    elevation: 3,

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

  fieldValue: {
    fontSize: 16,
    color: colors.primary,
    marginTop: -2,
  },
});
