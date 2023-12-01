import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';
import store from './store';

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  uri: 'https://countries.trevorblades.com/'
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  router,
  render: h => h(App),
  store,
}).$mount('#app')
