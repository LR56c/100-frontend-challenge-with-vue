export function convertToMegabytes(size: number, unit: 'B' | 'KB' | 'GB' | 'TB'): number {
	switch (unit) {
		case 'B': // Bytes a MB
			return size / (1024 * 1024);
		case 'KB': // Kilobytes a MB
			return size / 1024;
		case 'GB': // Gigabytes a MB
			return size * 1024;
		case 'TB': // Terabytes a MB
			return size * 1024 * 1024;
		default:
			throw new Error("Unidad no válida. Usa 'B', 'KB', 'MB', 'GB', o 'TB'.");
	}
}