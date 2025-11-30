import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

const newFonts = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  "catto-puroo": require("#assets/fonts/catto-puroo.ttf"),
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
