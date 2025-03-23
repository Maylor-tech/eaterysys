import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yvycpuflxfalorunurpe.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Check if key is available before creating client
if (!supabaseAnonKey) {
  console.error("Supabase key is missing");
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey || "SUPABASE_KEY_PLACEHOLDER",
);
