import { Platform } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export const typographies = {
  BigTitle: {
    fontFamily: Platform.select({
      ios: "CattoPuroo-Display",
      default: "catto-puroo",
    }),
    fontSize: 128,
    lineHeight: 128 * 1.4,
  },
  Title: {
    fontFamily: Platform.select({
      ios: "CattoPuroo-Display",
      default: "catto-puroo",
    }),
    fontSize: 64,
    lineHeight: 64 * 1.4,
  },
  P1: {
    fontFamily: "Patrick Hand",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: 18 * 1.4,
  },
} as const;

export const typographieColors = StyleSheet.create<
  Record<keyof typeof typographies, { color: string }>
>((theme) => ({
  BigTitle: {
    color: theme.colors.primary.medium,
  },
  Title: {
    color: theme.colors.primary.medium,
  },
  P1: {
    color: theme.colors.primary.medium,
  },
}));
