import { Typography } from "#shared/design-system/Typography/Typography";
import React from "react";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native-unistyles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant: "primary" | "secondary";
}

export const Button = ({ title, onPress, variant }: ButtonProps) => {
  return (
    <Pressable style={styles.button(variant)} onPress={onPress}>
      <Typography variant="P1" style={styles.text(variant)}>
        {title}
      </Typography>
    </Pressable>
  );
};

const styles = StyleSheet.create((theme) => ({
  button: (variant: "primary" | "secondary") => ({
    backgroundColor:
      variant === "primary" ? theme.colors.primary : "transparent",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: variant === "secondary" ? 1 : 0,
    borderColor: variant === "secondary" ? theme.colors.primary : "transparent",
  }),
  text: (variant: "primary" | "secondary") => ({
    color: variant === "primary" ? "#fff" : theme.colors.primary,
    fontSize: 16,
    fontWeight: "600",
  }),
}));
