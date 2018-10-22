<template>
  <div class="component">
    <div class="component-content center-col">

      <h2>Alla nyheter</h2>

      <thumbs></thumbs>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';
import Thumbs from '@/components/Thumbs'

export default {
  name: 'Articles',
  components: {
    Thumbs,
  },
  data () {
    return {
    }
  },
  computed: {
    articles: function () {
      return store.state.content;
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.component-content{

}

.thumbs{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.thumbs > .thumb{
  flex: 0 1 290px;
  margin: 5px;
}

</style>
