import { typographies } from "#shared/design-system/theme/typographies";
import { PropsWithChildren } from "react";
import { Text, TextProps } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type Props = {
  variant?: keyof typeof typographies;
} & TextProps;

export const Typography = ({
  children,
  variant = "P1",
  style,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Text style={[typographies[variant], styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create(({ colors }) => ({
  text: {
    color: colors.primary.medium,
  },
}));
