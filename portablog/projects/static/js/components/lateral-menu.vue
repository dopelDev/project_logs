<template>
  <div class="hero is-large">
    <!-- Botón para abrir el menú -->
    <img src="./../../img/logo-small.webp" @click="toggleMenu" class="menu-button" alt="Menu">

    <!-- Menú lateral -->
    <div class="menu-container" v-bind:class="{ 'is-active': menuActive }">
      <!-- Contenido del menú -->
      <button class="button is-primary is-large is-fullwidth" @click="toggleMenu">Cerrar Menú</button>
      <!-- Agrega aquí más elementos de tu menú -->
    </div>
  </div>
</template>

<script>
export default {
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
};
</script>

<style scoped>
</style>

