<template>
  <div class="component">
    <div class="component-content">

      <article-behind class="screenLarge"></article-behind>

      <vsd-article :content="article" v-if="article" class="center-col article"></vsd-article>



      <br />

      <randomize class="screenSmall"></randomize>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';
import Presentation from '@/components/Presentation'
import VsdArticle from '@/components/VsdArticle'
import ArticleBehind from '@/components/ArticleBehind'
import Randomize from '@/components/Randomize'

export default {
  name: 'Article',
  components: {
    Presentation,
    VsdArticle,
    ArticleBehind,
    Randomize,
  },
  data () {
    return {
    }
  },
  computed: {
    articleParams: function () {
      return this.$route.params.article;
    },
    article: function () {
      return store.state.content[store.state.idArticle];
    }
  },
  watch: {
    articleParams(newValue) {
      var idArticle = this.$route.params.article ? this.$route.params.article : 0;
      store.commit('setIdArticle',idArticle);
    }
  },
  methods: {
    randomizeContent: function (){
      store.commit('randomizeContent');
    }
  },
  mounted () {
    var idArticle = this.$route.params.article ? this.$route.params.article : 0;
    store.commit('setIdArticle',idArticle);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.component-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.behind{
  border: 1px dashed gray;
  background: rgb(245,245,245);
  color: lightgray;
  position: absolute;
  top: 0px;
  height: 500px;
  transform: rotate(5deg) translate(50px, 50px);
  text-align: right;
  padding: 5px;
  transition: all 0.25s;
  cursor: pointer;
}

.behind:hover{
  transform: rotate(7deg) translate(75px, 50px);
  color: gray;
  border: 1px solid gray;
  background: rgb(240,240,240);
}

.article{
  z-index: 1;
}

</style>
