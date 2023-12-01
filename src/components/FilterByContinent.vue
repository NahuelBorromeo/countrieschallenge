<template>
    <div id="FilterByContinent">
        <div class="continent-container">
            <p>Filtrar por continentes</p>
            <button class="btn-clear">Limpiar</button>
        </div>
        <div class="continent-grid">
            <CardContinent continent="Europa"/>
            <CardContinent continent="América"/>
            <CardContinent continent="Asia"/>
            <CardContinent continent="Oceanía"/>
            <CardContinent continent="África"/>
        </div>
    </div>
</template>

<script>

import CardContinent from './CardContinent.vue';

export default {
    name: 'FilterByContinent',
    components: {
    CardContinent
  },
  props: {
    msg: String
  }
}
</script>

<style>

#FilterByContinent {
    margin-top: 20px;
    background-color: #FFFFFF;
    border-radius: 40px;
    padding: 20px;
    font-size: 12px;
    width: 500px;
    margin-left: 80px;
}

.continent-container {
    display: flex;
    justify-content: space-between;
}

.continent-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.btn-clear {
  border: none; /* Elimina el borde */
  background: none; /* Elimina el fondo */
  font: inherit; /* Usa la fuente predeterminada del navegador */
  cursor: pointer; /* Muestra el cursor como puntero */
  color: #009CFF; /* Color azul del texto */
}
</style>