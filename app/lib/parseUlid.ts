import { decodeTime } from 'ulidx';
export function parseUlid(id: string): Date {
	const time = decodeTime(id);
	return new Date(time);
}
