<template>
  <v-app>
    <AppHeader/>
    <!-- ここから追加 -->
    <v-content>
      <router-view/>
    </v-content>
    <!-- ここまで追加 -->
    <AppFooter/>
  </v-app>
</template>
<script>
import AppHeader from './components/AppHeader.vue'
// import Home from './components/Home.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
//    Home,
    AppFooter
  }
}
</script>