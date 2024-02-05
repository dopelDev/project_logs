<template>
	<div class="container is-fluid pattern-with-svg">
		<div class="hero is-fullheight">
			<Greetings />
		</div>
	</div>
</template>

<script>
	import Greetings from './Greetings.vue'
	export default {
		name: 'Body',
		components: {
			Greetings
		},
	}
</script>

<style>

</style>
