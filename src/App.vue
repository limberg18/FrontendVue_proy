<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <h1>Mi componente principal</h1>
  <h2>Menú de navegacion</h2>
  <RouterLink to="/">INICIO</RouterLink>|
  <RouterLink to="/nosotros">NOSOTROS</RouterLink>|
  <RouterLink to="/servicios">SERVICIOS</RouterLink>|
  <RouterLink to="/auth/login">INGRESAR</RouterLink>|
  
<hr>  
<router-view></router-view>
</template>