<template>
  <div class="component">

    <div class="container" @click="randomizeContent()">

      <div>
        <img src="/static/graphics/reload.png" class="reload" />
      </div>

      <div>
        Läs en ny artikel
      </div>

    </div>

  </div>
</template>

<script>

import { store } from '@/store';

export default {
  name: 'Randomize',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    randomizeContent: function (){
      store.commit('randomizeArticle',this.$router);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  color: gray;
  transition: color 0.5s;
}

.container > div {
  align-self: center;
  margin: 5px;
}

.container:hover{
  color: black;
}

.reload{
  width: 64px;
  transition: transform 0.5s;
}

.container:hover .reload{
  transform: rotate(270deg);
}

</style>
