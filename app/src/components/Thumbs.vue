<template>
  <div class="component">
    <div class="component-content center-col">

      <div class="thumbs">
        <div v-for="(article,index) in articles" class="thumb" @click="goToArticle(index)">
          <article-thumb :content="article"></article-thumb>
        </div>

        <div class="thumb" @click="goHome(index)">
            <!--router-link :to="{name: 'Create'}">Skriv en egen artikel</router-link-->
            <article-thumb-own></article-thumb-own>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';
import ArticleThumb from '@/components/ArticleThumb'
import ArticleThumbOwn from '@/components/ArticleThumbOwn'

export default {
  name: 'Thumbs',
  components: {
    ArticleThumb,
    ArticleThumbOwn
  },
  data () {
    return {
    }
  },
  computed: {
    articles: function () {
      return store.state.content;
    }
  },
  methods: {
    goHome: function (id) {
      store.commit('goCreate',this.$router);
    },
    goToArticle: function (id) {
      var params = {};
      params.router = this.$router;
      params.id = id;
      store.commit('goToArticle',params);
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.component{
  max-width: 100%;
}

.thumbs{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.thumbs > .thumb{
  flex: 0 1 290px;
  margin: 5px;
  text-align: center;
  align-self: center;
  font-weight: bold;
}

.create{
  box-sizing: border-box;
  background: lightblue;
  padding: 15px;
  border-radius: 2px;
}

</style>
