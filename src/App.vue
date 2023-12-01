<template>
  <div id="app">
    <div class="grid-container">
      <SideBar />
      <MainContent />
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import MainContent from '@/components/MainContent.vue'

export default {
  name: 'App',
  components: {
    SideBar,
    MainContent
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
}
</style>
