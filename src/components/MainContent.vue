
<template>
    <div id="MainContent">
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'MainContent',
  props: {
    msg: String
  }
}
</script>

<style>

#MainContent {
    background-color: #E3F4FF;
}

</style>