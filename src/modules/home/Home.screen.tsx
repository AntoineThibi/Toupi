import { ScreenTemplate } from "#shared/screenTemplate/ScreenTemplate";
import { supabase } from "#shared/supabase/supabase.client";
import { Button, Text } from "react-native";

export const Home = () => {
  return (
    <ScreenTemplate>
      <Text>Home Screen</Text>
      <Button title="Logout" onPress={() => supabase.auth.signOut()} />
    </ScreenTemplate>
  );
};
