<template>
    <h1>MI PERFIL</h1>
    {{ perfil }}

    <button @click="funcsalir()">SALIR</button>
</template>





<script setup>
import { useRoute, useRouter } from 'vue-router';
import authService from '../../services/auth.service';
import { onMounted, onUnmounted, ref } from 'vue'
const perfil = ref({});
//para hacer una navegacion entre componentes.
const router=useRouter();

onMounted(()=>{
    profile();
});

async function profile() {
    const {data} = await authService.profile();
    perfil.value=data;
}

async function funcsalir(){
  const {data}=await  authService.logout();
    //localStorage.removeItem("access_token");
    router.push('/auth/login');
}


</script>
