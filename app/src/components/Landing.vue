<template>
  <div class="component">
    <div class="component-content">

      <presentation class="presentation center-col"></presentation>

      <thumbs></thumbs>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';
import Presentation from '@/components/Presentation'
import VsdArticle from '@/components/VsdArticle'
import Randomize from '@/components/Randomize'
import Thumbs from '@/components/Thumbs'

export default {
  name: 'Landing',
  components: {
    Presentation,
    VsdArticle,
    Randomize,
    Thumbs
  },
  data () {
    return {
    }
  },
  computed: {
    article: function () {
      return store.state.content[store.state.idArticle];
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
}

</style>
