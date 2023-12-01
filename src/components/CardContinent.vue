<template>
    <div id="CardContinent">
        <img src="https://cdn.pixabay.com/photo/2017/04/18/16/49/europe-2239723_1280.png" :alt="continent" class="continent-img" />
        <span>{{ continent }}</span>
    </div>
</template>

<script>
export default {
  name: 'CardContinent',
  props: {
      continent: String,
      img: String,
  }
}
</script>

<style>

#CardContinent {
    display: flex;
    flex-direction: column;
    width: 120px;
}

.continent-img {
    border-radius: 30px;
}

</style>