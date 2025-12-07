import { TextInput, TextInputProps, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type InputProps = TextInputProps;

export const Input = ({ style, ...props }: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput style={[styles.input, style]} {...props} />
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.primary.medium,
    padding: 16,
    borderRadius: 32,
    backgroundColor: theme.colors.contrast.high,
  },
  input: {
    color: theme.colors.primary.medium,
  },
}));
