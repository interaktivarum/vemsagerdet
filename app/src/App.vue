<template>
  <div id="app">
    <vsd-header></vsd-header>
    <router-view/>
    <vsd-footer></vsd-footer>
  </div>
</template>

<script>

import { store } from '@/store';
import jsonContent from '@/assets/content.json';

import VsdHeader from '@/components/VsdHeader'
import VsdFooter from '@/components/VsdFooter'

export default {
  name: 'App',
  components: {
    VsdHeader,
    VsdFooter
  },
  data () {
    return {
      content: jsonContent
    }
  },
  methods: {
  },
  mounted () {

    //Register functions
    this.$root.$on('randomizeArticle', (article) => {
      this.$router.replace({ name: 'Article', params: { article: idRand }})
    });

    store.commit('setContent',this.content.articles);
  },

}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Open+Sans:100,300,400,500,700');

@import '/assets/style/style.css';
@import '/assets/style/screens.css';
@import '/assets/style/form.css';

</style>
