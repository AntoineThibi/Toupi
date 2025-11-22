import { ScreenTemplate } from "#shared/screenTemplate/ScreenTemplate";
import { supabase } from "#shared/supabase/supabase.client";
import { Button, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export const Login = () => {
  return (
    <ScreenTemplate>
      <Text>Welcome to Toupi!</Text>
      <View style={styles.container}>
        <Button
          title="Click me"
          onPress={() =>
            supabase.auth.signInWithPassword({
              email: "antoine.thibierge@gmail.com",
              password: "password123",
            })
          }
        />
      </View>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    padding: 20,
    backgroundColor: theme.colors.primary,
  },
}));
