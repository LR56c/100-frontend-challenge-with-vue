<script setup
	lang="ts">
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table'
import {
	createColumnHelper,
	FlexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type SortingState,
	useVueTable
} from '@tanstack/vue-table'
import { ArrowUpDown } from 'lucide-vue-next'
import type {
	Invoice,
	InvoiceStatus
} from '~/components/invoices/useInvoices'
import { Button } from '~/components/ui/button'
import { Checkbox } from '~/components/ui/checkbox'
import { valueUpdater } from '~/lib/utils'

const formatter = new Intl.NumberFormat( 'es-US', {
	style                : 'currency',
	currency             : 'USD',
	minimumFractionDigits: 2
} )

interface InvoiceTableProps {
	invoices: Map<string, Invoice>
}

const props = defineProps<InvoiceTableProps>()

const columnHelper = createColumnHelper<Invoice>()

const checkboxClass = 'data-[state=checked]:bg-blue-700 data-[state=checked]:text-white rounded-2xl border-black'
const columns       = [
	columnHelper.display( {
		id    : 'select',
		header: ( { table } ) => h( Checkbox, {
			'checked'         : table.getIsAllPageRowsSelected(),
			'onUpdate:checked': value => table.toggleAllPageRowsSelected( !!value ),
			'ariaLabel'       : 'Select all',
			'class'           : checkboxClass
		} ),
		cell  : ( { row } ) => h( Checkbox, {
			'checked'         : row.getIsSelected(),
			'onUpdate:checked': value => row.toggleSelected( !!value ),
			'ariaLabel'       : 'Select row',
			'class'           : checkboxClass
		} )
	} ),
	columnHelper.accessor( 'title', {
		header: () => h( 'div', { class: '' }, 'Invoice' ),
		cell  : ( { row } ) => {
			const rowValue = row.getValue( 'title' )
			return h( 'div', { class: 'text-sm font-medium before:content-["#"]' },
				rowValue  )
		}
	} ),
	columnHelper.accessor( 'clientName', {
		header: () => h( 'div', { class: '' }, 'Client' ),
		cell  : ( { row } ) => {
			const rowValue = row.getValue( 'clientName' )
			return h( 'div', { class: 'text-sm' }, rowValue  )
		}
	} ),
	columnHelper.accessor( 'amount', {
		header: ({column}) => h( Button, {
			variant: 'ghost',
			onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
			class: '' },
			() => [h(ArrowUpDown, { class: 'ml-2 h-4 w-4' }), 'Amount']),
		cell  : ( { row } ) => {
			const rowValue = row.getValue( 'amount' )
			return h( 'div', { class: 'text-sm font-medium' },
				formatter.format( rowValue  ) )
		}
	} ),
	columnHelper.accessor( 'status', {
		header: () => h( 'div', { class: '' }, 'Status' ),
		cell  : ( { row } ) => {
			const rowValue = row.getValue( 'status' ) as InvoiceStatus
			let classValue = ''
			switch ( rowValue ) {
				case 'outstanding':
					classValue = 'bg-orange-500'
					break
				case 'paid':
					classValue = 'bg-green-700'
					break
				case 'overdue':
					classValue = 'bg-red-600'
					break
			}
			return h( 'div',
				{ class: `w-fit capitalize rounded-2xl py-1 px-2 text-sm text-white ${ classValue }` },
				rowValue )
		}
	} ),
	columnHelper.accessor( 'date', {
		header: () => h( 'div', { class: '' }, 'Date' ),
		cell  : ( { row } ) => {
			const rowValue = row.getValue( 'date' ) as Date
			const date     = useDateFormat( rowValue, 'DD MMMM YYYY' )
			return h( 'div', { class: 'text-sm font-medium' }, date.value )
		}
	} )
]
const rowSelection  = ref( {} )
const sorting       = ref<SortingState>( [] )

const table = useVueTable( {
	get data() { return Array.from( props.invoices.values() ) },
	get columns() { return columns },
	getCoreRowModel      : getCoreRowModel(),
	getPaginationRowModel: getPaginationRowModel(),
	getSortedRowModel: getSortedRowModel(),
	onSortingChange      : updaterOrValue => valueUpdater( updaterOrValue,
		sorting ),
	onRowSelectionChange : updaterOrValue => valueUpdater( updaterOrValue,
		rowSelection ),
	state                : {
		get sorting() { return sorting.value },
		get rowSelection() { return rowSelection.value },
	}
} )
table.setPageSize( 3 )
</script>

<template>
	<div class="w-full h-full flex flex-col overflow-y-hidden">
	<Table>
		<TableHeader>
			<TableRow class="border-b-transparent"
				v-for="headerGroup in table.getHeaderGroups()"
				:key="headerGroup.id">
				<TableHead class="text-gray-400"
					v-for="header in headerGroup.headers"
					:key="header.id">
					<FlexRender
						v-if="!header.isPlaceholder"
						:render="header.column.columnDef.header"
						:props="header.getContext()"
					/>
				</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			<template v-if="table.getRowModel().rows?.length">
				<TableRow
					class="border-0 hover:bg-gray-100 rounded-full"
					v-for="row in table.getRowModel().rows"
					:key="row.id"
					:data-state="row.getIsSelected() ? 'selected' : undefined"
				>
					<TableCell
						v-for="cell in row.getVisibleCells()"
						:key="cell.id">
						<FlexRender :render="cell.column.columnDef.cell"
							:props="cell.getContext()"/>
					</TableCell>
				</TableRow>
			</template>
			<template v-else>
				<TableRow>
					<TableCell :colspan="columns.length"
						class="h-24 text-center">
						No results.
					</TableCell>
				</TableRow>
			</template>
		</TableBody>
	</Table>
	<div class="flex items-center justify-end space-x-2 py-2 px-4">
		<div class="flex-1 text-sm text-muted-foreground">
			{{ table.getFilteredSelectedRowModel().rows.length }} of
			{{ table.getFilteredRowModel().rows.length }} row(s) selected.
		</div>
		<div class="space-x-2">
			<Button
				class="rounded-2xl"
				variant="outline"
				size="sm"
				:disabled="!table.getCanPreviousPage()"
				@click="table.previousPage()"
			>
				Previous
			</Button>
			<Button
				class="rounded-2xl"
				variant="outline"
				size="sm"
				:disabled="!table.getCanNextPage()"
				@click="table.nextPage()"
			>
				Next
			</Button>
		</div>
	</div>
	</div>
</template>

<style scoped>

</style>
