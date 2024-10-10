import { isIntervalDateRoom } from '~/lib/isIntervalDateRoom'

export const MeetingsStatus = [ 'pending', 'done', 'not started' ] as const
export type MeetingStatusType = typeof MeetingsStatus[number]

export type Meeting = {
	title: string
	date: Date
	start: Date
	end: Date
	status: MeetingStatusType
}
export const useMeetingSchedule = defineStore( 'meeting-schedule', () => {

	const meetingsRef = ref( new Map<string, Meeting[]>( [
		[ '2024-10-09', [
			{
				title : 'Weekly Plant Care Workshop',
				date  : new Date( 2024, 9, 9 ),
				start : new Date( 2024, 9, 9, 10 ),
				end   : new Date( 2024, 9, 9, 11 ),
				status: 'done'
			},
			{
				title : 'Succulent Succulents Seminar',
				date  : new Date( 2024, 9, 9 ),
				start : new Date( 2024, 9, 9, 13 ),
				end   : new Date( 2024, 9, 9, 13, 30 ),
				status: 'pending'
			},
			{
				title : 'Cactus Care Class',
				date  : new Date( 2024, 9, 9 ),
				start : new Date( 2024, 9, 9, 14 ),
				end   : new Date( 2024, 9, 9, 14, 30 ),
				status: 'not started'
			}
		] ],
		[ '2024-10-10', [
			{
				title : 'Cactus Care Class',
				date  : new Date( 2024, 9, 10 ),
				start : new Date( 2024, 9, 10, 10 ),
				end   : new Date( 2024, 9, 10, 11 ),
				status: 'not started'
			}
		] ]
	] ) )
	const getMeetings = ( value: Date | string ): {
		key: string,
		meetings: Meeting[]
	} => {
		const dateFormat = typeof value === 'string' ? value : value.toISOString()
		                                                            .split(
			                                                            'T' )[0] || ''
		if ( !meetingsRef.value.has( dateFormat ) ) {
			meetingsRef.value.set( dateFormat, [] )
		}
		return {
			meetings: meetingsRef.value.get( dateFormat )!,
			key     : dateFormat
		}
	}

	const addMeeting = ( meeting: Meeting ): boolean => {
		const entry = getMeetings( meeting.date )

		if ( entry.meetings.length ) {
			const intervals = entry.meetings.map( m => ( {
				start: m.start,
				end  : m.end
			} ) )

			const isConflict = isIntervalDateRoom( intervals,
				{ start: meeting.start, end: meeting.end } )

			if ( isConflict ) {
				console.log( 'conflict date: ', meeting )
				return false
			}
		}

		entry.meetings.push( meeting )
		meetingsRef.value.set( entry.key, entry.meetings )
		return true
	}

	const advanceMeetingStatus = ( dayKey: Date, title: string ) => {
		const entry = getMeetings( dayKey )
		const index = entry.meetings.findIndex( m => m.title === title )
		if ( index === -1 ) {
			return
		}

		const currentStatus  = entry.meetings[index]!.status
		const nextStatus     = MeetingsStatus[( MeetingsStatus.indexOf(
			currentStatus ) + 1 ) % MeetingsStatus.length]
		const updatedMeeting = { ...entry.meetings[index], status: nextStatus }
		entry.meetings.splice( index, 1, updatedMeeting as Meeting )
	}

	return {
		meetingsRef,
		addMeeting,
		advanceMeetingStatus,
		getMeetings: ( value: Date | string ) => getMeetings( value ).meetings
	}
} )
