<script setup
	lang="ts">
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '~/components/ui/alert-dialog'

const sizes = [ 'Bytes', 'KB', 'MB', 'GB', 'TB' ] as const

function formatBytes( bytes: number ): string {
	if ( bytes === 0 ) {
		return '0 Bytes'
	}
	const i     = Math.floor( Math.log( bytes ) / Math.log( 1024 ) )
	const value = bytes / Math.pow( 1024, i )
	return value.toFixed( 2 ) + ' ' + sizes[i]
}

type UploadStatusType = 'uploading' | 'done' | 'error'

export interface UploadImageFileProgressProps {
	file: File
}

const { file } = defineProps<UploadImageFileProgressProps>()

const getUrl = ( file: File ): string => {
	if ( file.type.startsWith( 'image/' ) ) {
		return URL.createObjectURL( file )
	}
	return '/land1.jpg'
}

const emit = defineEmits<{
	onCancel: [ string ],
	onDelete: [ string ],
}>()

const uploadProgress = ref( 0 )
const uploadStatus   = ref<UploadStatusType>( 'uploading' )

const { pause, resume, isActive } = useIntervalFn( () => {
	uploadProgress.value += 10
	if ( uploadProgress.value >= 100 ) {
		uploadStatus.value = 'done'
		pause()
	}
}, 500, { immediate: true, immediateCallback: true } )

const onDelete = () => {
	emit( 'onDelete', file.name )
}

const onCancel = () => {
	emit( 'onCancel', file.name )
}

</script>

<template>
	<div class="flex border-2 border-gray-300 rounded-2xl p-2 gap-2">
		<img class="w-20 h-20 rounded-2xl object-cover object-center"
			:src="getUrl(file)"/>
		<div class="flex flex-col w-full gap-2 justify-between">
			<div class="flex justify-between items-center">
				<div class="flex flex-col">
					<div>{{ file.name }}</div>
					<div class="text-gray-600 text-sm">{{
							formatBytes( file.size )
						}}
					</div>
				</div>
				<div class="flex gap-2">
					<template v-if="uploadStatus === 'done'">
						<button class="rounded-2xl w-5 h-5 bg-green-200 flex items-center justify-center">
							<Icon class="text-green-400"
								name="material-symbols-check"/>
						</button>
						<AlertDialog>
							<AlertDialogTrigger>
								<button class="rounded-2xl w-5 h-5 bg-red-200 flex items-center justify-center">
									<Icon class="text-red-700"
										name="material-symbols-delete-forever"/>
								</button>
							</AlertDialogTrigger>
							<AlertDialogContent class="border-0 bg-white rounded-2xl max-w-xs">
								<AlertDialogHeader>
									<AlertDialogTitle>Are you sure you want to delete uploaded
										picture?
									</AlertDialogTitle>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel class="rounded-2xl">Cancel
									</AlertDialogCancel>
									<AlertDialogAction @click="onDelete"
										class="bg-red-200 rounded-2xl">
										Delete
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</template>
					<template v-if="uploadStatus === 'uploading'">
						<button v-if="isActive" @click="pause"
							class="rounded-2xl w-5 h-5 bg-gray-200 flex items-center justify-center">
							<Icon name="material-symbols-light-pause"/>
						</button>
						<button v-if="!isActive" @click="resume"
							class="rounded-2xl w-5 h-5 bg-blue-200 flex items-center justify-center">
							<Icon name="material-symbols-light-pause"/>
						</button>
						<AlertDialog>
							<AlertDialogTrigger>
								<button class="rounded-2xl w-5 h-5 bg-red-200 flex items-center justify-center">
									<Icon name="material-symbols-close"/>
								</button>
							</AlertDialogTrigger>
							<AlertDialogContent class="border-0 bg-white rounded-2xl max-w-xs">
								<AlertDialogHeader>
									<AlertDialogTitle>Are you sure you want to cancel uploaded
										picture?
									</AlertDialogTitle>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel class="rounded-2xl">Hold
									</AlertDialogCancel>
									<AlertDialogAction @click="onCancel"
										class="bg-red-200 rounded-2xl">
										Cancel
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</template>
				</div>
			</div>
			<div class="flex w-full justify-between items-center gap-2">
				<div class="w-full bg-gray-200 rounded-full h-2.5">
					<div class="bg-indigo-800 h-2.5 rounded-full transition-all"
						:style="{
							width: `${uploadProgress}%`
						}"></div>
				</div>
				<div class="text-sm text-gray-500">{{ uploadProgress }}%</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
