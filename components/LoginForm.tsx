import { passwordValid } from "@/lib/password";
import Link from "next/link";
import { useState } from "react";

type LoginFormProps = {
	onSubmit: Function;
	login: boolean;
};

export default function LoginForm({ onSubmit, login }: LoginFormProps) {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState("");

	return (
		<>
			<div className="m-2">
				<form
					onSubmit={async (e) => {
						e.preventDefault();
						await onSubmit(email, password);
					}}
				>
					<label htmlFor="email">Enter email</label>
					<br />
					<input
						type="text"
						id="email"
						onChange={(e) => {
							let emailRegex =
								/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
							const input = e.target.value;

							if (emailRegex.test(input)) {
								setEmailError("");
								setEmail(input);
							} else {
								setEmailError("Invalid email address!");
							}
						}}
						className="mb-2 border-solid border-2 border-black rounded-md"
						autoComplete="off"
					/>
					{emailError != "" ? (
						<p className="text-red-400">{emailError}</p>
					) : (
						<></>
					)}
					<br />
					<label htmlFor="password">
						Enter password{" "}
						{login
							? ""
							: "(at least: 12 characters, 1 upper-case letter, 1 lower-case letter, 1 number, 1 symbol)"}
					</label>
					<br />
					<input
						type="password"
						id="password"
						onChange={(e) => {
							const input = e.target.value;
							if (!login) {
								setPasswordError(passwordValid(input));
								if (passwordError != "") {
									return;
								}
							}
							setPassword(input);
						}}
						autoComplete="off"
						className="mb-2 border-solid border-2 border-black rounded-md"
					/>
					{passwordError != "" ? (
						<p className="text-red-400">{passwordError}</p>
					) : (
						<></>
					)}
					<br />
					<button className="border-solid border-2 border-black hover:scale-110 p-1 mb-2">
						{login ? "Login" : "Sign in"}
					</button>
				</form>
				<Link href={login ? "/signup" : "/login"} className="underline">
					{login
						? "Dont have an account? Click here to sign up."
						: "Already have an account? Click here to login."}
				</Link>
			</div>
		</>
	);
}
