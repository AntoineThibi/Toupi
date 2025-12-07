import { typographies } from "#shared/design-system/theme/typographies";
import { Typography } from "#shared/design-system/Typography/Typography";
import { TextInput, TextInputProps, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type InputProps = TextInputProps & {
  errorLabel?: string;
};

export const Input = ({ style, errorLabel, ...props }: InputProps) => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, typographies["P1"], style]}
          placeholderTextColor="#999999"
          {...props}
        />
      </View>
      {errorLabel && (
        <Typography variant="P2" style={styles.errorText}>
          {errorLabel}
        </Typography>
      )}
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  inputContainer: {
    borderWidth: 1,
    borderColor: theme.colors.primary.medium,
    padding: 16,
    borderRadius: 32,
    backgroundColor: theme.colors.contrast.high,
  },
  input: {
    color: theme.colors.primary.medium,
  },
  errorText: {
    color: theme.colors.error.low,
    paddingHorizontal: 8,
  },
}));
