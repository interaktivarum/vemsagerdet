<template>
  <div class="component">
    <div class="component-content">

      <img src="/static/graphics/bubbles-merged.png" @click="goHome()" class="pointer"/>

      <h1 class="header" @click="goHome()">Vem säger det?</h1>

      <info-pop msg="Tipsa dina vänner" x="-90px" y="-10px" position="right" class="screenLarge"></info-pop>

      <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fvemsagerdet.se%2F&width=96&layout=button&action=like&size=small&show_faces=false&share=true&height=65&appId=1196347747065674" width="112" height="30" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';

import InfoPop from '@/components/InfoPop'

export default {
  name: 'Header',
  components: {
    InfoPop
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    goHome: function (id) {
      store.commit('goHome',this.$router);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.component{
}

.component-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

img{
  max-width: 100%;
}

.header{
  transform: rotate(-2deg);
  cursor: pointer;
  margin-top: 0px;
}

.header:hover {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
}

@keyframes shake {
  10%, 90% {
    transform: rotate(-4deg);
  }

  20%, 80% {
    transform: rotate(-2deg);
  }

  30%, 50%, 70% {
    transform: rotate(2deg);
  }

  40%, 60% {
    transform: rotate(-4deg);
  }
}

</style>
