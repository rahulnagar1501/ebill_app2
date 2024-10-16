import { Stack } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.

function Layout() {
  return (
    <Stack>
      {/* Home page route */}
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}  // Home screen with no header
      />

      {/* Dashboard page route */}
      <Stack.Screen
        name="dashboard"
        options={{ title: 'Dashboard' }}  // Dashboard screen with title
      />
    </Stack>
  );
}
