<template>
	<div class="container">
		<div class="columns is-mobile">
			<div class="column mx-6 py-4">
				<div class="hero color2" id="rounded">
					<div class="hero-head m-4">
						<figure>
							<img src="https://bulma.io/images/placeholders/480x480.png" alt="Bulma: a modern CSS framework based on Flexbox" width="256" height="48">
						</figure>
					</div>
					<div class="hero-body">
						<h2 class="title is-3">Hello,</h2>
						<p class="subtitle is-5 text-color4">potential Partner, Client or Collaborator</p>
					</div>
					<div class="hero-foot">
						<div class="container color3 p-6">
							<p class="subtitle is-6 has-text-centered text-color4">This is a space where I showcase my projects and track their progress over time.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MGreetings',
	}
</script>

<style lang="scss">
* {
	font-family: 'MartianMonoNerdFont', sans-serif;
}
</style>
