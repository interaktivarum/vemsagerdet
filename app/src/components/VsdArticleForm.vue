<template>
  <div class="component">
    <div class="component-content">

      <transition name="shrink">
        <div class="form" v-if="active == true">

          <h4>Bildadress</h4>
          <input v-model="article.img" placeholder="Bildadress" />
          <br />
          <a href="https://www.google.com/search?q=kattunge&tbs=sur:fc&tbm=isch" target="_blank">
            Hitta bilder som du får använda
          </a>

          <h4>Rubrik</h4>
          <input v-model="article.header" placeholder="Rubrik"/>

          <h4>Artikeltext</h4>
          <textarea v-model="article.body" placeholder="Artikeltext"></textarea>

          <h4>Avsändare</h4>
          <input v-for="source in article.sources" v-model="source.name" placeholder="Avsändare"/>

          <p class="info">
            Dina ändringar sparas automatiskt i webbläsaren.
            <br />
            Ändringarna försvinner när du stänger webbläsarfliken.
          </p>

        </div>
      </transition>

      <div class="toggle" @click="toggle()">
        <a v-if="active == true">Dölj formulär</a>
        <a v-if="active == false">Redigera artikel</a>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'VsdArticle',
  components: {
  },
  data () {
    return {
      article: "",
      active: false,
    }
  },
  props:{
    value: "",
  },
  computed: {
  },
  methods: {

    toggle: function () {
      this.active = !this.active;
    },

    reset: function () {
      this.article = this.value;
    }

  },
  mounted: function () {
    this.reset();
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.component{
}

.component-content{
  background: rgb(240,240,240);
  padding: 10px;
  border: 1px dashed lightgray;
}

.form{
  max-height: 500px;
  overflow-y: scroll;
}

.info{
  color: gray;
  font-style: italic;
}

.toggle{
  text-align: center;
  padding: 10px;
  transition: all 0.25s;
  cursor: pointer;
}

.toggle:hover{
  background: lightgray;
}

.shrink-enter-active, .shrink-leave-active {
  transition: max-height 1s;
}
.shrink-enter, .shrink-leave-to /* .fade-leave-active below version 2.1.8 */ {
  max-height: 0;
}


</style>
