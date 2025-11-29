import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Modal,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

type Props = {
  label?: string;
  value?: Date;
  onChange?: (d: Date) => void;
  placeholder?: string;
};

export function DateInput({ label, value, onChange, placeholder }: Props) {
  const [open, setOpen] = useState(false);

  const displayValue =
    value ? value.toLocaleDateString() : placeholder || "Selecione a data";

  function handleChange(event: any, selected?: Date) {
    if (Platform.OS === "android") {
      setOpen(false);
    }
    if (selected) {
      onChange?.(selected);
    }
  }

  return (
    <View style={styles.wrap}>
      {label && <Text style={styles.label}>{label}</Text>}

      <Pressable style={styles.box} onPress={() => setOpen(true)}>
        <Text
          style={[
            styles.text,
            !value && { color: "#999" },
          ]}
        >
          {displayValue}
        </Text>

        {/* Ícone de calendário (Unicode) */}
        <Text style={styles.icon}>📅</Text>
      </Pressable>

      {/* iOS modal */}
      {Platform.OS === "ios" && open && (
        <Modal transparent animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <DateTimePicker
                value={value || new Date()}
                mode="date"
                display="spinner"
                onChange={handleChange}
              />

              <Pressable
                style={styles.btnClose}
                onPress={() => setOpen(false)}
              >
                <Text style={styles.btnCloseText}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}

      {/* Android — abre nativo sem modal */}
      {Platform.OS === "android" && open && (
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display="calendar"
          onChange={handleChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginVertical: 6 },
  label: { marginBottom: 6, color: "#0d2610", fontWeight: "700" },

  box: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: { color: "#0d2610" },
  icon: { fontSize: 18 },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    padding: 20,
  },

  modalContent: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
  },

  btnClose: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "#eee",
    borderRadius: 8,
    alignItems: "center",
  },

  btnCloseText: {
    fontWeight: "600",
    color: "#444",
  },
});
