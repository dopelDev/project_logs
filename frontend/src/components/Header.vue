<template>
	<div class="container">
		<nav class="columns color1" v-show="!menuActive">
			<div class="column is-1">
				<!-- Botón para abrir el menú -->
				<section class="section">
					<figure class="image is-128x128">
						<img src=""
								 @click="toggleMenu"
								 class="menu-button is-rounded"
								 alt="Menu">
					</figure>
				</section>
			</div>
			<div class="column is-9">
				<section class="section">
					<div class="box hover-color-change menu-button" @click="toggleMenu">
						<h1 class="title is-1 MartianMonoNerdFont has-text-centered text-color3">Dopeldev</h1>
					</div>
				</section>
			</div>
		</nav>
		<!-- Menú lateral -->
		<div class="level-right menu-container"
				 v-bind:class="{ 'is-active': menuActive }">
			<!-- Contenido del menú -->
			<div class="container">
				<!-- main tile -->
				<div class="columns is-desktop color4">
					<!-- First Widget -->
					<div class="column">
						<section class="section">
							<h1 class="icon-large MartianMonoNerdFont has-text-centered text-color1">󰙃</h1>
							<p class="title is-1 MartianMonoNerdFont has-text-centered text-color1">About</p>
							<p class="subtitle is-3 MartianMonoNerdFont has-text-centered text-color3">Para definir colores personalizados para el texto en SASS y utilizarlos en tu proyecto Vue</p>
						</section>
					</div>
					<!-- Second Widget -->
					<div class="column">
						<section class="section">
							<h1 class="icon-large MartianMonoNerdFont has-text-centered text-color1"></h1>
							<p class="title is-1 MartianMonoNerdFont has-text-centered text-color1">Projects</p>
							<p class="subtitle is-3 MartianMonoNerdFont has-text-centered text-color3">Para definir colores personalizados para el texto en SASS y utilizarlos en tu proyecto Vue</p>
						</section>
					</div>
					<!-- Third Widget -->
					<div class="column">
						<section class="section">
							<h1 class="icon-large MartianMonoNerdFont has-text-centered text-color1">󰶍</h1>
							<p class="title is-1 MartianMonoNerdFont has-text-centered text-color1">Contact</p>
							<p class="subtitle is-3 MartianMonoNerdFont has-text-centered text-color3">Para definir colores personalizados para el texto en SASS y utilizarlos en tu proyecto Vue</p>
						</section>
					</div>
					<!-- Close button -->
					<div class="column">
						<section class="section hover-color-change menu-button" @click="toggleMenu">
							<div class="hero">
								<h1 class="title is-1 MartianMonoNerdFont has-text-centered text-color3">Close 󰅘</h1>
							</div>
						</section>
					</div>
				</div>
				<!-- Botón para cerrar el menú -->
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {
				menuActive: false
			};
		},
		methods: {
			toggleMenu() {
				this.menuActive = !this.menuActive;
			}
		}
	}
</script>

<style>
</style>
