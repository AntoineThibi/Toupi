import { colors } from "#shared/design-system/theme/colors";

export const darkTheme = {
  colors: {
    primary: {
      low: colors.walnut["500"],
      medium: colors.walnut["700"],
      high: colors.walnut["900"],
    },
    secondary: {
      low: colors.petalRouge["1000"],
      medium: colors.petalRouge["800"],
      high: colors.petalRouge["600"],
    },
    contrast: {
      low: colors.neutral.high,
      high: colors.neutral.low,
    },
    error: {
      low: colors.petalRouge["700"],
      medium: colors.petalRouge["500"],
      high: colors.petalRouge["300"],
    },
    success: {
      low: colors.mutedTeal2["700"],
      medium: colors.mutedTeal2["500"],
      high: colors.mutedTeal2["300"],
    },
  },
};
