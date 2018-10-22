<template>
  <div class="component">
    <div class="component-content">

      <transition name="fade">
        <span class="container" :style="{left:x, top:y}" :class="{top:top, right:right, bottom:bottom, left:left}" v-if="show" @click="hide()">

          {{msg}}

          <div class="arrow">
          </div>

        </span>
      </transition>

    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import { store } from '@/store';

export default {
  name: 'InfoPop',
  data () {
    return {
      show: {type: Boolean, default: true}
    }
  },
  props:{
    msg: "",
    elid: "",
    x: "",
    y: "",
    position: ""
  },
  computed: {
    top: function () {
      return this.position == "top"
    },
    right: function () {
      return this.position == "right"
    },
    bottom: function () {
      return this.position == "bottom"
    },
    left: function () {
      return this.position == "left"
    }
  },
  methods: {
    hide: function () {
      this.show = false;
    }
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.component-content{
  position: relative;
}

.container{
  position: absolute;
  padding: 10px;
  background: lightblue;
  cursor: pointer;
  width: auto;
  height: auto;
  white-space: nowrap;
}

.container:hover{
  filter:opacity(75%);
}

.container.top{
  animation: top 3s infinite;
}

.container.right{
  animation: right 3s infinite;
}

.container.bottom{
  animation: bottom 3s infinite;
}

.container.left{
  animation: left 3s infinite;
}

@keyframes top {
  0%, 30%, 70%, 100% {
    transform: translate(0%,-120%);
  }

  50% {
    transform: translate(0%,-110%);
  }
}

@keyframes right {
  0%, 30%, 70%, 100% {
    transform: translate(120%,0%);
  }

  50% {
    transform: translate(110%,0%);
  }
}

@keyframes bottom {
  0%, 30%, 70%, 100% {
    transform: translate(0%,120%);
  }

  50% {
    transform: translate(0%,110%);
  }
}

@keyframes left {
  0%, 30%, 70%, 100% {
    transform: translate(-120%,0%);
  }

  50% {
    transform: translate(-110%,0%);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.arrow{
  width: 16px;
  height: 16px;
  position: absolute;
  background: lightblue;
  transform: translate(50%, 50%) rotate(45deg);
}

.top .arrow{
  right: 50%;
  bottom: 0px;
}

.left .arrow{
  right: 0px;
  bottom: 50%;
}

.right .arrow{
  left: -16px;
  bottom: 50%;
}

.bottom .arrow{
  right: 50%;
  top: -16px;
}

</style>
