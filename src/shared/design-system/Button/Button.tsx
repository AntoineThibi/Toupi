import { buttonTheme } from "#shared/design-system/theme/buttonTheme";
import { Typography } from "#shared/design-system/Typography/Typography";
import React from "react";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native-unistyles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant: "primary" | "secondary" | "tertiary";
}

export const Button = ({ title, onPress, variant }: ButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => styles.button(variant, pressed)}
      onPress={onPress}
    >
      <Typography style={styles.text(variant)}>{title}</Typography>
    </Pressable>
  );
};

const styles = StyleSheet.create((theme) => ({
  button: (
    variant: "primary" | "secondary" | "tertiary",
    pressed: boolean,
  ) => ({
    padding: 12,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    ...buttonTheme(theme)[variant][pressed ? "pressed" : "default"],
    ...buttonTheme(theme)[variant].base,
  }),
  text: (variant: "primary" | "secondary" | "tertiary") => ({
    ...buttonTheme(theme).text[variant],
  }),
}));
