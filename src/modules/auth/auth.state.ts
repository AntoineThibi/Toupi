import { supabase } from "#shared/supabase/supabase.client";
import { User } from "@supabase/supabase-js";
import { useEffect } from "react";
import { create } from "zustand";

type AuthState = {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  initialize: () => Promise<void>;
};

export const useSession = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  setUser: (user) => set({ user, isLoading: false }),
  initialize: async () => {
    const { data } = await supabase.auth.getUser();

    set({ user: data.user, isLoading: false });
  },
}));

supabase.auth.onAuthStateChange((_event, session) => {
  useSession.getState().setUser(session?.user ?? null);
});

export const useInitializeAuth = () => {
  const { initialize } = useSession();

  // eslint-disable-next-line @bam.tech/require-named-effect -- the rule sould take into account void
  useEffect(() => {
    void initialize();
  }, [initialize]);
};
