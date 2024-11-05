<script setup
	lang="ts">
import { Button } from '@/components/ui/button'
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
import BillingPageIconButton
	from '~/components/billing-page/BillingPageIconButton.vue'
import {
	type BillingHistory,
	useBillingPageHistory
} from '~/components/billing-page/useBillingPageHistory'
import { valueUpdater } from '~/lib/utils'

const formatter = new Intl.NumberFormat( 'es-US', {
	style                : 'currency',
	currency             : 'USD',
	minimumFractionDigits: 2
} )

const store                                      = useBillingPageHistory()
const rowSelection                               = ref( {} )
const columns: ColumnDef<BillingHistory>[]       = [
	{
		accessorKey: 'date',
		header     : ( { column } ) => {
			return h( Button, {
				variant: 'ghost',
				onClick: () => column.toggleSorting( column.getIsSorted() === 'asc' )
			}, () => [ 'Date', h( ArrowUpDown, { class: 'ml-2 h-4 w-4' } ) ] )
		},
		cell       : ( { row } ) => {
			const date = useDateFormat( row.getValue( 'date' ),
				'DD/MM/YYYY' ).value
			return h( 'div', { class: 'font-semibold' }, date )
		}
	},
	{
		accessorKey: 'detail',
		header     : 'DETAIL',
		cell       : ( { row } ) => h( 'div', { class: 'font-semibold' },
			row.getValue( 'detail' ) )
	},
	{
		accessorKey: 'amount',
		header     : 'AMOUNT',
		cell       : ( { row } ) => {
			const value = row.getValue( 'amount' )

			return h( 'div',
				{ class: 'font-semibold text-indigo-700' }, formatter.format( value ) )
		}
	},
	{
		id    : 'actions',
		header: 'OPERATION',
		cell  : ( { row } ) => {
			return h( 'div', {
				class: 'flex gap-2'
			},[
				h(BillingPageIconButton, {
					icon: 'ic-round-remove-red-eye',
				}),
				h(BillingPageIconButton, {
					icon: 'ic-round-download',
				}),
				h(BillingPageIconButton, {
					icon: 'material-symbols-mail-rounded',
				}),
			] )
		}
	}
]
const sorting      = ref<SortingState>( [] )
const data         = computed( () => Array.from( store.list ) )

const table     = useVueTable( {
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
const PAGE_SIZE = 2
table.setPageSize( PAGE_SIZE )
</script>

<template>
	<div class="w-full gap-8 flex flex-col justify-between">
			<Table>
				<TableHeader>
					<TableRow class="border-b-transparent bg-zinc-200 hover:bg-zinc-200"
						v-for="headerGroup in table.getHeaderGroups()"
						:key="headerGroup.id">
						<TableHead v-for="(header, i) in headerGroup.headers"
							:key="header.id"
							class="text-zinc-600 font-semibold">
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
								>
									<FlexRender :render="cell.column.columnDef.cell"
										:props="cell.getContext()"/>
								</TableCell>
							</TableRow>
							<div class="h-3"></div>
						</template>
					</template>
					<TableRow v-else>
						<TableCell :colspan="columns.length"
							class="h-24 text-center">
							No results
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		<Pagination v-slot="{ page }"
			:items-per-page="PAGE_SIZE"
			:total="data.length"
			:sibling-count="1"
			:default-page="1">
			<PaginationList v-slot="{ items }"
				class="flex items-center gap-1 justify-center">
				<PaginationFirst class="border-0 rounded-full hover:bg-indigo-400"
					:class="[table.getCanPreviousPage() ? 'bg-indigo-300' : 'bg-indigo-100']"
					:disabled="!table.getCanPreviousPage()"
					@click="table.setPageIndex(0)"/>
				<PaginationPrev class="border-0 rounded-full hover:bg-indigo-400"
					:class="[table.getCanPreviousPage() ? 'bg-indigo-300' : 'bg-indigo-100']"
					:disabled="!table.getCanPreviousPage()"
					@click="table.previousPage()"/>
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
					:disabled="!table.getCanNextPage()"
					@click="table.nextPage()"/>
				<PaginationLast class="border-0 rounded-full hover:bg-indigo-400"
					:class="[table.getCanNextPage() ? 'bg-indigo-300' : 'bg-indigo-100']"
					:disabled="!table.getCanNextPage()"
					@click="table.setPageIndex(table.getPageCount() - 1)"/>
			</PaginationList>
		</Pagination>
	</div>
</template>
