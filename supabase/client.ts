import { createBrowserClient } from "@supabase/ssr";

export const createClient = () => {
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  if (!supabaseKey) {
    console.error("Supabase key is missing in browser client");
  }

  return createBrowserClient(
    "https://yvycpuflxfalorunurpe.supabase.co",
    supabaseKey || "SUPABASE_KEY_PLACEHOLDER",
  );
};
