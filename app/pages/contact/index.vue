<script setup
	lang="ts">

</script>

<template>
	<div class="relative w-full h-screen flex flex-col bg-gradient-to-b from-indigo-700 to-fuchsia-900">
		<div class="absolute mix-blend-screen mask-gradient w-96 h-[710px] bg-cover opacity-50 bottom-0 left-0 lg:left-[150px] bg-no-repeat bg-street-pattern"></div>
		<div class="absolute left-[116px] lg:left-[265px] top-[500px] w-60 z-10 bg-pink-600 p-4 rounded-lg">
			<div class="text-sm font-bold text-white">Windler, Lockman and McClure
			</div>
			<div class="text-sm text-white">3629 N Cole Rd, Boise, Illinois</div>
		</div>
		<div class="absolute left-[220px] lg:left-[370px] top-[550px] z-0 w-8 h-8 bg-pink-600 rotate-45"></div>
		<div class="absolute left-[230px] lg:left-[380px] top-[620px] w-3 h-3 bg-pink-500 rounded-full">
			<div class="absolute -left-1 -top-1 w-5 h-5 bg-pink-500 rounded-full opacity-80 animate-ping"></div>
		</div>
		<div class="basis-[25%]"></div>
		<div class="w-full h-full flex">
			<div class="basis-1/2 flex flex-col px-12 gap-4">
				<div class="text-3xl font-bold text-white">Contact Us</div>
				<div class="text-white">Get in touch with us! Whether you have
					questions, feedback, or just want to say hello, we're here for you
				</div>

			</div>
			<div class="basis-1/2 flex flex-col  items-center">
				<div class="p-4 max-w-md w-full bg-white rounded-xl shadow-lg space-y-4 z-10">
					<div class="font-bold">Send us a Message</div>
					<div>
						<label for="name"
							class="block mb-2 text-sm font-medium text-gray-900 sr-only">Name</label>
						<input type="text"
							id="name"
							placeholder="Name"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							required/>
					</div>
					<div>
						<label for="email"
							class="block mb-2 text-sm font-medium text-gray-900 sr-only">Email</label>
						<input type="email"
							id="email"
							placeholder="Email"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							required/>
					</div>
					<div>
						<label for="phone"
							class="block mb-2 text-sm font-medium text-gray-900 sr-only">Phone</label>
						<input type="text"
							id="phone"
							placeholder="Phone"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							required/>
					</div>
					<div>Preferred contact method of communication</div>
					<div class="flex gap-4">
						<div class="flex items-center justify-center">
							<input id="default-radio-1"
								type="radio"
								value=""
								name="default-radio"
								class="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500">
							<label for="default-radio-1"
								class="ms-2 text-sm font-medium text-gray-900">Email</label>
						</div>
						<div class="flex items-center justify-center">
							<input checked
								id="default-radio-2"
								type="radio"
								value=""
								name="default-radio"
								class="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500">
							<label for="default-radio-2"
								class="ms-2 text-sm font-medium text-gray-900">Phone</label>
						</div>
					</div>
					<label for="message"
						class="block mb-2 text-sm font-medium text-gray-900 sr-only">Your
						message</label>
					<textarea id="message"
						rows="4"
						class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
						placeholder="Message"></textarea>
					<div class="h-12"></div>
					<button class="bg-pink-600 rounded-full w-full text-white py-2">
						Submit
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.mask-gradient {
	mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 50%);
}
</style>
