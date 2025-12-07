import { supabase } from "#shared/supabase/supabase.client";

export const login = async (email: string, password: string) => {
  const data = await supabase.auth.signInWithPassword({ email, password });

  if (data.error) {
    throw data.error;
  }

  return data;
};
