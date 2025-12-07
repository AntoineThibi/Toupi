import {
  Caveat_400Regular,
  Caveat_600SemiBold,
} from "@expo-google-fonts/caveat";
import { PatrickHand_400Regular } from "@expo-google-fonts/patrick-hand";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

const newFonts = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  "catto-puroo": require("#assets/fonts/catto-puroo.ttf"),
  PatrickHand_400Regular,
  Caveat_400Regular,
  Caveat_600SemiBold,
  Roboto_400Regular,
};

export const useInitializeFonts = () => {
  const [loaded, error] = useFonts(newFonts);

  // eslint-disable-next-line @bam.tech/require-named-effect
  useEffect(() => {
    if (loaded || error) {
      void SplashScreen.hideAsync();
    }
  }, [loaded, error]);
};
