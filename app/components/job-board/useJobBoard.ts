import { ulid } from 'ulidx'

export type Job = {
	id: string
	companyLogo: string
	title: string
	company: string
	tags: string[]
	salary: number
	createdAt: Date
	location: string
	description: string
	applicants: number
}

export const useJobBoard = defineStore( 'job-board', () => {

	const today  = new Date()
	const jobMap = ref( new Map<string, Job[]>( [
		[ 'United States', [
			{
				id         : ulid(),
				companyLogo: 'logos-netflix-icon',
				title      : 'Backend .Net Developer',
				company    : 'Netflix',
				tags       : [ 'fullstack', 'angular', 'azure', 'c#' ],
				salary     : 13000,
				createdAt  : new Date( today.getFullYear(), today.getMonth(),
					today.getDate(), today.getHours(), today.getMinutes() - 6 ),
				location   : 'United States',
				description: 'Netflix is seeking a highly skilled motivatad Backend .NET Developer to join our talonted engineering team. As a Backend .NET Developer, you will play a crucial role',
				applicants : 101
			},
			{
				id         : ulid(),
				companyLogo: 'logos-google-icon',
				title      : 'Mid Fullstack Developer',
				company    : 'Google',
				tags       : [ 'fullstack', 'angular', 'azure', 'c#' ],
				salary     : 15000,
				createdAt  : new Date( today.getFullYear(), today.getMonth(),
					today.getDate(), today.getHours(), today.getMinutes() - 18 ),
				location   : 'United States',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit in nunc varius ultrices. Nulla facilisi. Donec non felis nec purus lacinia tincidunt. Donec vel dolor',
				applicants : 80
			},
			{
				id         : ulid(),
				companyLogo: 'logos-facebook',
				title      : 'Platforms Engineer',
				company    : 'Facebook',
				tags       : [ 'DevOps', 'Ansible', 'Linux', 'Networks' ],
				salary     : 7000,
				createdAt  : new Date( today.getFullYear(), today.getMonth(),
					today.getDate() - 1 ),
				location   : 'United States',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit in nunc varius ultrices. Nulla facilisi. Donec non felis nec purus lacinia tincidunt. Donec vel dolor',
				applicants : 50
			},
			{
				id         : ulid(),
				companyLogo: 'logos-apple',
				title      : 'IT Software Consultant',
				company    : 'Apple',
				tags       : [ 'c#', 'sql', 'azure' ],
				salary     : 10000,
				createdAt  : new Date( today.getFullYear(), today.getMonth(),
					today.getDate(), today.getHours() - 1 ),
				location   : 'United States',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit in nunc varius ultrices. Nulla facilisi. Donec non felis nec purus lacinia tincidunt. Donec vel dolor',
				applicants : 80
			}
		] ],
		[ 'Remote', [
			{
				id         : ulid(),
				companyLogo: 'logos-dropbox',
				title      : 'Fullstack Developer',
				company    : 'Dropbox',
				tags       : [ 'fullstack', 'react', 'node.js', 'JavaScript' ],
				salary     : 9000,
				createdAt  : new Date( today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes() - 24 ),
				location   : 'Remote',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit in nunc varius ultrices. Nulla facilisi. Donec non felis nec purus lacinia tincidunt. Donec vel dolor',
				applicants : 50
			}
		] ],
		[ 'Mexico', [
			{
				id         : ulid(),
				companyLogo: 'logos-ibm',
				title      : '.NET Developer',
				company    : 'IBM',
				tags       : [ 'backend', 'NET', '.NET CORE' ],
				salary     : 15000,
				createdAt  : new Date( today.getFullYear(), today.getMonth(), today.getDate(), today.getHours() - 2 ),
				location   : 'Mexico',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit in nunc varius ultrices. Nulla facilisi. Donec non felis nec purus lacinia tincidunt. Donec vel dolor',
				applicants : 20
			}
		] ]
	] ) )
	const getJobsByLocation = ( locationValue: string ): Job[] => {
		if ( !jobMap.value.has( locationValue ) ) {
			jobMap.value.set( locationValue, [] )
		}
		return jobMap.value.get( locationValue )!
	}

	const getJobByTitle = ( title: string, locationValue : string ): Job[] => {
		if ( locationValue.length ) {
			const jobs = getJobsByLocation( locationValue )
			return jobs.filter( job => job.title.toLowerCase()
			                              .includes( title.toLowerCase() ) )
		}
		const jobs = Array.from( jobMap.value.values() )
		                  .flat()
		return jobs.filter( job => job.title.toLowerCase()
		                              .includes( title.toLowerCase() ) )
	}

	const getJobLocations = (): string[] => {
		return Array.from( jobMap.value.keys() )
	}

	const getAllJobs = (): Job[] => {
		return Array.from( jobMap.value.values() ).flat()
	}

	return {
		jobMap,
		getJobByTitle,
		getJobsByLocation,
		getJobLocations,
		getAllJobs
	}
} )
