import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = async () => {
  const cookieStore = cookies();

  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  if (!supabaseKey) {
    console.error("Supabase key is missing in server client");
  }

  return createServerClient(
    "https://yvycpuflxfalorunurpe.supabase.co",
    supabaseKey || "SUPABASE_KEY_PLACEHOLDER",
    {
      cookies: {
        getAll() {
          try {
            return cookieStore.getAll().map(({ name, value }) => ({
              name,
              value,
            }));
          } catch (error) {
            // If cookies() is called in an environment where it's not allowed
            console.error("Error accessing cookies:", error);
            return [];
          }
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch (error) {
            // If cookies() is called in an environment where it's not allowed
            console.error("Error setting cookies:", error);
          }
        },
      },
    },
  );
};
