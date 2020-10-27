<template>

    <header>
      <v-app-bar app dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>テストサイト</v-toolbar-title>
        <!-- タブメニュー -->
        <v-tabs>
          <v-tab v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.url">
            {{ menuItem.name }}
          </v-tab>
        </v-tabs>
      </v-app-bar>
      <!-- 左上ドロップダウンメニュー -->
      <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-list nav dense>
        <!-- nav:いい感じに各要素に丸みをつけてくれる。 -->
        <!-- dense:リスト全体のフォントを小さくいい感じにしてくれる。 -->
          <v-list-item-group>
            <v-list-item v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.url">
              <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </header>
</template>

<script>
import constants from '../common/constants'
export default {
  name: 'AppHeader',
  data () {
    return {
      drawer: false,
      menuItems: constants.menuItems
    }
  }
}

</script>

<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
</style>
