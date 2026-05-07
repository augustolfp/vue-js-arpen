<script>
export default {
}
</script>

<template>
  <div class="contador-container">
    <h1>Exemplo: Contador</h1>

    <div class="contagem">
      <h2>CONTAGEM ATUAL:</h2>
      <div> 0 </div>
    </div>

    <div class="controls">
      <button> + </button>
      <button> - </button>
    </div>
  </div>
</template>

<style scoped>
.contador-container>* {
  margin: auto;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: large;
  font-weight: bold;
}

button:hover {
  background-color: #2980b9;
  cursor: pointer;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
}

.contagem {
  margin-top: 24px;
  background-color: grey;
  padding: 24px;
  max-width: 300px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contagem>div {
  font-weight: bolder;
  font-size: 48px;
  color: white;
}
</style>