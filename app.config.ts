import { type ExportedConfig } from "expo/config-plugins";

const config: ExportedConfig = {
  name: "Toupi",
  slug: "toupi",
  scheme: "toupi",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.antoinethib.toupi",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
    package: "com.antoinethib.toupi",
  },
  web: {
    bundler: "metro",
    favicon: "./assets/favicon.png",
  },
  plugins: [
    "expo-build-properties",
    [
      "expo-router",
      {
        root: "./src/app/navigation",
      },
    ],
    "expo-secure-store",
    [
      "@zoontek/react-native-navigation-bar",
      { android: { enforceNavigationBarContrast: true } },
    ],
    [
      "expo-font",
      {
        fonts: ["./assets/fonts/catto-puroo.ttf"],
      },
    ],
  ],
};

export default config;
