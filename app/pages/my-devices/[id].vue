<script setup
	lang="ts">
import {
	type Pet,
	usePetFriends
} from '~/components/fur-friends/usePetFriends'
import MyDevicesButtonCentered
	from '~/components/my-devices/MyDevicesButtonCentered.vue'
import {
	type Device,
	useMyDevices
} from '~/components/my-devices/useMyDevices'

const route  = useRoute()
const router = useRouter()

const store = useMyDevices()

const device = ref<Device | undefined>()
watch( () => route.params.id, ( id ) => {
	device.value = store.getDevice( id )
	if ( !device.value ) {
		router.push( '/my-devices' )
	}
}, {
	immediate: true
} )

const isCurrent = computed( () => device.value?.id === store.currentDevice?.id )

const remove = () => {
	store.removeDevice( device.value!.id )
	router.push( '/my-devices' )
}

const disconnect = () => {
	store.disconnectDevice( device.value!.id )
}

const connect = () => {
	store.connectDevice( device.value!.id )
}

</script>

<template>
	<div class="bg-[#d3b8e3] w-screen h-screen flex flex-col items-center justify-center">
		<div v-if="device"
			class="max-w-md w-full bg-white rounded-2xl h-96 flex flex-col items-center p-4 gap-4 shadow-lg">
			<div class="flex items-center justify-between w-full">
				<nuxt-link to="/my-devices">
				<Icon name="material-symbols-arrow-back-rounded"/>
				</nuxt-link>
				<span class="font-semibold">{{ device.name }}</span>
				<my-devices-button-popup icon="bx-bxs-cog">
					<my-devices-button-centered @click="remove" icon="material-symbols-delete" label="Forget this device"></my-devices-button-centered>
					<my-devices-button-centered v-if="isCurrent" @click="disconnect" icon="material-symbols-close-rounded" label="Disconnect"></my-devices-button-centered>
					<my-devices-button-centered v-else @click="connect" icon="material-symbols-close-rounded" label="Connect"></my-devices-button-centered>
				</my-devices-button-popup>
			</div>
			<nuxt-img class="object-center object-cover w-20 h-20"
				:src="device.image"/>
			<div class="flex gap-1 items-center text-gray-400"
				v-if="device.id === store.currentDevice?.id">
				<span>Connected</span>
				<div v-if="device.battery"
					class="flex items-center gap-1">
					<span>-</span>
					<Icon name="openmoji-battery"/>
					<span>{{ device.battery }}%</span>
				</div>
			</div>
			<span class="text-gray-400"
				v-else>Not connected</span>
			<div class="flex flex-wrap w-full items-center justify-center gap-4">
				<my-devices-label-info
					icon="material-symbols-text-ad"
					title="Name"
					:label="device.name"
				></my-devices-label-info>
				<my-devices-label-info
					icon="flowbite-headphones-solid"
					title="Device Type"
					:label="device.type"
				></my-devices-label-info>
				<my-devices-label-info
					icon="bi-stack"
					title="Version"
					:label="device.version"
				></my-devices-label-info>
				<my-devices-label-info
					icon="mynaui-refresh"
					title="Updates"
					:label="device.update"
				></my-devices-label-info>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>