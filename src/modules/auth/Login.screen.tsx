import { ScreenTemplate } from "#shared/screenTemplate/ScreenTemplate";
import { View, Alert } from "react-native";
import { Button } from "#shared/design-system/Button/Button";
import { StyleSheet } from "react-native-unistyles";

import React, { useState } from "react";
import { Typography } from "#shared/design-system/Typography/Typography";
import { Input } from "#shared/design-system/TextInput/Input";
import { useLogin } from "#modules/auth/auth.queries";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, error } = useLogin();

  const handleLogin = () => {
    mutate({ email, password });
  };

  const quickConnect = () => {
    mutate({
      email: "antoine.thibierge@gmail.com",
      password: "password123",
    });
  };

  const handleSignUp = () => {
    // You can navigate to a sign up screen or implement sign up logic here
    // For now, just a placeholder
    Alert.alert("Sign up not implemented yet.");
  };

  const errorMessage = error?.message;

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.titleContainer}>
            <Typography variant="Title">C'est</Typography>
            <Typography variant="BigTitle">Toupi !</Typography>
          </View>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            errorLabel={errorMessage}
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            errorLabel={errorMessage}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button variant="primary" title="Login" onPress={handleLogin} />
          <Button title="Sign Up" onPress={handleSignUp} variant="secondary" />
          {
            // eslint-disable-next-line no-undef
            __DEV__ && (
              <Button
                title="Quick Connect"
                onPress={quickConnect}
                variant="tertiary"
              />
            )
          }
        </View>
      </View>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create(() => ({
  titleContainer: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  inputContainer: {
    gap: 16,
  },
  buttonContainer: {
    gap: 16,
  },
}));
