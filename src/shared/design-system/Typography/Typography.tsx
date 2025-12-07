import {
  typographieColors,
  typographies,
} from "#shared/design-system/theme/typographies";
import { PropsWithChildren } from "react";
import { Text, TextProps } from "react-native";

type Props = {
  variant: keyof typeof typographies;
} & TextProps;

export const Typography = ({
  children,
  variant,
  style,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Text
      style={[typographies[variant], typographieColors[variant], style]}
      {...props}
    >
      {children}
    </Text>
  );
};
