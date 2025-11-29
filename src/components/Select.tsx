import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  FlatList,
  TouchableOpacity,
} from "react-native";

type Option = {
  label: string;
  value: string;
};

type Props = {
  label?: string;
  placeholder?: string;
  value?: string;
  options: Option[];
  onChange?: (value: string) => void;
};

export function Select({
  label,
  placeholder,
  value,
  onChange,
  options,
}: Props) {
  const [open, setOpen] = useState(false);

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label ||
    placeholder ||
    "Selecione";

  return (
    <View style={styles.wrap}>
      {label && <Text style={styles.label}>{label}</Text>}

      <Pressable style={styles.selectBox} onPress={() => setOpen(true)}>
        <Text
          style={[styles.selectText, !value && { color: "#999" }]}
          numberOfLines={1}
        >
          {selectedLabel}
        </Text>

        {/* Ícone da setinha */}
        <Text style={styles.arrow}>▼</Text>
      </Pressable>

      <Modal visible={open} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onChange?.(item.value);
                    setOpen(false);
                  }}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />

            <Pressable
              onPress={() => setOpen(false)}
              style={styles.cancelButton}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginVertical: 6 },
  label: { marginBottom: 6, color: "#0d2610", fontWeight: "700" },

  selectBox: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  selectText: {
    color: "#0d2610",
    flex: 1,
    marginRight: 10,
  },

  arrow: {
    fontSize: 14,
    color: "#555",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    padding: 20,
  },

  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    maxHeight: "70%",
  },

  option: {
    paddingVertical: 14,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },

  optionText: {
    fontSize: 16,
    color: "#0d2610",
  },

  cancelButton: {
    marginTop: 10,
    paddingVertical: 12,
    alignItems: "center",
  },

  cancelText: {
    fontWeight: "600",
    color: "#333",
  },
});
