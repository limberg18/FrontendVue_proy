<template>
    {{ credenciales }}<br>
    <label>Ingrese su correo</label>
    <input type="email" v-model="credenciales.email">
    <strong>{{ errores.email }}</strong>
    <br>

    <label>Ingrese su contraseña</label>

    <input type="password" v-model="credenciales.password">
    <strong>{{ errores.password }}</strong>
    <br>
    <button @click="ingresar()">INGRESAR</button>
    {{ datos }}
</template>
<script setup>
import { ref } from 'vue';
import authService from './../../services/auth.service'
import { useRouter } from 'vue-router';



const credenciales = ref({ email: '', password: '' });
const datos = ref();
const router = useRouter();
const errores = ref({});

async function ingresar() {

    try {
        const { data } = await authService.login(credenciales.value);
        localStorage.setItem('access_token', data.access_token);

        router.push('/admin/perfil');


    } catch (error) {
        console.log(error);
        errores.value = error.response.data.errors;
        if (error.status === 411) {
            localStorage.removeItem('access_token');
            console.log("Error de credenciales");
        } else {


            errorr.value = error.response.data.errors;
            //alert('Error al autenticar');
        }
    }

}

</script>
