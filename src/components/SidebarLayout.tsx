// import React, { ReactNode, useRef, useState } from "react";
// import {
//   View,
//   Text as RNText,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   Animated,
//   Pressable,
//   Platform,
//   StatusBar as RNStatusBar,
//   ScrollView,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { StatusBar } from "expo-status-bar";
// import { colors } from "../theme/colors";
// import { spacing } from "../theme/spacing";
// import { fontSizes } from "../theme/fonts";
// import { MenuButton } from "../components/MenuButton";
// import { useNavigation } from "@react-navigation/native";

// interface SidebarLayoutProps {
//   children: ReactNode;
//   headerTitle?: string;
//   menuItems?: { title: string; onPress: () => void }[];
// }

// const { width } = Dimensions.get("window");
// const SIDEBAR_WIDTH = 220;
// const HEADER_HEIGHT = 90;

// export default function SidebarLayout({
//   children,
//   headerTitle = "AGROSYS",
//   menuItems = [],
// }: SidebarLayoutProps) {
//   const [open, setOpen] = useState(false);
//   const navigation = useNavigation();

//   const animatedX = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;
//   const overlayOpacity = useRef(new Animated.Value(0)).current;

//   const SAFE_TOP_PADDING =
//     Platform.OS === "android" ? RNStatusBar.currentHeight ?? 0 : 20;

//   const openSidebar = () => {
//     setOpen(true);
//     Animated.parallel([
//       Animated.timing(animatedX, { toValue: 0, duration: 220, useNativeDriver: true }),
//       Animated.timing(overlayOpacity, { toValue: 0.4, duration: 220, useNativeDriver: true }),
//     ]).start();
//   };

//   const closeSidebar = () => {
//     Animated.parallel([
//       Animated.timing(animatedX, { toValue: -SIDEBAR_WIDTH, duration: 220, useNativeDriver: true }),
//       Animated.timing(overlayOpacity, { toValue: 0, duration: 220, useNativeDriver: true }),
//     ]).start(() => setOpen(false));
//   };

//   const toggleSidebar = () => {
//     open ? closeSidebar() : openSidebar();
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar style="light" backgroundColor={colors.primary} />

//       {/* HEADER */}
//       <View style={[styles.topbar, { paddingTop: SAFE_TOP_PADDING }]}>
//         <TouchableOpacity onPress={toggleSidebar}>
//           <Ionicons name={open ? "close" : "menu"} size={spacing.xl} color={colors.white} />
//         </TouchableOpacity>

//         <RNText style={styles.systemName}>{headerTitle}</RNText>

//         <TouchableOpacity>
//           <Ionicons
//             name="notifications-outline"
//             size={spacing.xl - 6}
//             color={colors.white}
//           />
//         </TouchableOpacity>
//       </View>

//       {/* OVERLAY */}
//       {open && (
//         <Pressable style={StyleSheet.absoluteFill} onPress={closeSidebar}>
//           <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]} />
//         </Pressable>
//       )}

//       {/* SIDEBAR */}
//       <Animated.View
//         style={[
//           styles.sidebar,
//           {
//             top: HEADER_HEIGHT,
//             transform: [{ translateX: animatedX }],
//           },
//         ]}
//       >
//         <ScrollView contentContainerStyle={styles.sidebarContent}>
//           {menuItems.map((item, index) => (
//             <View key={index} style={{ marginBottom: spacing.lg }}>
//               <MenuButton title={item.title} onPress={item.onPress} />
//             </View>
//           ))}
//         </ScrollView>
//       </Animated.View>

//       {/* CONTENT */}
//       <View style={[styles.page, { paddingTop: HEADER_HEIGHT + SAFE_TOP_PADDING }]}>
//         {children}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   topbar: {
//     height: HEADER_HEIGHT,
//     paddingHorizontal: spacing.md,
//     backgroundColor: colors.primary,
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     borderColor: colors.primary,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     zIndex: 20,
//     position: "absolute",
//     left: 0,
//     right: 0,
//   },

//   systemName: {
//     fontSize: fontSizes.md + 2,
//     fontWeight: "600",
//     color: colors.white,
//   },

//   overlay: {
//     flex: 1,
//     backgroundColor: "#000",
//     zIndex: 10,
//   },

//   sidebar: {
//     position: "absolute",
//     left: 0,
//     bottom: 0,
//     width: SIDEBAR_WIDTH,
//     backgroundColor: colors.primary,
//     borderRightWidth: StyleSheet.hairlineWidth,
//     borderColor: colors.primary,
//     zIndex: 30,
//   },

//   sidebarContent: {
//     paddingTop: spacing.md,
//     paddingHorizontal: spacing.md,
//     flexGrow: 1,
//   },

//   page: {
//     flex: 1,
//     padding: spacing.md,
//     backgroundColor: colors.background,
//     paddingBottom: 70,
//   },
// });
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
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { fontSizes } from "../theme/fonts";
import { MenuButton } from "../components/MenuButton";
import { useNavigation } from "@react-navigation/native";

interface SidebarLayoutProps {
  children: ReactNode;
  headerTitle?: string;
  menuItems?: { title: string; onPress: () => void }[];
}

const { width } = Dimensions.get("window");
const SIDEBAR_WIDTH = 220;
const HEADER_HEIGHT = 90;

export default function SidebarLayout({
  children,
  headerTitle = "AGROSYS",
  menuItems = [],
}: SidebarLayoutProps) {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  const animatedX = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  const SAFE_TOP_PADDING =
    Platform.OS === "android" ? RNStatusBar.currentHeight ?? 0 : 20;

  const openSidebar = () => {
    setOpen(true);
    Animated.parallel([
      Animated.timing(animatedX, { toValue: 0, duration: 220, useNativeDriver: true }),
      Animated.timing(overlayOpacity, { toValue: 0.4, duration: 220, useNativeDriver: true }),
    ]).start();
  };

  const closeSidebar = () => {
    Animated.parallel([
      Animated.timing(animatedX, { toValue: -SIDEBAR_WIDTH, duration: 220, useNativeDriver: true }),
      Animated.timing(overlayOpacity, { toValue: 0, duration: 220, useNativeDriver: true }),
    ]).start(() => setOpen(false));
  };

  const toggleSidebar = () => {
    open ? closeSidebar() : openSidebar();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={colors.primary} />

      {/* HEADER */}
      <View style={[styles.topbar, { paddingTop: SAFE_TOP_PADDING }]}>
        <TouchableOpacity onPress={toggleSidebar}>
          <Ionicons name={open ? "close" : "menu"} size={spacing.xl} color={colors.white} />
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

      {/* OVERLAY */}
      {open && (
        <Pressable style={StyleSheet.absoluteFill} onPress={closeSidebar}>
          <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]} />
        </Pressable>
      )}

      {/* SIDEBAR */}
      <Animated.View
        style={[
          styles.sidebar,
          {
            top: HEADER_HEIGHT,
            transform: [{ translateX: animatedX }],
          },
        ]}
      >
        <ScrollView contentContainerStyle={styles.sidebarContent}>
          {menuItems.map((item, index) => (
            <View key={index} style={{ marginBottom: spacing.lg }}>
              <MenuButton title={item.title} onPress={item.onPress} />
            </View>
          ))}
        </ScrollView>
      </Animated.View>

      {/* CONTENT */}
      <View style={[styles.page, { paddingTop: HEADER_HEIGHT + SAFE_TOP_PADDING }]}>
        {children}
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
  overlay: { flex: 1, backgroundColor: "#000", zIndex: 10 },
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
