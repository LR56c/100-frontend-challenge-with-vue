import { ulid } from 'ulidx'

export type CustomerType = 'active' | 'inactive'

export type Customer = {
	id: string
	name: string
	avatar ?: string
	email: string
	company: string
	phone: string
	status: CustomerType
	createdAt: Date
}

export const useCustomerList = defineStore( 'customer-list', () => {
	const customers = ref(new Map<string, Customer>([
		[
			'John Doe', {
			id: ulid(),
			name: 'John Doe',
			avatar: 'https://i.pravatar.cc/60?img=3',
			email: 'john.doe@gmail.com',
			company: 'Hartmann Group',
			phone: '68 574 01 68',
			status: 'active',
			createdAt: new Date('2023-10-16')
		}
		],
		[
			'GR&R', {
			id: ulid(),
			name: 'GR&R',
			avatar: 'https://i.pravatar.cc/60?img=4',
			email: 'gr&r@gmail.com',
			company: 'Gaylord, Reichelt and Rosen...',
			phone: '81 906 68 07',
			status: 'active',
			createdAt: new Date('2023-10-22')
		}
		],
		[
			'Bergnaum Group', {
			id: ulid(),
			name: 'Bergnaum Group',
			avatar: 'https://i.pravatar.cc/60?img=5',
			email: 'bergnaum@group.com',
			company: 'Bergnaum Group',
			phone: '22 288 04 91',
			status: 'active',
			createdAt: new Date('2023-10-23')
		}
		],
		[
			'D\'Amore PLC', {
			id: ulid(),
			name: 'D\'Amore PLC',
			avatar: 'https://i.pravatar.cc/60?img=6',
			email: 'd\'amore@gmail.com',
			company: 'D\'Amore PLC',
			phone: '66 372 55 58',
			status: 'inactive',
			createdAt: new Date('2023-11-02')
		}
		],
		[
			'Eric Dyer', {
			id: ulid(),
			name: 'Eric Dyer',
			avatar: 'https://i.pravatar.cc/60?img=7',
			email: 'eric.dyer@gmail.com',
			company: 'Hammes Ltd',
			phone: '87 518 23 93',
			status: 'active',
			createdAt: new Date('2023-11-10')
		}
		],
		[
			'HR&L', {
			id: ulid(),
			name: 'HR&L',
			avatar: 'https://i.pravatar.cc/60?img=8',
			email: 'hr&l@gmail.com',
			company: 'Herman, Rutherford and L...',
			phone: '90 545 13 52',
			status: 'active',
			createdAt: new Date('2023-12-04')
		}
		],
		[
			'Auer-O\'Kon', {
			id: ulid(),
			name: 'Auer-O\'Kon',
			avatar: 'https://i.pravatar.cc/60?img=9',
			email: 'auer.okon@gmail.com',
			company: 'Auer-O\'Kon',
			phone: '46 146 83 44',
			status: 'inactive',
			createdAt: new Date('2023-12-13')
		}
		],
		[
			'Mosciski-Denesik', {
			id: ulid(),
			name: 'Mosciski-Denesik',
			avatar: 'https://i.pravatar.cc/60?img=10',
			email: 'mosc.den@gmail.com',
			company: 'Mosciski-Denesik',
			phone: '53 532 55 82',
			status: 'active',
			createdAt: new Date('2024-01-06')
		}
		]
	]))

	const deleteCustomer = (name: string) => {
		customers.value.delete(name)
	}

	const mofidyCustomer = (name: string, customer: Customer) => {
		customers.value.set(name, customer)
	}

	const getCustomer = (name: string) : Customer | undefined =>{
		return customers.value.get(name)
	}

	return {
		customers,
		getCustomer,
		deleteCustomer,
		mofidyCustomer,
	}
} )
