<template>
	<div class="container pattern-with-svg" id="container">
		<MGreetings />
	</div>
</template>

<script>
	import MGreetings from './MGreetings.vue'
	export default {
		name: 'MBody',
		components: {
			MGreetings
		}
	}
</script>

<style lang="scss">
#container {
	margin-top: 10px;
	padding: 0px 0px 0px 0px;
	width: 103.4%;
}
</style>
