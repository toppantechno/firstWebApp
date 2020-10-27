import Vue from 'vue'
import Router from 'vue-router'
import Home from './src/components/Home.vue'
import About from './src/components/About.vue'
import Sidebar from './src/components/Sidebar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        side: Sidebar
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: About,
        side: Sidebar
      }
    }
  ]
})
