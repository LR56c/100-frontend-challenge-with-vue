<script setup
	lang="ts">
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
	Pagination,
	PaginationEllipsis,
	PaginationFirst,
	PaginationLast,
	PaginationList,
	PaginationListItem,
	PaginationNext,
	PaginationPrev
} from '@/components/ui/pagination'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table'
import type {
	ColumnDef,
	SortingState
} from '@tanstack/vue-table'
import {
	FlexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useVueTable
} from '@tanstack/vue-table'
import { ArrowUpDown } from 'lucide-vue-next'
import {
	h,
	ref
} from 'vue'
import CustomerEditCustomerModal
	from '~/components/customer-list/CustomerEditCustomerModal.vue'
import CustomerTableActionCell
	, {
	type CustomerTableAction,
	type CustomerTableActionTypes
} from '~/components/customer-list/CustomerTableActionCell.vue'
import CustomerTableBasicInfoCell
	from '~/components/customer-list/CustomerTableBasicInfoCell.vue'
import CustomerTableStatusCell
	from '~/components/customer-list/CustomerTableStatusCell.vue'
import {
	type Customer,
	useCustomerList
} from '~/components/customer-list/useCustomerList'
import { valueUpdater } from '~/lib/utils'

interface CustomerListTableProps {
	customers : Map<string, Customer>
}

const actionsValuesHeader : CustomerTableAction[] = [
	{ type: 'delete', icon: 'cil-trash', label: 'Delete' },
] as const
	const actionsValuesItems : CustomerTableAction[] = [
	{ type: 'edit', icon: 'cil-pencil', label: 'Edit' },
	{ type: 'delete', icon: 'cil-trash', label: 'Delete' },
] as const
const props                                      = defineProps<CustomerListTableProps>()
const store = useCustomerList()
const data         = computed( () => Array.from( props.customers.values() ) )
const rowSelection = ref( {} )
const openModal = ref(false)
const customerModal = ref<Customer | undefined>(undefined)
const columns: ColumnDef<Customer>[] = [
	{
		id           : 'select',
		header       : ( { table } ) => h( Checkbox, {
			'checked'         : table.getIsAllPageRowsSelected() ||
				( table.getIsSomePageRowsSelected() && 'indeterminate' ),
			'onUpdate:checked': value => table.toggleAllPageRowsSelected( !!value ),
			'ariaLabel'       : 'Select all',
			class: 'data-[state=checked]:bg-purple-700 data-[state=checked]:text-white data-[state=checked]:border-0 rounded'
		} ),
		cell         : ( { row } ) => h( Checkbox, {
			'checked'         : row.getIsSelected(),
			'onUpdate:checked': value => row.toggleSelected( !!value ),
			'ariaLabel'       : 'Select row',
			class: 'data-[state=checked]:bg-purple-700 data-[state=checked]:text-white data-[state=checked]:border-0 rounded'
		} ),
		enableSorting: false,
		enableHiding : false
	},
	{
		accessorKey: 'email',
		header     : 'BASIC INFO',
		cell       : ( { row } ) => {
			const { email, name, avatar } = row.original
			return h( CustomerTableBasicInfoCell, { name, email, avatar } )
		}
	},
	{
		accessorKey: 'company',
		header     : ( { column } ) => {
			return h( Button, {
				variant: 'ghost',
				onClick: () => column.toggleSorting( column.getIsSorted() === 'asc' )
			}, () => [ 'Company', h( ArrowUpDown, { class: 'ml-2 h-4 w-4' } ) ] )
		},
		cell       : ( { row } ) => h( 'div', { class: 'capitalize font-semibold' },
			row.getValue( 'company' ) )
	},
	{
		accessorKey: 'phone',
		header     : 'PHONE NUMBER',
		cell       : ( { row } ) => h( 'div', { class: 'lowercase font-semibold' }, '+' + row.getValue( 'phone' ) )
	},
	{
		accessorKey: 'status',
		header     : 'STATUS',
		cell       : ( { row } ) => h( CustomerTableStatusCell, { status: row.getValue( 'status' ), } )
	},
	{
		accessorKey: 'createdAt',
		header     : 'CREATED DATE',
		cell       : ( { row } ) => {
			const date = useDateFormat( row.getValue( 'createdAt' ),
				'D MMM, YYYY' ).value
			return h( 'div', {class: 'font-semibold'}, date )
		}
	},
	{
		id  : 'actions',
		header     : ( { column } ) => {
			return h( CustomerTableActionCell, {
				values: actionsValuesHeader,
				customerName: '',
				onOptionSelected: (name : CustomerTableActionTypes) => {
					if(name === 'delete') {
						const customers: Customer[] = []
						for ( const i in rowSelection.value ) {
							const c = data.value[i] ?? undefined
							if(c) {
								customers.push(c)
							}
						}
						for ( const customer of customers ) {
							store.deleteCustomer( customer.name )
						}
						rowSelection.value = {}
					}
				},
			} )
		},
		cell: ( { row } ) => {
			return h( CustomerTableActionCell, {
				values: actionsValuesItems,
				customerName: row.original.name,
				onOptionSelected: (name : CustomerTableActionTypes) => {
					switch ( name ){
						case 'edit':
							customerModal.value = store.getCustomer( row.original.name )
							openModal.value = true
							break
						case 'delete':
							store.deleteCustomer( row.original.name )
							break
					}
				},
			} )
		}
	}
]

