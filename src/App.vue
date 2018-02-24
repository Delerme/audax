<template>
  <div id="app">
    <!-- <h1 class="page-title">Audax Society</h1> -->
    <router-view></router-view>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class App extends Vue {}
</script>


<style>
html {
  background: #4a3200;
  background-image: url("assets/bg1.png"), url("assets/bg2.png");
  background-repeat: repeat-x, repeat;
}

#app {
  font-family: 'Tangerine', cursive;
  color: #2c3e50;
  padding: 50px;
}
</style>