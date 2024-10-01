export function randomString(arr: readonly string[]): string {
	const index = Math.floor(Math.random() * arr.length)
	return arr[index]!
}
