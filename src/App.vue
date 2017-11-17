<template>
  <div id="app">
    <h1>Audax Society</h1>
    <quest v-bind:model="testQuest"></quest>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import QuestModel from './quests/QuestModel'
import Quest from './quests/Quest.vue'

@Component({
  components: {
    Quest
  }
})
export default class App extends Vue {
  testQuest: QuestModel = new QuestModel("TestQuest");

  mounted() {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding: 50px;
}

h1, h2 {
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
