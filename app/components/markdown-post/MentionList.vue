<template>
	<div class="dropdown-menu rounded-2xl bg-white shadow-lg flex flex-col gap-1 p-2">
		<template v-if="items.length">
			<button
				@mouseover="prioritizeHover(index)"
				class="flex gap-1 w-full px-2 rounded items-center bg-transparent"
				v-for="(item, index) in items"
				:class="{ 'is-selected bg-blue-100': index === selectedIndex }"
				:key="index"
				@click="selectItem(index)"
			>
				<div class="relative w-4 h-4">
					<div v-if="item.online" class="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
					<img class="w-4 h-4 rounded-full object-center object-cover"
						:src="item.avatar"/>
				</div>
				<span>{{ item.name }}</span>
			</button>
		</template>
		<div class="item"
			v-else>
			No result
		</div>
	</div>
</template>

<script>
export default {
	props: {
		items  : {
			type    : Array,
			required: true
		},
		command: {
			type    : Function,
			required: true
		}
	},
	data() {
		return {
			selectedIndex: 0
		}
	},
	watch  : {
		items() {
			this.selectedIndex = 0
		}
	},
	methods: {
		prioritizeHover( index ) {
			this.selectedIndex = index
		},
		onKeyDown( { event } ) {
			console.log( 'keydown', event )
			if ( event.key === 'ArrowUp' ) {
				this.upHandler()
				return true
			}
			if ( event.key === 'ArrowDown' ) {
				this.downHandler()
				return true
			}
			if ( event.key === 'Enter' ) {
				this.enterHandler()
				return true
			}

			return false
		},
		upHandler() {
			console.log( 'up' )
			this.selectedIndex =
				( ( this.selectedIndex + this.items.length ) - 1 ) % this.items.length
		},
		downHandler() {
			this.selectedIndex = ( this.selectedIndex + 1 ) % this.items.length
		},
		enterHandler() {
			this.selectItem( this.selectedIndex )
		},
		selectItem( index ) {
			const item = this.items[index]

			if ( item ) {
				this.command( { id: item } )
			}
		}
	}
}
</script>

<style lang="css">
</style>
