import { colors } from "#shared/design-system/theme/colors";

export const lightTheme = {
  colors: {
    primary: {
      low: colors.walnut["100"],
      medium: colors.walnut["300"],
      high: colors.walnut["500"],
    },
    secondary: {
      low: colors.petalRouge["600"],
      medium: colors.petalRouge["800"],
      high: colors.petalRouge["1000"],
    },
    contrast: {
      low: colors.neutral.low,
      high: colors.neutral.high,
    },
    error: {
      low: colors.petalRouge["300"],
      medium: colors.petalRouge["500"],
      high: colors.petalRouge["700"],
    },
    success: {
      low: colors.mutedTeal2["300"],
      medium: colors.mutedTeal2["500"],
      high: colors.mutedTeal2["700"],
    },
  },
};
