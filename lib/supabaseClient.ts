import { createClient } from "@supabase/supabase-js";

const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_API_URL as string;
const apiKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string;

export const supabase = createClient(apiUrl, apiKey, {
	auth: {
		persistSession: true,
	},
});
