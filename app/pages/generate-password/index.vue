<script setup
	lang="ts">
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'


import SliderField from '~/components/generate-password/SliderField.vue'
import SwitchField from '~/components/generate-password/SwitchField.vue'

interface OptionSwitch {
	label: string,
	type: string,
	value: boolean
}

const passwordRef = ref( '' )

const rangeRef = ref( 12 )

const passwordOptionsSwitches = ref<OptionSwitch[]>(
	[
		{ type: 'uppercase', label: 'Include uppercase letters', value: false },
		{ type: 'lowercase', label: 'Include lowercase letters', value: false },
		{ type: 'numbers', label: 'Include numbers', value: false },
		{ type: 'symbols', label: 'Include symbols', value: false }
	]
)

const typesPasswords = new Map<string, string>(
	[
		[ 'uppercase', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ],
		[ 'lowercase', 'abcdefghijklmnopqrstuvwxyz' ],
		[ 'numbers', '0123456789' ],
		[ 'symbols', '!@#$%^&*()_+' ]
	]
)

const onGeneratePassword = () => {
	const selectedTypes: string[] = []

	for ( const option of passwordOptionsSwitches.value ) {
		if ( option.value && typesPasswords.has( option.type ) ) {
			const type = typesPasswords.get( option.type )!
			selectedTypes.push( type )
		}
	}

	if ( selectedTypes.length === 0 ) {
		toast( 'Toggle a settings, please!', {
			'theme'                : 'dark',
			'type'                 : 'default',
			'position'             : 'bottom-center',
			'pauseOnHover'         : false,
			'pauseOnFocusLoss'     : false,
			'dangerouslyHTMLString': true
		} )
		return
	}

	let passwordResult = ''

	for ( const entryType of selectedTypes ) {
		passwordResult += pickRandomChar( entryType )
	}

	const characterRemains = rangeRef.value - selectedTypes.length

	for ( let i = 0; i < characterRemains; i++ ) {
		const typeProb = Math.floor( Math.random() * selectedTypes.length )
		passwordResult += pickRandomChar( selectedTypes[typeProb]! )
	}
	console.log(passwordResult)
	passwordRef.value = shuffleString( passwordResult )
	console.log(passwordRef.value)
	// passwordRef.value = passwordResult
}

const shuffleString = ( s: string ): string => {
	return s.split( '' ).sort( () => Math.random() - 0.5 ).join( '' )
}

const pickRandomChar = ( type: string ) => {
	return type.charAt( Math.floor( Math.random() * type.length ) )
}

const { copy, isSupported } = useClipboard( {
	source: passwordRef
} )

const copiedClick = () => {
	if ( passwordRef.value === '' ) {
		toast( 'Generate password first!', {
			'theme'                : 'dark',
			'type'                 : 'default',
			'position'             : 'bottom-center',
			'pauseOnHover'         : false,
			'pauseOnFocusLoss'     : false,
			'dangerouslyHTMLString': true
		} )
	}
	else {
		copy( passwordRef.value )
		toast( 'Copied to Clipboard!', {
			'theme'                : 'dark',
			'type'                 : 'default',
			'position'             : 'bottom-center',
			'pauseOnHover'         : false,
			'pauseOnFocusLoss'     : false,
			'dangerouslyHTMLString': true
		} )
	}
}
</script>

<template>
	<div class="w-screen h-screen flex items-center justify-center">
		<div class="max-w-sm w-full bg-black/95 rounded-2xl shadow-lg text-white p-4 flex flex-col gap-4">
			<div class="text-lg">Generate password</div>
			<div class="flex flex-col gap-2">
				<label class="uppercase">Generated password</label>
				<div class="py-3 px-4 flex items-center justify-between bg-purple-950/50 rounded-2xl">
					<span>{{ passwordRef }}</span>
					<div class="flex items-center gap-2">
						<!--							@click="copy(passwordRef)"-->
						<Icon size="18"
							v-if="isSupported"
							@click="copiedClick"
							class="bg-fuchsia-500"
							name="mdi-content-copy"/>
						<Icon size="18"
							@click="onGeneratePassword"
							class="bg-fuchsia-500"
							name="mdi-reload"/>
					</div>
				</div>
			</div>
			<SliderField
				:max-value="32"
				:min-value="12"
				v-model.number="rangeRef"></SliderField>
			<div class="flex flex-col gap-2">
				<label class="uppercase">Settings</label>
				<template v-for="option in passwordOptionsSwitches">
					<SwitchField
						v-model="option.value"
						:label="option.label"></SwitchField>
				</template>
			</div>
			<div class="h-full"></div>
			<button
				type="button"
				@click="onGeneratePassword"
				class="bg-fuchsia-500 rounded-2xl w-full py-2">Generate Password
			</button>
		</div>
	</div>
</template>

<style scoped>

</style>
