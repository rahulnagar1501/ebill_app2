import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./drawerConent";
  // Example screen

import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity, Switch } from "react-native";
import { useState } from "react";
import Index from "../(router)/dashboard"; 
import DashboardScreen from "@/screen/dashboard/dashboard.screen";

const Drawer = createDrawerNavigator();

const LayoutDrawer = () => {
  const [theme, setTheme] = useState("light"); // Default to light theme
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation  }) => ({
          drawerPosition: "left", // Drawer opens from the left
          drawerStyle: {
            width: 320, // Adjust drawer width
            backgroundColor: theme === "dark" ? "black" : "white", // Apply theme to drawer background
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.dispatch(DrawerActions.toggleDrawer())
              }
              style={{ marginLeft: 10 }}
            >
              <Icon
                name="menu"
                size={30}
                color={theme === "dark" ? "white" : "black"}
              />
            </TouchableOpacity>
          ),
          // Toggle button
          headerRight: () => (
            <TouchableOpacity
              style={{ marginHorizontal: 15 }}
              onPress={toggleTheme}
            >
              <Switch value={isDarkTheme} onValueChange={toggleTheme} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: theme === "dark" ? "black" : "#f8f8f8", // Header background color
          },
          headerTintColor: theme === "dark" ? "white" : "black", // Header text color
        })}
      >
        {/* Add Drawer Screens */}
        <Drawer.Screen
          name="dashboard"
          component={Index} // Example HomeScreen component
          options={{ title: "home"}}
        
        />
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default LayoutDrawer;
