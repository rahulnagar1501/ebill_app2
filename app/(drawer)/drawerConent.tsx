import { View, Text, TouchableOpacity, StyleSheet, Switch } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "@/hooks/ThemeContext"; // Import ThemeContext

const CustomDrawerContent = (props: any) => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Use theme and toggle function
  const isDarkTheme = theme === "dark";

  return (
    <View
      style={[
        styles.drawerContainer,
        { backgroundColor: theme === "dark" ? "black" : "white" },
      ]}
    >
      {/* Logo and Close Button */}
      <View style={styles.header}>
        <Text
          style={[
            styles.logoText,
            { color: theme === "dark" ? "white" : "black" },
          ]}
        >
          Block
        </Text>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Text
            style={[
              styles.closeText,
              { color: theme === "dark" ? "white" : "black" },
            ]}
          >
            X
          </Text>
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <View style={styles.menuItem}>
        <Text
          style={[
            styles.menuText,
            { color: theme === "dark" ? "white" : "black" },
          ]}
        >
          Landings
        </Text>
      </View>
      <View style={styles.menuItem}>
        <Text
          style={[
            styles.menuText,
            { color: theme === "dark" ? "white" : "black" },
          ]}
        >
          Pages
        </Text>
      </View>
      <View style={styles.menuItem}>
        <Text
          style={[
            styles.menuText,
            { color: theme === "dark" ? "white" : "black" },
          ]}
        >
          Blocks
        </Text>
      </View>
      <View style={styles.menuItem}>
        <Text
          style={[
            styles.menuText,
            { color: theme === "dark" ? "white" : "black" },
          ]}
        >
          Accounts
        </Text>
      </View>
      <View style={styles.menuItem}>
        <Text
          style={[
            styles.menuText,
            { color: theme === "dark" ? "white" : "black" },
          ]}
        >
          Docs
        </Text>
      </View>

      {/* Login And Create Account */}

      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#808080",
            padding: 10,
            borderRadius: 5,
            marginRight: 10,
          }}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#A020F0",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Create account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 70,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  closeText: {
    fontSize: 18,
  },
  menuItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    paddingBottom: 10,
  },
  menuText: {
    fontSize: 18,
  },
  authContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  toggleButton: {
    backgroundColor: "#6B7280",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  toggleText: {
    color: "white",
    fontWeight: "600",
  },
});
