<template>
    <div class="search-bar-container">
        <div class="search-bar">
            <label for="countryInput" class="label-country">País</label>
            <div class="input-wrapper">
                <input
                type="text"
                id="countryInput"
                placeholder="Escribe el país que deseas ver"
                v-model="searchQuery"
                class="input-country"
                @focus="showComponent = true"
                @blur="showComponent = false"
                />
                <button @click="search" class="search-button">
                    <span class="icon-search"></span>
                    Buscar
                </button>
            </div>
        </div>
    <div v-if="showComponent" class="additional-component">
      <FilterByContinent />
    </div>
    </div>
  </template>
  
  <script>
  import FilterByContinent from '@/components/FilterByContinent.vue'


  export default {
    name: 'SearchBar',
    data() {
      return {
        searchQuery: '',
        showComponent: false
      };
    },
    components: {
        FilterByContinent
    },
    methods: {
      search() {
        // Lógica para realizar la búsqueda con el término searchQuery
        console.log('Búsqueda de país:', this.searchQuery);
        // Puedes agregar aquí la lógica para realizar la búsqueda según el término ingresado
      }
    }
  };
  </script>
  
  <style>
  .search-bar {
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    margin-top: 40px;
    margin-left: 80px;
    margin-right: 80px;
    border-radius: 40px;
    box-shadow: 0 3px 1px rgba(0, 0, 0, 0.5);
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
  }
  
  .label-country {
    /* Otros estilos para la etiqueta */
  }
  
  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 30px;
    /* Estilos del contenedor del input y botón */
  }
  
  .input-country {
    margin-right: 8px;
    border: none;
    font-size: 12px;
    width: 50%;
    /* Estilos del input */
  }

  .input-country:focus {
    outline: none;
    border: none;
    border-bottom: 2px solid #7BCCFF;
  }
  
  .search-button {
    display: flex;
    align-items: center;
    padding: 5px 12px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    /* Estilos del botón */
  }

  .icon-search {
    display: inline-block;
    color: #FFFFFF;
    width: 20px; /* Ajusta el ancho del icono */
    height: 20px; /* Ajusta la altura del icono */
    background-image: url('../assets/search-icon.png'); /* Ruta del icono PNG */
    background-size: cover; /* Ajusta el tamaño del ícono */
    margin-right: 5px; /* Espacio entre el ícono y el texto */
  }

  </style>
  