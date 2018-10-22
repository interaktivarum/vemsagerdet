<template>

  <div class="component">

    <div class="component-content">

      <img :src="content.img" />

      <div class="text">

        <h2>{{content.header}}</h2>

        <p>
          {{content.body}}
        </p>

        <info-pop msg="Testa att ändra avsändare" y="-10px" position="left" class="screenLarge"></info-pop>
        <info-pop msg="Testa att ändra avsändare" x="" y="-10px" position="bottom" class="screenSmall"></info-pop>

        <select v-model="idSource" id="sourcedrop">
          <option disabled>
            Avsändare
          </option>
          <option v-for="(source, index) in content.sources" :value="index" v-if="source.name">
            {{source.name}}
          </option>
        </select>

      </div>

    </div>

  </div>
</template>

<script>

import InfoPop from '@/components/InfoPop'

export default {
  name: 'VsdArticle',
  components: {
    InfoPop
  },
  data () {
    return {
      idSource: 0
    }
  },
  props:{
    content: "",
  },
  watch: {
    content: function (val) {
      this.idSource = Math.floor(Math.random()*val.sources.length);
    },
  },
  updated: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.component-content{
  background: rgb(245,245,245);
  border: 1px solid gray;
  border-radius: 3px;
  box-shadow: 5px 5px 1px gray;
  text-align: left;
  max-width: 100%;
}

img{
  max-width: 100%;
}

.text{
  margin: 20px;
}

select{
  background: inherit;
  border: 0;
  font-size: 12pt;
  font-weight: bold;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select:hover{
  background: lightblue;
}

</style>
