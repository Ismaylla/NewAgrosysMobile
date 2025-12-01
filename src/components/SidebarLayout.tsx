import React, { ReactNode, useRef, useState } from "react";
import {
  View,
  Text as RNText,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  Pressable,
  Platform,
  StatusBar as RNStatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { fontSizes } from "../theme/fonts";
import { MenuButton } from "../components/MenuButton";

interface SidebarLayoutProps {
  children: ReactNode;
  headerTitle?: string;
  menuItems?: { title: string; onPress: () => void }[];
}

const { width } = Dimensions.get("window");
const SIDEBAR_WIDTH = 220;
const HEADER_HEIGHT = 100;

const getDefaultMenuItems = (navigation: any) => [

  { title: "Gestão de Produtos", onPress: () => navigation.navigate("ListagemProdutos") },
  { title: "Gestão de Colheitas", onPress: () => navigation.navigate("ListagemColheitas") },
  { title: "Gestão de Vendas", onPress: () => navigation.navigate("ListagemVendas") },
  { title: "Gestão de Notas", onPress: () => navigation.navigate("ListagemNotas") },
  { title: "Gestão de UAPs", onPress: () => navigation.navigate("ListagemUap") },
  { title: "Meu Perfil", onPress: () => navigation.navigate("Perfil") },
  { title: "Sair", onPress: () => navigation.navigate("Home") },
];

export default function SidebarLayout({
  children,
  headerTitle = "AGROSYS",
  menuItems,
}: SidebarLayoutProps) {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);

  const items = menuItems ?? getDefaultMenuItems(navigation);

  const animatedX = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  const SAFE_TOP_PADDING =
    Platform.OS === "android" ? RNStatusBar.currentHeight ?? 0 : 20;

  const animateSidebar = (toOpen: boolean) => {
    Animated.parallel([
      Animated.timing(animatedX, {
        toValue: toOpen ? 0 : -SIDEBAR_WIDTH,
        duration: 220,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: toOpen ? 0.4 : 0,
        duration: 220,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (!toOpen) setOpen(false);
    });
  };

  const openSidebar = () => {
    setOpen(true);
    animateSidebar(true);
  };

  const closeSidebar = () => animateSidebar(false);

  const toggleSidebar = () => (open ? closeSidebar() : openSidebar());

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={colors.primary} />

      <View style={[styles.topbar, { paddingTop: SAFE_TOP_PADDING }]}>
        <TouchableOpacity onPress={toggleSidebar}>
          <Ionicons
            name={open ? "close" : "menu"}
            size={spacing.xl}
            color={colors.white}
          />
        </TouchableOpacity>

        <RNText style={styles.systemName}>{headerTitle}</RNText>

        <TouchableOpacity>
          <Ionicons
            name="notifications-outline"
            size={spacing.xl - 6}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>

      {open && (
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            { opacity: overlayOpacity, zIndex: 25 },
          ]}
        >
          <Pressable style={{ flex: 1 }} onPress={closeSidebar} />
        </Animated.View>
      )}

      <Animated.View
        style={[
          styles.sidebar,
          {
            top: HEADER_HEIGHT,
            transform: [{ translateX: animatedX }],
          },
        ]}
      >
        <View style={styles.sidebarContent}>
          {items.map((item, index) => (
            <View key={index} style={{ marginBottom: spacing.lg }}>
              <MenuButton title={item.title} onPress={item.onPress} />
            </View>
          ))}
        </View>
      </Animated.View>

      <View
        style={[styles.page, { paddingTop: HEADER_HEIGHT + SAFE_TOP_PADDING }]}
      >
        {typeof children === "string" ? (
          <RNText>{children}</RNText>
        ) : (
          <>{children}</>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  topbar: {
    height: HEADER_HEIGHT,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.primary,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 20,
    position: "absolute",
    left: 0,
    right: 0,
  },

  systemName: {
    fontSize: fontSizes.md + 2,
    fontWeight: "600",
    color: colors.white,
  },

  sidebar: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: SIDEBAR_WIDTH,
    backgroundColor: colors.primary,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: colors.primary,
    zIndex: 30,
  },

  sidebarContent: {
    paddingTop: spacing.md,
    paddingHorizontal: spacing.md,
    flexGrow: 1,
  },

  page: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: colors.background,
    paddingBottom: 70,
  },
});
