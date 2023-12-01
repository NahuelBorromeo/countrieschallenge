<template>
    <div id="CardCountry">
        <img src="https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" :alt="country" class="country-img" />
        <span>{{ country }}</span>
    </div>
</template>

<script>
export default {
  name: 'CardCountry',
  props: {
      country: String,
      img: String,
  }
}
</script>

<style>

#CardCountry {
    display: flex;
    flex-direction: column;
    width: 120px;
}

.country-img {
    border-radius: 30px;
}

</style>