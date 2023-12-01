<template>
  <div class="home">
    <SearchBar />
    <div v-if="loading">Loading...</div>
    <ul v-if="!loading && countries">
      <CountriesGrid />
    </ul>
    <div v-if="error">{{ error.message }}</div>
  </div>
</template>

<script>
import { gql } from 'graphql-tag';
import { mapActions, mapGetters } from 'vuex';

  import SearchBar from '@/components/SearchBar.vue'
  import CountriesGrid from '@/components/CountriesGrid.vue';

  export default {
    name: 'HomeView',
    components: {
      SearchBar,
      CountriesGrid
  },
  apollo: {
    countries: {
      query: gql`
      query {
          countries {
            continent{
              name
            }
            name
          }
      }`,
      result({ data, loading, error }) {

        this.setLoading(loading)

        if (error) {
          this.setError(error);
        } else {
          this.setError(null);
        }

        if (data) {
          this.updateCountries(data.countries);
        }
        console.log('datos', data)
      }
    }
  },
  computed: {
    ...mapGetters(['isLoading', 'error', 'countries']),
  },
  methods: {
    ...mapActions(['updateCountries', 'setLoading', 'setError']),
  },
  watch: {
    countries(newCountries) {
      this.updateCountries(newCountries);
    }
  }
};
</script>
