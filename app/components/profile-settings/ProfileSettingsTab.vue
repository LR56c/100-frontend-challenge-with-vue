<script setup
	lang="ts">

import ProfileSettingsButton
	from '~/components/profile-settings/ProfileSettingsButton.vue'
import ProfileSettingsInput
	from '~/components/profile-settings/ProfileSettingsInput.vue'
import ProfileSettingsTextArea
	from '~/components/profile-settings/ProfileSettingsTextArea.vue'
import { useProfileSettings } from '~/components/profile-settings/useProfileSettings'
import MyCheckbox from '~/components/shared/MyCheckbox.vue'
const store   = useProfileSettings()
const profile = computed( () => store.profile )

const avatar    = ref<string | undefined>( profile.value.avatar )
const firstName = ref<string>( profile.value.firstName )
const lastName  = ref<string>( profile.value.lastName )
const email     = ref<string>( profile.value.email )
const check     = ref<boolean>( profile.value.private )
const bio       = ref<string | undefined>(
	profile.value.bio.length ? profile.value.bio : undefined )

const { files, open, reset, onCancel, onChange } = useFileDialog( {
	accept  : 'image/*',
	multiple: false
} )

onChange( ( files ) => {
	avatar.value = URL.createObjectURL( files[0] )
} )

const saveHandler = () => {
	store.save( {
		avatar   : avatar.value,
		firstName: firstName.value,
		lastName : lastName.value,
		email    : email.value,
		private  : check.value,
		bio      : bio.value ?? ''
	} )
}

const cancelHandler = () => {
	firstName.value = profile.value.firstName
	lastName.value  = profile.value.lastName
	email.value     = profile.value.email
	check.value     = profile.value.private
	bio.value       = profile.value.bio.length ? profile.value.bio : undefined
	avatar.value    = profile.value.avatar
}

const deleteAvatar = () => {
	avatar.value = undefined
}
</script>

<template>
	<div class="flex flex-col gap-4">
		<span class="font-semibold text-black dark:text-white">User details</span>
		<span class="text-sm font-semibold text-gray-400">Share your profile information with others</span>
		<div class="flex gap-2">
			<div class="flex items-center justify-center relative">
				<div class="absolute bottom-0 right-0 w-6 h-6 bg-gray-200 flex items-center justify-center rounded-full">
					<Icon class="text-gray-400"
						name="material-symbols-edit"/>
				</div>
				<img v-if="avatar"
					class="object-cover object-center w-20 h-20 rounded-full"
					:src="avatar"/>
				<div v-else
					class="w-20 h-20 rounded-full bg-gray-400"></div>
			</div>
			<div class="flex flex-col gap-2 items-center justify-center">
				<profile-settings-button @click="open"
					class="dark:bg-indigo-400"
					label="Change picture"
					type="normal"></profile-settings-button>
				<profile-settings-button @click="deleteAvatar"
					label="Delete picture"
					type="outline"></profile-settings-button>
			</div>
		</div>
		<div class="flex gap-2">
			<profile-settings-input v-model="firstName"
				label="First Name"></profile-settings-input>
			<profile-settings-input v-model="lastName"
				label="Last Name"></profile-settings-input>
		</div>
		<profile-settings-input v-model="email"
			class="w-full"
			label="Email"></profile-settings-input>
		<div class="flex gap-2 items-center">
			<my-checkbox v-model="check" label-class="dark:text-white text-black text-sm" label="Set as private"></my-checkbox>
		</div>
		<profile-settings-text-area v-model="bio"
			:max="200"
			label="Bio"
			placeholder="Share some informations about you"></profile-settings-text-area>
		<hr class="border border-black dark:border-white"/>
		<div class="flex justify-between">
			<div></div>
			<div class="flex gap-2">
				<profile-settings-button @click="cancelHandler"
					class="py-2 font-semibold bg-gray-300 text-gray-700"
					label="Cancel"
					type="normal"></profile-settings-button>
				<profile-settings-button @click="saveHandler"
					class="px-12 py-2 font-semibold dark:bg-indigo-400"
					label="Save"
					type="normal"></profile-settings-button>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>