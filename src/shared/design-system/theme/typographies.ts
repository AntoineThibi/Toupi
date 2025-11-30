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
    //   fontFamily: typographie.font.family.title,
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: 18 * 1.4,
  },
} as const;
