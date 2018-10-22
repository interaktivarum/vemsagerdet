<template>
  <div class="component">

    <div class="center-col">

      <p>
        Samtliga artiklar och avsändare på <i>Vem säger det?</i> är påhittade. Webbplatsen är skapad för hjälpa dig träna på att avgöra trovärdigheten utifrån avsändare och syfte.
      </p>

      <p>
        <i>Vem säger det?</i> är en del av <a href="https://www.mikoteket.se" target="_blank">Mikoteket</a> och är skapad av <a href="http://www.interaktivarum.se" target="_blank">Interaktiva rum</a>.
      </p>

    </div>

  </div>
</template>

<script>

import { store } from '@/store';

export default {
  name: 'PresentationFooter',
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

.component{
  color: gray;
  border-top: 1px solid gray;
  margin-top: 50px;
  padding: 20px;
}

</style>
