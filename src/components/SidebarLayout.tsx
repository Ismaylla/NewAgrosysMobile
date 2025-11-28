// SidebarLayout.tsx
import React, { ReactNode, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  Pressable,
  Platform,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SidebarLayoutProps {
  children: ReactNode;
  systemName?: string;
}

const { width } = Dimensions.get("window");
const SIDEBAR_WIDTH = width * 0.75;

export default function SidebarLayout({
  children,
  systemName = "Meu Sistema",
}: SidebarLayoutProps) {
  const [open, setOpen] = useState(false);

  const animatedX = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  // Altura segura no topo (iPhone + Android)
const SAFE_TOP =
  Platform.OS === "android" ? (StatusBar.currentHeight ?? 24) : 24;

  const openSidebar = () => {
    setOpen(true);
    Animated.parallel([
      Animated.timing(animatedX, {
        toValue: 0,
        duration: 220,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 0.4,
        duration: 220,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeSidebar = () => {
    Animated.parallel([
      Animated.timing(animatedX, {
        toValue: -SIDEBAR_WIDTH,
        duration: 220,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 220,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setOpen(false);
    });
  };

  const toggleSidebar = () => {
    if (open) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };

  return (
    <View style={styles.container}>
      {/* TOPBAR sempre visível */}
      <View style={[styles.topbar, { paddingTop: SAFE_TOP }]}>
        <TouchableOpacity onPress={toggleSidebar}>
          <Ionicons name="menu" size={28} color="#333" />
        </TouchableOpacity>

        <Text style={styles.systemName}>{systemName}</Text>

        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={26} color="#333" />
        </TouchableOpacity>
      </View>

      {/* OVERLAY — só exibe quando o menu está aberto */}
      {open && (
        <Pressable style={StyleSheet.absoluteFill} onPress={closeSidebar}>
          <Animated.View
            style={[
              styles.overlay,
              {
                opacity: overlayOpacity,
              },
            ]}
          />
        </Pressable>
      )}

      {/* SIDEBAR */}
      <Animated.View
        style={[
          styles.sidebar,
          {
            transform: [{ translateX: animatedX }],
          },
        ]}
      >
        <Text style={styles.sidebarTitle}>Menu</Text>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Página Inicial</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Relatórios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Configurações</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* CONTEÚDO */}
      <View style={styles.page}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topbar: {
    height: 90,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 20,
  },

  systemName: {
    fontSize: 18,
    fontWeight: "600",
  },

  overlay: {
    flex: 1,
    backgroundColor: "#000",
    zIndex: 10,
  },

  sidebar: {
    position: "absolute",
    left: 0,
    top: 60, // sidebar abaixo da barra superior
    bottom: 0,
    width: SIDEBAR_WIDTH,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
    borderRightWidth: 1,
    borderColor: "#ddd",
    zIndex: 30,
  },

  sidebarTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },

  menuItem: {
    paddingVertical: 12,
  },

  menuText: {
    fontSize: 16,
  },

  page: {
    flex: 1,
    padding: 16,
  },
});
