import { SplashScreen, Stack } from "expo-router";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { queryClient } from "#shared/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueriesBoundary } from "#shared/QueriesBoundary/QueriesBoundary";
import { useInitializeAuth, useSession } from "#modules/auth/auth.state";

void SplashScreen.preventAutoHideAsync();

function RootLayout() {
  useInitializeAuth();
  const { user: session } = useSession();

  return (
    <QueryClientProvider client={queryClient}>
      <QueriesBoundary>
        <SafeAreaProvider>
          <KeyboardProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Protected guard={!!session}>
                <Stack.Screen name="(authenticated)" />
              </Stack.Protected>

              <Stack.Protected guard={!session}>
                <Stack.Screen name="login" />
              </Stack.Protected>
            </Stack>
          </KeyboardProvider>
        </SafeAreaProvider>
      </QueriesBoundary>
    </QueryClientProvider>
  );
}

export default RootLayout;
