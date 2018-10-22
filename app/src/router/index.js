import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Articles from '@/components/Articles'
import Article from '@/components/Article'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/artiklar',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/artiklar/:article',
      name: 'Article',
      component: Article
    },
    {
      path: '/skapa',
      name: 'Create',
      component: Create
    }
  ]
})
