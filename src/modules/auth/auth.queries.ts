import { login, logout } from "#modules/auth/auth.api";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const { mutate, status, error } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login(email, password),
  });

  return { mutate, status, error };
};

export const useLogout = () => {
  const { mutate, status, error } = useMutation({
    mutationFn: () => logout(),
  });

  return { mutate, status, error };
};
