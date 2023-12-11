<template>
    <h1>Segundo ejercicio</h1>
    <div>
        INGRESE N° DE FILAS
        <input v-model="numFilas" type="number" />
    </div>
    <br />
    <div>
        <button @click="generarMatriz">GENERAR</button>
    </div>
    <br />
    <div>
        <button @click="sumarFilas">SUMAR LOS ELEMENTOS DE LAS FILAS</button>
    </div>
    <div class="contenedor">
        <div class="fila" v-for="(fila, nroFila) in matriz" :key="nroFila">
            {{ nroFila }}
            <div class="numerito" v-for="(valor, nroColumna) in fila" :key="nroColumna">
                {{ valor }}
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
    name: 'SegundoEjercicio',
    setup() {
        const numFilas = ref(0);
        const matriz = ref([]);
        const generarMatriz = () => {
            const m = parseInt(numFilas.value);
            matriz.value = Array.from({ length: m }, () =>
                Array(3).fill(0).map(() => Math.floor(Math.random() * 10) + 1)
            );
        };
        const sumarFilas = () => {
            for (const fila of matriz.value) {
                const sumaFila = fila.reduce((x, valor) => x + valor, 0);
                console.log("sumFil:" + sumaFila);
            }
        };
        return {
            numFilas,
            matriz,
            generarMatriz,
            sumarFilas,
        };
    },
};
</script>
  
<style scoped>
.contenedor {
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.fila {
    display: flex;
    margin: 5px;
}

.numerito {
    background-color: black;
    color: white;
    width: 60px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: 5px;
    margin: 2px;
}
</style>
  