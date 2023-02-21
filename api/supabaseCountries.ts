import { supabase } from "@/lib/supabaseClient";

export async function addCountry(name: string) {
	const { data, error } = await supabase.from("countries").insert([
		{
			name: name,
		},
	]);
	return { data, error };
}
