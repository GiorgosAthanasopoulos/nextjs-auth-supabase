"use client";

import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { Country } from "@/types/Country";
import { addCountry } from "@/api/supabaseCountries";

export default function Home() {
	const router = useRouter();
	const [countries, setCountries] = useState(Array<Country>);

	useEffect(() => {
		async function checkUserLoggedIn() {
			const {
				data: { session },
				error,
			} = await supabase.auth.getSession();

			if (error || !session) {
				router.push("/signup");
			}
		}

		checkUserLoggedIn();

		async function fetchCountries() {
			const { data } = await supabase.from("countries").select();
			setCountries(data as Country[]);
		}

		fetchCountries();
	}, [router]);

	async function handleAddCountryButtonClicked() {
		await addCountry(prompt("Enter country name:") as string);
		window.location.reload();
	}

	async function handleSignOutButtonClicked() {
		await supabase.auth.signOut();
		window.location.reload();
	}

	return (
		<>
			<div>
				{countries.map((country) => {
					return <p key={country.id}>{country.name}</p>;
				})}
				<button
					className="border-solid border-2 border-black p-1 m-2"
					onClick={handleAddCountryButtonClicked}
				>
					Add country
				</button>
				<button
					className="border-solid border-2 border-black p-1 m-2"
					onClick={handleSignOutButtonClicked}
				>
					Sign out
				</button>
			</div>
		</>
	);
}
