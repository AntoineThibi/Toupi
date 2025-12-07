import { QueriesBoundary } from "#shared/QueriesBoundary/QueriesBoundary";
import { PropsWithChildren } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet } from "react-native-unistyles";

export const ScreenTemplate = ({ children }: PropsWithChildren) => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View style={styles.container(top, bottom)}>
      <QueriesBoundary>{children}</QueriesBoundary>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: (top, bottom) => ({
    paddingTop: top,
    flex: 1,
    paddingBottom: bottom,
    backgroundColor: theme.colors.contrast.high,
  }),
}));
