<template>

  <div class="component">

    <div class="component-content" :style="{'background-image': 'url('+content.img+')'}">
      <span class="header">
        {{content.header}}
      </span>
    </div>

  </div>
</template>

<script>

export default {
  name: 'ArticleThumb',
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
  background: rgb(245,245,245);
  border: 1px solid gray;
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

.header{
  background: rgba(255,255,255,0.95);
  padding: 5px;
  font-weight: bold;
  text-align: center;
  transition: all 0.25s;
  margin: 5px;
}

.component-content:hover > .header{
}

</style>
