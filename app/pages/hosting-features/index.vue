<script setup
	lang="ts">
import HostingFeaturesCard from '~/components/hosting-features/HostingFeaturesCard.vue'
</script>

<template>
	<div class="bg-gray-100 w-screen h-screen flex flex-col items-center justify-center gap-8">
		<div class="flex flex-col gap-4 items-center">
		<div class="text-sm text-purple-800 font-bold">Features</div>
		<div class="font-bold text-4xl">Our Web Hosting Features</div>
		</div>
		<div class="grid grid-cols-3 gap-x-12 gap-y-8">
		<hosting-features-card
			icon="material-symbols-light-shopping-cart"
			title="E-commerce Features"
			description="Support for online transactions,shopping carts, and secure payment gateways if you plan to run an online store."
			link="https://www.google.com/"></hosting-features-card>
		<hosting-features-card
			icon="clarity-hard-disk-line"
			title="Disk Space"
			description="The amount of storage space provided for your website files, emails, databases, etc."
			link="https://www.google.com/"></hosting-features-card>
		<hosting-features-card
			icon="uil-server-alt"
			title="Server Location"
			description="The physical location of the server hosting your website, which can affect page load times and SEO."
			link="https://www.google.com/"></hosting-features-card>
		<hosting-features-card
			icon="streamline-mouse"
			title="One-Click Installers"
			description="Tools like Softaculous or Fantastico that simplify the installation of popular web applications like WordPress, Joomla, or Drupal."
			link="https://www.google.com/"></hosting-features-card>
		<hosting-features-card
			icon="material-symbols-description-rounded"
			title="Script Support"
			description="Support for programming languages and scripts such as PHP Python, Perl, and Ruby on Rails."
			link="https://www.google.com/"></hosting-features-card>
		<hosting-features-card
			icon="mingcute-web-line"
			title="Domain Hosting"
			description="The ability to host one or more domain names on the same hosting account."
			link="https://www.google.com/"></hosting-features-card>
	</div>
	</div>
</template>

<style scoped>

</style>
