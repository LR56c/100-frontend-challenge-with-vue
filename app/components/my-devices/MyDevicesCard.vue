<script setup
	lang="ts">
import type { Device } from '~/components/my-devices/useMyDevices'

interface MyDevicesCardProps {
	device: Device
	isCurrent: boolean
}

const props = defineProps<MyDevicesCardProps>()

const emit = defineEmits<{
	connect: [ string ]
	disconnect: [ string ]
}>()

const connect = () => {
	if ( props.isCurrent ) {
		emit( 'disconnect', props.device.id )
	}
	else {
		emit( 'connect', props.device.id )
	}
}
</script>

<template>
	<div
		class="border border-gray-400 p-2 flex items-center gap-4 rounded-2xl justify-between">
		<nuxt-link :to="`/my-devices/${device.id}`"
			class="flex items-center gap-4"
			@click.stop>
			<nuxt-img class="object-center object-cover w-20 h-20"
				:src="device.image"/>
			<div class="flex flex-col">
				<span class="font-bold">{{ device.name }}</span>
				<span>{{ device.key }}</span>
				<div class="flex gap-1 items-center text-gray-400"
					v-if="isCurrent">
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
			</div>
		</nuxt-link>
		<my-devices-button :class="[isCurrent?'bg-black text-white':'bg-white border text-black']"
			@click="connect"
			class="basis-[30%]"
			:label="isCurrent ? 'Connected':'Connect'"></my-devices-button>
	</div>
</template>

<style scoped>

</style>