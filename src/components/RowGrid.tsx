import React from "react";
import { View, StyleSheet, ViewStyle} from "react-native";

interface RowGridProps {
  children: React.ReactNode[];
  itemsPerRow?: number; // default = 2
  gap?: number;         // espaçamento entre elementos
}

export function RowGrid({
  children,
  itemsPerRow = 2,
  gap = 5,
}: RowGridProps) {
  const rows = [];

  for (let i = 0; i < children.length; i += itemsPerRow) {
    rows.push(children.slice(i, i + itemsPerRow));
  }

  return (
    <View style={{ gap }}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={[styles.row, { gap }]}>
          {row.map((item, colIndex) => (
            <View
              key={colIndex}
              style={[
                styles.item,
                { width: `${100 / itemsPerRow}%` }, // divide o espaço
              ]}
            >
              {item}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    
    flexDirection: "row",
  },
  item: {
    justifyContent: "center",
  },
});