const sorting      = ref<SortingState>( [] )

const table        = useVueTable( {
	data,
	columns,
	getCoreRowModel      : getCoreRowModel(),
	getPaginationRowModel: getPaginationRowModel(),
	getSortedRowModel    : getSortedRowModel(),
	onSortingChange      : updaterOrValue => valueUpdater( updaterOrValue,
		sorting ),
	onRowSelectionChange : updaterOrValue => valueUpdater( updaterOrValue,
		rowSelection ),
	state                : {
		get sorting() { return sorting.value },
		get rowSelection() { return rowSelection.value }
	}
} )
const PAGE_SIZE    = 5
table.setPageSize( PAGE_SIZE )
</script>

<template>
	<div class="w-full flex flex-col gap-8">
		<div class="h-[448px]">
			<Table>
				<TableHeader>
					<TableRow class="border-b-transparent"
						v-for="headerGroup in table.getHeaderGroups()"
						:key="headerGroup.id">
						<TableHead v-for="header in headerGroup.headers"
							:key="header.id"
							class="text-gray-500 font-semibold">
							<FlexRender v-if="!header.isPlaceholder"
								:render="header.column.columnDef.header"
								:props="header.getContext()"/>
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<template v-if="table.getRowModel().rows?.length">
						<template v-for="row in table.getRowModel().rows"
							:key="row.id">
							<TableRow class="group border-b-transparent"
								:data-state="row.getIsSelected() && 'selected'">
								<TableCell v-for="(cell,i) in row.getVisibleCells()"
									:key="cell.id"
									class="bg-white group-data-[state=selected]:bg-purple-300"
									:class="[i === 0 ? 'rounded-l-2xl' : '', i === columns.length - 1 ? 'rounded-r-2xl' : '']"
								>
									<FlexRender :render="cell.column.columnDef.cell"
										:props="cell.getContext()"/>
								</TableCell>
							</TableRow>
							<div class="h-3"></div>
						</template>
					</template>
					<TableRow v-else>
						<TableCell :colspan="columns.length" class="h-24 text-center">
							No results
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
		<Pagination v-slot="{ page }"
			:items-per-page="PAGE_SIZE"
			:total="data.length"
			:sibling-count="1"
			:default-page="1">
			<PaginationList v-slot="{ items }"
				class="flex items-center gap-1 justify-center">
				<PaginationFirst class="border-0 rounded-full hover:bg-indigo-400"
					:class="[table.getCanPreviousPage() ? 'bg-indigo-300' : 'bg-indigo-100']"
					:disabled="!table.getCanPreviousPage()" @click="table.setPageIndex(0)"/>
				<PaginationPrev class="border-0 rounded-full hover:bg-indigo-400"
					:class="[table.getCanPreviousPage() ? 'bg-indigo-300' : 'bg-indigo-100']"
					:disabled="!table.getCanPreviousPage()" @click="table.previousPage()"/>
				<template v-for="(item, index) in items">
					<PaginationListItem v-if="item.type === 'page'"
						:key="index"
						:value="item.value"
						class="border-0 rounded-full data-[selected=true]:bg-purple-400 bg-white hover:bg-gray-200"
						as-child>
						<Button class="w-10 h-10 p-0 "
							:variant="item.value === page ? 'default' : 'outline'"
							@click="table.setPageIndex(index)">
							{{ item.value }}
						</Button>
					</PaginationListItem>
					<PaginationEllipsis v-else
						:key="item.type"
						:index="index"/>
				</template>
				<PaginationNext class="border-0 rounded-full hover:bg-indigo-400"
					:class="[table.getCanNextPage() ? 'bg-indigo-300' : 'bg-indigo-100']"
					:disabled="!table.getCanNextPage()" @click="table.nextPage()"/>
				<PaginationLast class="border-0 rounded-full hover:bg-indigo-400"
					:class="[table.getCanNextPage() ? 'bg-indigo-300' : 'bg-indigo-100']"
					:disabled="!table.getCanNextPage()" @click="table.setPageIndex(table.getPageCount() - 1)"/>
			</PaginationList>
		</Pagination>
		<customer-edit-customer-modal
			v-model:open="openModal"
			v-model:customer="customerModal"
		></customer-edit-customer-modal>
	</div>
</template>
