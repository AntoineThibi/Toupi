import { StyleSheet, View } from "react-native";

import { Button, Text } from "react-native";

type Props = {
  onRetry: () => void;
};

export const ErrorView = ({ onRetry }: Props) => {
  return (
    <View style={styles.container}>
      <Text>An error occurred. Please try again later or contact support.</Text>
      <View style={styles.retryButton}>
        <Button title="Refresh the page" onPress={onRetry} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
  retryButton: {
    alignSelf: "stretch",
  },
  errorMessage: {
    textAlign: "center",
  },
});
