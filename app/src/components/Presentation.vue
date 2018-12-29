<template>
  <div class="component">
    <div class="component-content">

      <p>
        När du läser en text räcker det inte alltid med att bara läsa själva innehållet. Det är även viktigt att fundera på vem som har skrivit texten och varför: <strong>vem är avsändaren</strong> och <strong>vad är syftet</strong>?
      </p>

      <p>
        I artiklarna nedan kan du testa att byta avsändare. Vad har respektive avsändare för syfte med artikeln? Stämmer det överens med sådant du redan vet? Fundera på hur det påverkar trovärdigheten i innehållet. Diskutera gärna med en kompis!
      </p>

      <p>
        Du kan även <router-link :to="{name: 'Create'}">skriva en egen artikel</router-link>.
      </p>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';

export default {
  name: 'Presentation',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.component-content{
}

</style>
