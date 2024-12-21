<script setup
	lang="ts">
import { useMyDevices } from '~/components/my-devices/useMyDevices'

const store = useMyDevices()
const { devices, currentDevice} = storeToRefs( store )
</script>

<template>
	<div class="bg-[#d3b8e3] w-screen h-screen flex flex-col items-center justify-center">
		<div class="max-w-md w-full bg-white rounded-2xl h-96 flex flex-col p-4 gap-4 shadow-lg">
			<span class="text-lg font-bold">My Devices</span>
			<my-devices-card
				v-for="device in devices"
				:key="device.id"
				:device="device"
				:is-current="device.id === currentDevice?.id"
				@connect="store.connectDevice( device.id )"
				@disconnect="store.disconnectDevice( device.id )"
			></my-devices-card>
			<my-devices-button class="bg-purple-500 opacity-50 text-white cursor-not-allowed" icon="material-symbols-add-rounded" label="Add new device"></my-devices-button>
		</div>
	</div>
</template>

<style scoped>

</style>