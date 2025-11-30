import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Icon,
  NativeTabs,
  Label,
  VectorIcon,
} from "expo-router/unstable-native-tabs";
import { Platform } from "react-native";
import { useUnistyles } from "react-native-unistyles";

export default function AppLayout() {
  const { theme } = useUnistyles();
  // This renders the navigation stack for all authenticated app routes.
  return (
    <NativeTabs minimizeBehavior="onScrollDown">
      <NativeTabs.Trigger name="index">
        <Label>{`Toupi`}</Label>
        {Platform.select({
          ios: (
            <Icon
              sf="pawprint.fill"
              selectedColor={theme.colors.primary.medium}
            />
          ),
          android: (
            <Icon
              src={<VectorIcon family={Ionicons} name="paw" />}
              selectedColor={theme.colors.primary.medium}
            />
          ),
        })}
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <Label>{`Profile`}</Label>
        {Platform.select({
          ios: (
            <Icon
              sf="figure.wave"
              selectedColor={theme.colors.primary.medium}
            />
          ),
          android: (
            <Icon
              src={
                <VectorIcon
                  family={MaterialCommunityIcons}
                  name="human-greeting-variant"
                />
              }
              selectedColor={theme.colors.primary.medium}
            />
          ),
        })}
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
