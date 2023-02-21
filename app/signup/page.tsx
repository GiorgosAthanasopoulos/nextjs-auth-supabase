"use client";

import LoginForm from "@/components/LoginForm";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function SignUp() {
	const router = useRouter();

	return (
		<LoginForm
			login={false}
			onSubmit={async (email: string, password: string) => {
				await supabase.auth.signUp({
					email: email,
					password: password,
				});
				alert(
					"Please confirm email address.You wont be able to login otherwise!"
				);
				router.push("/login");
			}}
		/>
	);
}
