import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '../router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import App from './components/App.vue'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
