<template>
  <div class="component">
    <div class="component-content center-col">

      <div class="papers">

        <!--div class="behind2" @click="randomizeArticle()">
          Slumpa artikel
        </div-->

        <div class="behind" @click="nextArticle()">
          Nästa artikel
        </div>

      </div>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';
import Presentation from '@/components/Presentation'
import VsdArticle from '@/components/VsdArticle'
import Randomize from '@/components/Randomize'

export default {
  name: 'ArticleBehind',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    nextArticle: function (){
      store.commit('nextArticle',this.$router);
    },
    randomizeArticle: function (){
      store.commit('randomizeArticle',this.$router);
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.component-content{
  position: relative;
  background: red;
}

.papers{
  position: absolute;
  top: 0px;
  left: 0px;
  height: 500px;
  width: 100%;
  background: red;
}

.behind,.behind2{
  border: 1px dashed gray;
  background: rgb(245,245,245);
  color: lightgray;
  width: 200px;
  height: 100%;
  position: absolute;
  top: 50px;
  right: -50px;
  text-align: right;
  padding: 5px;
  transition: all 0.25s;
  cursor: pointer;
}

.behind{
  transform: rotate(5deg) translateX(0px);
}

.behind2{
  transform: rotate(5deg) translateX(0px);
}

.papers:hover > .behind, .papers:hover > .behind2{
  color: gray;
  border: 1px solid gray;
  box-shadow: 2px 2px 1px gray;
  font-weight: bold;
}

.papers:hover > .behind{
  transform: rotate(10deg) translateX(25px);
}

.papers:hover > .behind2{
  transform: rotate(20deg) translateX(110px);
}

.behind:hover, .behind2:hover{
  background: lightblue;
}

</style>
