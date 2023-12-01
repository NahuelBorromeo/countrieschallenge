<template>
 <CardCountry country="Peru"/>
</template>

<script>

import CardCountry from './CardCountry.vue';

export default {
    name: 'CountriesGrid',
    components: {
    CardCountry
  },
  props: {
    msg: String
  }
}
</script>