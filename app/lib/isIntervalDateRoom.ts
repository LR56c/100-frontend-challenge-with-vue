export interface Interval {
	start: Date
	end: Date
}

export function isIntervalDateRoom(intervals: Interval[], newInterval: Interval): boolean {
	const { start: newStart, end: newEnd } = newInterval;

	intervals.sort((a, b) => a.start.getTime() - b.start.getTime());

	if (newEnd <= intervals[0]!.start) {
		return true;
	}

	for (let i = 0; i < intervals.length - 1; i++) {
		const currentEnd = intervals[i]!.end;
		const nextStart = intervals[i + 1]!.start;

		if (currentEnd <= newStart && nextStart >= newEnd) {
			return true;
		}
	}

	return intervals[intervals.length - 1]!.end <= newStart;
}
