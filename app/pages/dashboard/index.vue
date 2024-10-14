<script setup
	lang="ts">

import DashboardNav from '~/components/dashboard/DashboardNav.vue'
import DashboardOverview from '~/components/dashboard/DashboardOverview.vue'
import DashboardSideBar from '~/components/dashboard/DashboardSideBar.vue'
</script>

<template>
	<div class="bg-gray-950 w-screen h-screen flex items-center justify-center ">
		<div class="flex items-start justify-center gap-8">
			<dashboard-side-bar></dashboard-side-bar>
			<div class="flex flex-col gap-8">
				<dashboard-nav></dashboard-nav>
				<dashboard-overview></dashboard-overview>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
