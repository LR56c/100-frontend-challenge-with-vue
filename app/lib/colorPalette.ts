import tinycolor from "tinycolor2";
export function generatePalette(baseColor: string): string[] {
	const color = tinycolor(baseColor);

	const analogous1 = color.clone().spin(30);
	const analogous2 = color.clone().spin(-30);
	const complementary = color.clone().spin(180);
	const triadic = color.clone().spin(120);

	return [
		analogous1.toHexString(),
		analogous2.toHexString(),
		complementary.toHexString(),
		triadic.toHexString(),
	];
}
