<template>
  <section class="sidebar">
    <h2>サイドバー</h2>
    <v-treeview v-model="selection"
      :items="items"
      item-key="name"
      :selection-type="selectionType"
      @input="onUpdate"
      selectable
      return-object
      open-all
      select-all
      >
      <template slot="label" slot-scope="{ item }">
        <a @click="onClickUpdate(item)">{{ item.name }}</a>
      </template>
    </v-treeview>
    <v-btn @click="testClick(selection)">testClick</v-btn>
  </section>
</template>

<script>
export default {
  created () {
    /* 初回ロード時に実行 */
    console.log('test')
  },
  data: () => ({
    selectionType: 'leaf',
    selection: [],
    items: [
      { id: 'test1-1', name: 'ﾃｽﾄ1-1' },
      { id: 'test2-2', name: 'ﾃｽﾄ2-2' },
      { id: 'test3-3', name: 'ﾃｽﾄ3-3' }
    ]
    /*
    [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 'test1-1', name: 'ﾃｽﾄ1-1' },
          { id: 'test2-2', name: 'ﾃｽﾄ2-2' },
          { id: 'test3-3', name: 'ﾃｽﾄ3-3' }
        ]
      }
    ]
    */
  }),
  methods: {
    onClickUpdate (item) {
      console.log(item.name)
    },
    testClick (selection) {
      /* tescclickボタン押下時 */
      if (selection.length > 0) {
        selection.forEach(st => {
          console.log(st.name)
        })
      } else {
        // console.log('any node selected.')
      }
    },
    onUpdate (selection) {
      /* ツリー選択情報更新時 */
      if (selection.length > 0) {
        /*
        selection.forEach(st => {
          console.log('01:' + st.name)
        })
        */
        this.$store.commit('updateJSON', selection)
      } else {
        // console.log('01:any node selected.')
        this.$store.commit('updateJSON', [])
      }
    }
  }
}
</script>

<style>
.sidebar {
  background-color: #EAEAEA;
  width: 250px;
  height: 100vh;
  color: #fff;
}
.v-treeview-node {
  min-height: 25px;
}
.v-treeview-node__root {
  min-height: 25px;
}
</style>
