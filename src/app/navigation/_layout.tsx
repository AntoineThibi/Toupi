import { Slot, SplashScreen } from "expo-router";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { queryClient } from "#shared/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueriesBoundary } from "#shared/QueriesBoundary/QueriesBoundary";

void SplashScreen.preventAutoHideAsync();

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <QueriesBoundary>
        <SafeAreaProvider>
          <KeyboardProvider>
            <Router />
          </KeyboardProvider>
        </SafeAreaProvider>
      </QueriesBoundary>
    </QueryClientProvider>
  );
}

export default RootLayout;

const Router = () => {
  return <Slot />;
};
