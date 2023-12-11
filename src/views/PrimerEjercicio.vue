<template>
    <h1>Primer Ejercicio</h1>
    <h1>LISTA DE USUARIOS</h1>
    <div>
        Cantidad de imágenes
        <input type="number" v-model="cantidad">
    </div>
    <br>
    <div>
        <button @click="cargarImagenes">CARGAR IMÁGENES</button>
    </div>
    <div v-for="(user, index) in usuarios" :key="index">
        {{ index }}
        <img :src="user.picture.large">
    </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
    name: 'PrimerEjercicio',
    setup() {
        const cantidad = ref(0);
        const usuarios = ref([]);
        const cargarImagenes = async () => {
            try {
                const respuesta = await fetch(`https://randomuser.me/api/?results=${cantidad.value}`);
                const data = await respuesta.json();
                usuarios.value = data.results;
            } catch (error) {
                console.error(error);
            }
        };
        return { cantidad, cargarImagenes, usuarios };
    },
};
</script>
  
<style scoped></style>
  