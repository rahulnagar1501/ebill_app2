import { Stack } from "expo-router";
import { ThemeContext } from "@/hooks/ThemeContext";
import { useRef, useState } from "react";

function Layout() {
  const [theme, setTheme] = useState("light"); // Default to light theme
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const navigationRef = useRef(null);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Stack>
        {/* Home page route */}
        <Stack.Screen
          name="(router)/login"
          options={{ headerShown: false }} // Home screen with no header
        />

        {/* Dashboard page route */}
        <Stack.Screen name="(router)/dashboard" />
      </Stack>
    </ThemeContext.Provider>
  );
}
