import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'
import vuetify from './plugins/vuetify'

const apolloClient = new ApolloClient({
  uri: 'http://34.217.26.87:1337/graphql'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.use(VueApollo)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  vuetify,
  render: h => h(App)
}).$mount('#app')
