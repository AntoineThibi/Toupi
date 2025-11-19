import { supabase } from "#shared/supabase/supabase.client";
import { Button, Text, View } from "react-native";

export const Login = () => {
  return (
    <View>
      <Text>Welcome to Toupi!</Text>
      <View style={{ marginTop: 40 }}>
        <Button
          title="Click me"
          onPress={() =>
            supabase.auth.signUp({
              email: "antoine.thibierge@gmail.com",
              password: "password123",
            })
          }
        />
      </View>
    </View>
  );
};
