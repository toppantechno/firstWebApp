<template>
  <section class="home-about">
    <div class="section__title">
      <div class="section__title-text">01.アバウトミー</div>
    </div>
    <v-container>
      <v-row class="home-about__contents">
        <v-col md="5" class="home-about__contents-img">
          <img src="../assets/img/sample3.png" alt="現場猫 第3弾" class="img-fluid"/>
        </v-col>
        <v-col md="5" class="home-about__contents-text">
          <p>「仕事猫」がマスク付きのカプセルフィギュアとなって再出動</p>
          <p>今度はマスクを付けてヨシ！くまみね氏による大人気キャラクター「仕事猫」のセリフプレート付きミニフィギュアが、“マスクつき”で再登場！マスクは外せる仕様なので、可愛い顔ももちろん拝めます。</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.section__title {
  padding-top: 120px;
  text-align: center;

  &-text {
    font-weight: 700;
    font-size: 40px;
    color: #e65f78;
  }
}
.home-about__contents {
  margin-top: 20px;
  justify-content: center;

  &-img {
    text-align: center;
  }
  &-text {
    word-wrap: break-word;
  }
}
</style>
