"use client";

import LoginForm from "@/components/LoginForm";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
	const router = useRouter();

	return (
		<>
			<LoginForm
				login={true}
				onSubmit={async (email: string, password: string) => {
					const { error } = await supabase.auth.signInWithPassword({
						email: email,
						password: password,
					});
					router.push("/");
				}}
			/>
		</>
	);
}
