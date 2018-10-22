<template>
  <div class="component">
    <div class="component-content">

      <br />

      <div class="center-col">
        <vsd-article-form v-model="article"></vsd-article-form>
      </div>

      <br />

      <vsd-article :content="article" v-if="article" class="center-col">
      </vsd-article>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';
import Presentation from '@/components/Presentation'
import VsdArticle from '@/components/VsdArticle'
import VsdArticleForm from '@/components/VsdArticleForm'

export default {
  name: 'Landing',
  components: {
    Presentation,
    VsdArticle,
    VsdArticleForm,
  },
  data () {
    return {
      article: {}
    }
  },
  computed: {
    a: function () {
      return this.article;
    }
  },
  watch: {
    article: {
      handler: function () {
        this.saveToLocal();
      },
      deep: true
    }
  },
  methods: {
    randomizeContent: function (){
      store.commit('randomizeContent');
    },
    initArticle: function () {
      let storage = false;

      if (typeof(Storage) !== "undefined") {

        let stored = JSON.parse(sessionStorage.getItem("articleCreate"));
        if(stored != null){
          this.article = stored;
          storage = true;
        }
      }

      if(!storage){
        this.article = Object.assign({},{
          img:"https://upload.wikimedia.org/wikipedia/commons/6/6a/S%C3%B6t_kattunge.JPG",
          header:"Min rubrik",
          body:"Min nyhet",
          sources:[{name: "Avsändare 1"},{name: "Avsändare 2"},{name: "Avsändare 3"},{name: "Avsändare 4"}]
        });
      }

    },
    saveToLocal: function () {
      if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("articleCreate", JSON.stringify(this.article));
      }
    }
  },
  created () {
    this.initArticle();
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
}

</style>
