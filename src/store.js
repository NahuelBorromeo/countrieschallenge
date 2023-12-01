import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
    isLoading: true,
    error: null
  },
  mutations: {
    setCountries(state, countries) {
      state.countries = countries;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setError(state, error) {
      state.error = error;
    }
  },
  actions: {
    updateCountries({ commit }, countries) {
      commit('setCountries', countries);
    },
    setLoading({ commit }, isLoading) {
      commit('setLoading', isLoading);
    },
    setError({ commit }, error) {
      commit('setError', error);
    }
  },
  getters: {
    getCountries(state) {
      return state.countries;
    },
    isLoading(state) {
      return state.isLoading;
    },
    getError(state) {
      return state.error;
    }
  }
});
