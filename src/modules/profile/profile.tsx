import { useLogout } from "#modules/auth/auth.queries";
import { Button } from "#shared/design-system/Button/Button";
import { Typography } from "#shared/design-system/Typography/Typography";
import { ScreenTemplate } from "#shared/screenTemplate/ScreenTemplate";

export const Profile = () => {
  const { mutate: logout } = useLogout();

  return (
    <ScreenTemplate>
      <Typography variant="Title">Notre Profile</Typography>
      <Button variant="secondary" title="Logout" onPress={() => logout()} />
    </ScreenTemplate>
  );
};
