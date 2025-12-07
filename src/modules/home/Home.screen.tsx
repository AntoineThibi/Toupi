import { Button } from "#shared/design-system/Button/Button";
import { Typography } from "#shared/design-system/Typography/Typography";
import { ScreenTemplate } from "#shared/screenTemplate/ScreenTemplate";
import { UnistylesRuntime } from "react-native-unistyles";

export const Home = () => {
  return (
    <ScreenTemplate>
      <Typography variant="Title">Le Canapé</Typography>
      <Button
        variant="tertiary"
        title="Change theme"
        onPress={() =>
          UnistylesRuntime.setTheme(
            UnistylesRuntime.themeName === "dark" ? "light" : "dark",
          )
        }
      />
    </ScreenTemplate>
  );
};
