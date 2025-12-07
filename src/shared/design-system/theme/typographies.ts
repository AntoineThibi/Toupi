import { Platform } from "react-native";

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
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: 20 * 1.4,
  },
  P2: {
    fontFamily: "Caveat_600SemiBold",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: 18 * 1.4,
  },
  P3: {
    fontFamily: "Caveat_400Regular",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 18 * 1.4,
  },
} as const;
