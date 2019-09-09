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

    <br />

    <div class="note">

      <h3>Diskutera</h3>

      <p>
        När du ändrar avsändare ändras enbart avsändaren, medan artikeltexten och bilden är desamma.
      </p>

      <ul>
        <li>
          Vad har respektive avsändare för syfte med artikeln?
        </li>
        <li>
          Är avsändaren expert inom området?
        </li>
        <li>
          Stämmer informationen överens med vad andra skriver om ämnet?
        </li>
        <li>
          Stämmer informationen överens med sådant du redan vet, och <i>hur</i> vet du det?
        </li>
        <li>
          <i>Vill</i> du att informationen ska vara sann?
        </li>
      </ul>

      <p>
        Fundera på hur ovanstående påverkar trovärdigheten i innehållet, och hur du tolkar artikeln. Diskutera gärna med en kompis!
      </p>

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

.note{
  background: rgb(240,240,240);
  padding: 0 20px 10px 20px;
  color: rgb(50,50,50);
  border: 1px solid lightgray;
  border-radius: 3px;
}

</style>
