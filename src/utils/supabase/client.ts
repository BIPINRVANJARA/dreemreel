import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_SUPABASE_URL : undefined;
const supabaseKey = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY : undefined;

export const createClient = () =>
  createBrowserClient(
    supabaseUrl!,
    supabaseKey!,
  );
