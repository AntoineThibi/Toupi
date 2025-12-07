import { lightTheme } from "#shared/design-system/theme/lightTheme";

export const buttonTheme = (theme: typeof lightTheme) => ({
  primary: {
    base: {
      borderColor: "transparent",
      borderWidth: 0,
    },
    pressed: {
      backgroundColor: theme.colors.primary.high,
    },
    default: {
      backgroundColor: theme.colors.primary.medium,
    },
  },
  secondary: {
    base: {
      backgroundColor: "transparent",
      borderWidth: 1,
    },
    pressed: {
      borderColor: theme.colors.primary.low,
    },
    default: {
      borderColor: theme.colors.primary.medium,
    },
  },
  text: {
    primary: {
      color: theme.colors.contrast.high,
    },
    secondary: {
      color: theme.colors.primary.medium,
    },
  },
});
