import { createClient } from "@supabase/supabase-js";
import { AppState, Platform } from "react-native";
import { createMMKV } from "react-native-mmkv";

export const supabaseStorage = createMMKV();

const supabaseStorageAdapter = {
  getItem: (key: string): string | null => {
    return supabaseStorage.getString(key) ?? null;
  },
  setItem: (key: string, value: string) => {
    return supabaseStorage.set(key, value);
  },
  removeItem: (key: string) => {
    supabaseStorage.remove(key);
  },
};

export const supabase = createClient(
  "https://ijlpqdcsbajeqcsaunpg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqbHBxZGNzYmFqZXFjc2F1bnBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyNzkyODcsImV4cCI6MjA3ODg1NTI4N30.Fn5anTTZUnPbCZalst0gKkwHPE8-qZBa9m9pJbrBD78",
  {
    auth: {
      storage: supabaseStorageAdapter,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  },
);

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
if (Platform.OS !== "web") {
  AppState.addEventListener("change", async (state) => {
    if (state === "active") {
      await supabase.auth.startAutoRefresh();
    } else {
      await supabase.auth.stopAutoRefresh();
    }
  });
}
