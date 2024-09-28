<script setup
	lang="ts">

import AddToBag, { type Sizes } from '~/components/AddToBag.vue'
</script>

<template>
<div>
	<add-to-bag
		title="Custom Fit Polo Bear Oxford Shirt"
		brand="POLO RALPH"
		sub-title="Blue polo with a classic cut. Made of smooth and soft cotton"
		:discount="20"
		:total="100"
		:sizes="new Set<Sizes>(['S', 'M', 'L', 'XL', 'XXL'])"
		:price="120"
		:images="['https://placehold.co/70x100', 'https://placehold.co/70x100', 'https://placehold.co/70x100']"
	></add-to-bag>
</div>
</template>

<style scoped>

</style>
