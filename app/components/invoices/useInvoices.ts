import { ulid } from 'ulidx'

const invoices = ['paid', 'outstanding', 'overdue'] as const

export type InvoiceStatus = typeof invoices[number]

export type Invoice ={
	id: string
	title: string
	clientName: string
	amount: number
	date: Date
	status : InvoiceStatus
	selected : boolean
}

export type PersonalData = {
	invoices : Map<string,Invoice>
	balance : number
	pending : number
}

export const useInvoices = defineStore( 'invoices', () => {

	// title , invoice
	const invoiceList = new Map<string, Invoice>([
		['Mraz-Sons 402', {
			id: ulid(),
			title: 'Mraz-Sons 402',
			clientName: 'Mraz and Sons',
			amount: 3120.98,
			date: new Date(2024, 1, 24),
			status: 'paid',
			selected : false
		}],
		['Stokes LLC 02', {
			id: ulid(),
			title: 'Stokes LLC 02',
			clientName: 'Stokes LLC',
			amount: 1327.80,
			date: new Date(2024, 1, 21),
			status: 'paid',
			selected : false
		}],
		['BBP 16', {
			id: ulid(),
			title: 'BBP 16',
			clientName: 'Bergnaum, Blick and Pagac',
			amount: 2700.31,
			date: new Date(2024, 1, 18),
			status: 'outstanding',
			selected : false
		}],
		['Bash-Grim 01', {
			id: ulid(),
			title: 'Bash-Grim 01',
			clientName: 'Bashirian-Grimes',
			amount: 4219.58,
			date: new Date(2024, 1, 17),
			status: 'overdue',
			selected : false
		}],
		['McC-Schinner 09', {
			id: ulid(),
			title: 'McC-Schinner 09',
			clientName: 'McCullough-Schinner',
			amount: 3230.74,
			date: new Date(2024, 1, 16),
			status: 'overdue',
			selected : false
		}],
	])

	const personalData = ref<PersonalData>({
		invoices: invoiceList,
		balance: 10234.40,
		pending: 24497.13
	})

	return {
		personalData
	}
})
