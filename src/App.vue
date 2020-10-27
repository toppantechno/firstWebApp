<template>
  <v-app>
    <AppHeader/>
    <v-content>
      <v-container fluid fill-height class="main__content">
        <v-row>
          <v-col cols="3" class="sidebar__content">
            <router-view name="side"/>
          </v-col>
          <v-spacer />
          <v-col cols="9" class="right__content">
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
.sidebar__content {
}
</style>
