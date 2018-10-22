import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    content: "",
    idArticle: ""
  },
  mutations: {

    setContent: (state,content) => {
      state.content = content;
      state.idArticle = 0;
    },

    setIdArticle: (state,id) => {
      state.idArticle = id;
    },

    randomizeContent: (state) => {
      if(state.content.length > 1){
        var idRand;
        var newId = false;
        while(!newId){
          idRand = parseInt(Math.floor(Math.random() * state.content.length));
          newId = idRand != state.idArticle;
        }
        state.idArticle = idRand;
      }
    },

    goHome: (state,router) => {
      router.push({ name: 'Landing'})
    },

    goCreate: (state,router) => {
      router.push({ name: 'Create'})
    },

    goToArticle: (state,params) => {
      params.router.push({ name: 'Article', params: { article: params.id }})
    },

    nextArticle: (state,router) => {
      let idArticle = (state.idArticle + 1) % state.content.length;
      router.push({ name: 'Article', params: { article: idArticle }})
    },

    randomizeArticle: (state,router) => {
      if(state.content.length > 1){
        var idRand;
        var newId = false;
        while(!newId){
          idRand = parseInt(Math.floor(Math.random() * state.content.length));
          newId = idRand != state.idArticle;
        }
        router.push({ name: 'Article', params: { article: idRand }})
      }
    },

  },
  getters: {

  },
});
