const bigAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallAlphabet = bigAlphabet.toLowerCase();
const numbers = "1234567890";
const symbols = "`~!@#$%^&*()-_=+\\|]}[{;:'\"/?.>,<";

export function containsUpper(input: string) {
	for (let i = 0; i < bigAlphabet.length; i++) {
		if (input.includes(bigAlphabet[i])) {
			return true;
		}
	}

	return false;
}

export function containsLower(input: string) {
	for (let i = 0; i < smallAlphabet.length; i++) {
		if (input.includes(smallAlphabet[i])) {
			return true;
		}
	}

	return false;
}

export function containsNumber(input: string) {
	for (let i = 0; i < numbers.length; i++) {
		if (input.includes(numbers[i])) {
			return true;
		}
	}

	return false;
}

export function containsSymbol(input: string) {
	for (let i = 0; i < symbols.length; i++) {
		if (input.includes(symbols[i])) {
			return true;
		}
	}

	return false;
}

export function passwordValid(input: string) {
	if (input.length < 12) {
		return "Password must be at least 12 characters long!";
	} else if (!containsLower(input)) {
		return "Password must contain at least 1 lower-case letter!";
	} else if (!containsUpper(input)) {
		return "Password must contain at least 1 upper-case letter!";
	} else if (!containsNumber(input)) {
		return "Password must contain at least 1 number!";
	} else if (!containsSymbol(input)) {
		return "Password must contain at least 1 symbol!";
	}

	return "";
}
