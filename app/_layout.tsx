import { Stack } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.

function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="(router)/login"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
