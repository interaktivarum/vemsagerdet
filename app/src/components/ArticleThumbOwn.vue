<template>

  <div class="component">

    <div class="component-content">
      <span class="header">
        Skriv din egen artikel
      </span>
    </div>

  </div>
</template>

<script>

export default {
  name: 'ArticleThumbOwn',
  components: {
  },
  data () {
    return {
    }
  },
  props:{
    content: "",
  },
  watch: {
  },
  methods: {

  },
  updated: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.component{
}

.component-content{
  background: lightblue;
  border-radius: 3px;

  text-align: left;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  transition: all 0.1s;
  cursor: pointer;
}

.component-content:hover{
  box-shadow: 3px 3px 1px gray;
  transform: rotate(1deg);
}

</style>
