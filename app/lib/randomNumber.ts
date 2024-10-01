export function randomNumber(min: number, max: number, isDecimal: boolean): number {
	if (isDecimal) {
		return Math.random() * (max - min) + min;
	} else {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}
