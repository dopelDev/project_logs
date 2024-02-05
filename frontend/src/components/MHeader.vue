<template>
	<div class="container">
		<div class="columns is-mobile color1" v-show="!menuActive">
			<div class="column is-1">
				<!-- Botón para abrir el menú -->
				<section class="section">
					<figure class="image is-48x48">
						<img :src="logoSrc"
									@click="toggleMenu"
									class="menu-button is-rounded"
									alt="Menu">
					</figure>
				</section>
			</div>
			<div class="column is-9" id="fix-padding">
				<div class="box hover-color-change menu-button" @click="toggleMenu">
					<h1 class="title is-5 has-text-centered text-color3">Dopeldev</h1>
				</div>
			</div>
		</div>
	</div>
	<!-- Menú lateral -->
	<div class="menu-container" v-bind:class="{ 'is-active': menuActive }">
		<!-- Contenido del menú -->
		<!-- main tile -->
		<div class="columns color4">
			<!-- First Widget -->
			<div class="column is-mobile">
				<section class="hero is-small">
					<div class="hero-body">
						<h1 class="icon-custom has-text-centered text-color1">󰙃</h1>
						<h1 class="title is-6 has-text-centered text-color1">About</h1>
						<div class="content is-small has-text-centered text-color3">Para definir colores personalizados para el texto en SASS y utilizarlos en tu proyecto Vue</div>
					</div>
				</section>
			</div>
			<!-- Second Widget -->
			<div class="column auto">
				<section class="hero is-small">
					<div class="hero-body">
						<h1 class="icon-custom has-text-centered text-color1"></h1>
						<p class="title is-6 has-text-centered text-color1">Projects</p>
						<p class="content is-small has-text-centered text-color3">Para definir colores personalizados para el texto en SASS y utilizarlos en tu proyecto Vue</p>
					</div>
				</section>
			</div>
			<!-- Third Widget -->
			<div class="column auto">
				<section class="hero is-small">
					<div class="hero-body">
						<h1 class="icon-custom has-text-centered text-color1">󰶍</h1>
						<p class="title is-6 has-text-centered text-color1">Contact</p>
						<p class="content is-small has-text-centered text-color3">Para definir colores personalizados para el texto en SASS y utilizarlos en tu proyecto Vue</p>
					</div>
				</section>
			</div>
			<!-- Close button -->
			<div class="column auto">
				<section class="section hover-color-change menu-button" @click="toggleMenu">
					<h1 class="title is-5 has-text-centered text-color3">Close 󰅘</h1>
				</section>
			</div>
		</div>
		<!-- Botón para cerrar el menú -->
	</div>
</template>

<script>
	import Mylogo from '@/assets/images/logo.png';
	export default {
		name: 'MHeader',
		data() {
			return {
				menuActive: false,
				logoSrc: Mylogo,
			};
		},
		methods: {
			toggleMenu() {
				this.menuActive = !this.menuActive;
			}
		}
	}
</script>

<style lang="scss">
#fix-padding {
	padding: 15px 0;
	margin-left: -6%;
}
.box {
  margin-left: 100px;
  margin-top: 40px;
}
* {
	font-family: 'MartianMonoNerdFont', sans-serif
}
</style>
