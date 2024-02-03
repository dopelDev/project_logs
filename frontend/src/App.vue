<template>
	<div id="app">
		<body>
			<header>
				<!-- Desktop -->
				<div class="container is-fluid color1" id="desktop">
					<div class="columns">
						<!--			<Logo">-->
						<div class="column is-2">
							<section class="hero is-small">
								<section class="hero-body">
									<a href="#">
										<figure class="image is-96x96 is-rounded">
											<img class="is-rounded" src="">
										</figure>
									</a>
								</section>
							</section>
						</div>
						<!--			</Logo>-->
						<!--			<Navbar Menu>-->
						<div class="column is-8">
							<section class="section">
								<div class="columns">
									<div class="column hover-color-change">
										<a href="#">
											<h1 class="title is-5 MartianMonoNerdFont has-text-centered text-color3">
												 Projects
											</h1>
										</a>
									</div>
									<div class="column hover-color-change">
										<a href="#">
											<h1 class="title is-5 MartianMonoNerdFont has-text-centered text-color3">
												󰙃 About
											</h1>
										</a>
									</div>
									<div class="column hover-color-change">
										<a href="#">
											<h1 class="title is-5 MartianMonoNerdFont has-text-centered text-color3">
												󰶍 Contact
											</h1>
										</a>
									</div>
								</div>
							</section>
						</div>
						<!--			</Navbar Menu>-->
						<!--			<Navbar End>-->
						<div class="column is-2">
							<section class="section">
								<div class="buttons">
									<a class="button color3 has-text-white">
										<strong>Sign up</strong>
									</a>
									<a class="button is-light">
										Log in
									</a>
								</div>
							</section>
						</div>
						<!--			</Navbar End>-->
					</div>
				</div>
				<!-- End Desktop -->
				<!-- Mobile -->
				<div class="container" id="mobile">
					<div  class="columns" id="header-mobile">
					</div>
				</div>
				<!--			</Navbar mid>-->
				<!-- End Mobile -->
			</header>
		</body>
	</div>
</template>

<script>
	import Header from './components/Header.vue';
	export default {
		name: 'App',
		components: {
			header: Header
		},
		// Puedes incluir opciones de componentes aquí, como datos, métodos, componentes anidados, etc.
	};
</script>

<style lang="scss">
@import './assets/scss/main.scss';
/* Estilos globales o específicos del componente */
</style>

