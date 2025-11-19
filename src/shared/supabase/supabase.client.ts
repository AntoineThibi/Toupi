import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ijlpqdcsbajeqcsaunpg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqbHBxZGNzYmFqZXFjc2F1bnBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyNzkyODcsImV4cCI6MjA3ODg1NTI4N30.Fn5anTTZUnPbCZalst0gKkwHPE8-qZBa9m9pJbrBD78",
);
