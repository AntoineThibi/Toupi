import { QueriesBoundary } from "#shared/QueriesBoundary/QueriesBoundary";
import { PropsWithChildren } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet } from "react-native-unistyles";

export const ScreenTemplate = ({ children }: PropsWithChildren) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={styles.container(top)}>
      <QueriesBoundary>{children}</QueriesBoundary>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (top) => ({
    paddingTop: top,
  }),
});
