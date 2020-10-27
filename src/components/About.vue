<template>
  <section class="about">
    <h2>アバウト</h2>
    <!-- ul>
      <li v-for="(item, index) in $store.state.selectionJSON" :key="index">
        {{ index }}-{{ item.name }}
      </li>
    </ul -->
    <div>
      <div v-for="(map, index) in mapData" :key="index"
        @click.prevent="onClickTest(map, index)"
        v-bind:class="[
          map.select === true ? 'div__select' : 'div__unselect'
        ]"
        v-bind:style="{ top: map.top + 'px', left: map.left + 'px', width: map.width + 'px', height: map.height + 'px' }"
        style="position: relative;float:left;"
      >
          {{ map.name }}
      </div>
    </div>
    <div>
      <v-btn @click="getIp">IPを取得</v-btn>
    </div>
  </section>
</template>

<script>

export default {
  data: function () {
    return {
      offsetX: 250,
      offsetY: 150,
      mapData: {
        'test1-1': { name: 'ﾃｽﾄ1-1', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-2': { name: 'ﾃｽﾄ1-2', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-3': { name: 'ﾃｽﾄ1-3', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-4': { name: 'ﾃｽﾄ1-4', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-5': { name: 'ﾃｽﾄ1-5', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-6': { name: 'ﾃｽﾄ1-6', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-7': { name: 'ﾃｽﾄ1-7', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-8': { name: 'ﾃｽﾄ1-8', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-9': { name: 'ﾃｽﾄ1-9', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-10': { name: 'ﾃｽﾄ1-10', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-11': { name: 'ﾃｽﾄ1-11', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-12': { name: 'ﾃｽﾄ1-12', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-13': { name: 'ﾃｽﾄ1-13', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-14': { name: 'ﾃｽﾄ1-14', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-15': { name: 'ﾃｽﾄ1-15', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-16': { name: 'ﾃｽﾄ1-16', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-17': { name: 'ﾃｽﾄ1-17', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-18': { name: 'ﾃｽﾄ1-18', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-19': { name: 'ﾃｽﾄ1-19', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test1-20': { name: 'ﾃｽﾄ1-20', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-1': { name: 'ﾃｽﾄ2-1', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-2': { name: 'ﾃｽﾄ2-2', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-3': { name: 'ﾃｽﾄ2-3', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-4': { name: 'ﾃｽﾄ2-4', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-5': { name: 'ﾃｽﾄ2-5', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-6': { name: 'ﾃｽﾄ2-6', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-7': { name: 'ﾃｽﾄ2-7', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-8': { name: 'ﾃｽﾄ2-8', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-9': { name: 'ﾃｽﾄ2-9', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-10': { name: 'ﾃｽﾄ2-10', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-11': { name: 'ﾃｽﾄ2-11', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-12': { name: 'ﾃｽﾄ2-12', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-13': { name: 'ﾃｽﾄ2-13', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-14': { name: 'ﾃｽﾄ2-14', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-15': { name: 'ﾃｽﾄ2-15', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-16': { name: 'ﾃｽﾄ2-16', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-17': { name: 'ﾃｽﾄ2-17', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-18': { name: 'ﾃｽﾄ2-18', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-19': { name: 'ﾃｽﾄ2-19', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test2-20': { name: 'ﾃｽﾄ2-20', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-1': { name: 'ﾃｽﾄ3-1', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-2': { name: 'ﾃｽﾄ3-2', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-3': { name: 'ﾃｽﾄ3-3', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-4': { name: 'ﾃｽﾄ3-4', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-5': { name: 'ﾃｽﾄ3-5', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-6': { name: 'ﾃｽﾄ3-6', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-7': { name: 'ﾃｽﾄ3-7', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-8': { name: 'ﾃｽﾄ3-8', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-9': { name: 'ﾃｽﾄ3-9', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-10': { name: 'ﾃｽﾄ3-10', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-11': { name: 'ﾃｽﾄ3-11', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-12': { name: 'ﾃｽﾄ3-12', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-13': { name: 'ﾃｽﾄ3-13', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-14': { name: 'ﾃｽﾄ3-14', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-15': { name: 'ﾃｽﾄ3-15', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-16': { name: 'ﾃｽﾄ3-16', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-17': { name: 'ﾃｽﾄ3-17', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-18': { name: 'ﾃｽﾄ3-18', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-19': { name: 'ﾃｽﾄ3-19', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test3-20': { name: 'ﾃｽﾄ3-20', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-1': { name: 'ﾃｽﾄ4-1', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-2': { name: 'ﾃｽﾄ4-2', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-3': { name: 'ﾃｽﾄ4-3', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-4': { name: 'ﾃｽﾄ4-4', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-5': { name: 'ﾃｽﾄ4-5', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-6': { name: 'ﾃｽﾄ4-6', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-7': { name: 'ﾃｽﾄ4-7', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-8': { name: 'ﾃｽﾄ4-8', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-9': { name: 'ﾃｽﾄ4-9', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-10': { name: 'ﾃｽﾄ4-10', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-11': { name: 'ﾃｽﾄ4-11', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-12': { name: 'ﾃｽﾄ4-12', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-13': { name: 'ﾃｽﾄ4-13', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-14': { name: 'ﾃｽﾄ4-14', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-15': { name: 'ﾃｽﾄ4-15', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-16': { name: 'ﾃｽﾄ4-16', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-17': { name: 'ﾃｽﾄ4-17', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-18': { name: 'ﾃｽﾄ4-18', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-19': { name: 'ﾃｽﾄ4-19', select: false, top: 0, left: 0, width: 50, height: 50 },
        'test4-20': { name: 'ﾃｽﾄ4-20', select: false, top: 0, left: 0, width: 50, height: 50 }

      }
    }
  },
  methods: {
    onClickTest (map, index) {
      map.select = !map.select
      this.$set(this.mapData, index, map)
      // 選択内容を
    },
    getIp () {
      this.axios.get('https://httpbin.org/get')
        .then((response) => {
          alert(response.data.origin)
        })
        .catch((e) => {
          alert(e)
        })
    }
  },
  computed: {
    getSelection () {
      // storeを監視用
      return this.$store.getters.getSelectionJSON
    }
  },
  watch: {
    // storeを監視
    getSelection (val, old) {
      for (const key in this.mapData) {
        this.mapData[key].select = false
      }
      if (val.length > 0) {
        val.forEach(st => {
          if (this.mapData[st.id]) {
            this.mapData[st.id].select = true
          }
        })
      } else {
      }
    }
  }
}
</script>

<style>
.about {
  background-color: #EAEAEA;
  color: black;
  overflow-x: auto;
  width: 850px;
  height: 100vh;
}
.div__select {
  border-radius: 5px;
  background-color: #edc25f;
  border: solid 2px #eda600;
  text-align: center;
  display: inline;
  vertical-align: middle;
  margin: 1px;
}
.div__unselect {
  border-radius: 5px;
  background-color: #eedcb3;
  text-align: center;
  display: inline;
  vertical-align: middle;
  margin: 1px;
  padding: 2px;
}
</style>
