<template>
    <h1>Hello primer ejercicio</h1>
    <button @click="mostrarID">generar</button>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
    name: 'PrimerEjercicio',
    setup() {
        const generarID = () => {
            return uuidv4();
        }
        const mostrarID = () => {
            console.log(generarID())
        }
        return { mostrarID }
    }
}
</script>

<style scoped></style>