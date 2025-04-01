<script setup>
import { ref } from "vue";

const termoBusca = ref("");
const operadoras = ref([]);

const buscarOperadoras = async () => {
  if (!termoBusca.value) return;

  try {
    const response = await fetch(`http://localhost:3000/buscar?q=${termoBusca.value}`);
    operadoras.value = await response.json();
  } catch (error) {
    console.error("Erro ao buscar operadoras:", error);
  }
};
</script>

<template>
  <div>
    <input v-model="termoBusca" placeholder="Buscar operadora..." @input="buscarOperadoras" />
    <ul>
      <li v-for="op in operadoras" :key="op.id">{{ op.nome }} ({{ op.categoria }})</li>
    </ul>
  </div>
</template>

<style scoped>
input {
  padding: 8px;
  width: 100%;
  margin-bottom: 10px;
}
</style>
