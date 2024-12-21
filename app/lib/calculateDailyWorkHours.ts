export interface MontlyWorkHours {
	month: string;
	year: number;
	days: number;
	totalHours: number
}

export function calculateWorkHours( startDate: Date ): MontlyWorkHours[] {
	const result: MontlyWorkHours[] = []
	const now = new Date();

	startDate = new Date(Date.UTC(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate()));

	const monthNames = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	let currentDate = new Date(Date.UTC(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate()));

	while (currentDate <= now) {
		const currentMonth = currentDate.getUTCMonth();
		const currentYear = currentDate.getUTCFullYear();

		if (currentYear < startDate.getUTCFullYear() || (currentYear === startDate.getUTCFullYear() && currentMonth < startDate.getUTCMonth())) {
			currentDate = new Date(Date.UTC(currentYear, currentMonth + 1, 1));
			continue;
		}

		const isCurrentMonth = currentMonth === now.getUTCMonth() && currentYear === now.getUTCFullYear();
		const daysInMonth = isCurrentMonth ? now.getUTCDate() : new Date(Date.UTC(currentYear, currentMonth + 1, 0)).getUTCDate();

		const totalHours = daysInMonth * 8;

		result.push({
			month: monthNames[currentMonth]!,
			year: currentYear,
			days: daysInMonth,
			totalHours: isCurrentMonth ? now.getUTCDate() * 8 : totalHours
		});

		currentDate = new Date(Date.UTC(currentYear, currentMonth + 1, 1));
	}

	return result;
}