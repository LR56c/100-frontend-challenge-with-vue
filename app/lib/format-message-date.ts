export function formatDate(date: Date): string {
	const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
	const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
	const time = new Intl.DateTimeFormat('en', { hour: '2-digit', minute: '2-digit', hour12: false }).format(date);

	return `${day}. ${month}. ${time}`;
}
