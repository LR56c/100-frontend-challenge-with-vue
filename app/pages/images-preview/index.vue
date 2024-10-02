<script setup
	lang="ts">
import ImagesPreviewListView
	from '~/components/images-preview/ImagesPreviewListView.vue'
import ImagesPreviewSliderView
	from '~/components/images-preview/ImagesPreviewSliderView.vue'

const names = [
	'Atardecer',
	'Encantado',
	'Ciudad',
	'Montaña Nevada',
	'Puente',
	'Campo de Flores',
	'Cascada Secreta',
	'Desierto',
	'Aurora Boreal',
	'Lago'
]

function randomNameGeneration( names: string[], minQuantityGenerate: number,
	maxQuantityGenerate: number ): string {
	const randomNames: string[] = []
	const randomQuantity        = Math.floor(
			Math.random() * ( maxQuantityGenerate - minQuantityGenerate + 1 ) ) +
		minQuantityGenerate
	for ( let i = 0; i < randomQuantity; i++ ) {
		const length                 = Math.floor(
				Math.random() * ( maxQuantityGenerate - minQuantityGenerate + 1 ) ) +
			minQuantityGenerate
		const ajustedLength          = Math.min( length, names.length )
		const shuffleNames           = names.slice()
		                                    .sort( () => 0.5 - Math.random() )
		const elementosSeleccionados = shuffleNames.slice( 0, ajustedLength )
		const nameGenerated          = elementosSeleccionados.join( ' ' )
		randomNames.push( nameGenerated )
	}
	return randomNames.join( ' ' )
}

export interface ImagePreviewProps {
	name: string
	img: string
}

const arr = [ 1, 2, 3, 4, 5, 6, 7 ]

const imagesRef = ref<ImagePreviewProps[]>( [] )

const MAX = 10
for ( let i = 0; i < MAX; i++ ) {
	const n = arr[i % arr.length]
	imagesRef.value.push( {
		name: randomNameGeneration( names, 1, 3 ),
		img : `land${ n }.jpg`
	} )
}

const icons = [ 'mdi-view-grid-outline', 'material-symbols-list-rounded',
	'lucide-gallery-thumbnails' ]

const modeRef = ref( 2 )
</script>


<template>
	<div class="bg-gray-200 w-screen h-screen flex flex-col justify-center items-center">
		<div class="max-w-[560px] w-full rounded-t-2xl shadow-lg bg-zinc-700 text-white flex justify-between py-2 px-4">
			<div>Images</div>
			<div class="flex items-center pt-1 gap-1">
				<template v-for="(icon, i) in icons">
					<button
						class="focus:outline-none"
						@click="modeRef = i">
						<Icon
							:class="modeRef === i ? 'text-white' : 'text-gray-500'"
							:name="icon"/>
					</button>
					<Icon v-if="i !== icons.length - 1"
						class="text-gray-500"
						name="fluent-divider-short-20-regular"/>
				</template>
			</div>
		</div>
		<div class="max-w-[560px] flex flex-wrap max-h-96 bg-zinc-900 h-full w-full rounded-b-2xl shadow-lg">
			<ImagesPreviewWrapView v-if="modeRef === 0"
				v-model="imagesRef"></ImagesPreviewWrapView>
			<ImagesPreviewListView v-else-if="modeRef === 1"
				v-model="imagesRef"></ImagesPreviewListView>
			<ImagesPreviewSliderView v-else-if="modeRef === 2"
				v-model="imagesRef"></ImagesPreviewSliderView>
		</div>
	</div>
</template>

<style scoped>

</style>
