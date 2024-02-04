<template>
	<div id="app">
		<Header v-if="isDesktop" />
		<MHeader v-else />
		<Body />
	</div>
</template>

<script>
	import { ref, onMounted, onUnmounted } from 'vue';
	import Header from './components/Header.vue';
	import MHeader from './components/MHeader.vue';
	import Body from './components/Body.vue';
	export default {
		name: 'App',
		components: {
			Header,
			MHeader,
			Body,
		},
		setup() {
			const isDesktop = ref(window.innerWidth > 800);
			const refreshSize = () => {
				isDesktop.value = window.innerWidth > 800;
			};
			onMounted(() => {
				window.addEventListener('resize', refreshSize);
			});
			onUnmounted(() => {
				window.removeEventListener('resize', refreshSize);
			});
			return { isDesktop };
		}
	};
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>

