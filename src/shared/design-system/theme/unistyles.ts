import { breakpoints } from "#shared/design-system/theme/breakpoints";
import { darkTheme } from "#shared/design-system/theme/darkTheme";
import { lightTheme } from "#shared/design-system/theme/lightTheme";
import { StyleSheet } from "react-native-unistyles";

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

type AppBreakpoints = typeof breakpoints;

declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

const settings = {
  initialTheme: "light",
} as const;

StyleSheet.configure({
  themes: appThemes,
  settings,
  breakpoints,
});
