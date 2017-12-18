<template>
  <div id="app">
    <h1>Audax Society</h1>
    <template v-for="quest of quests">
      <quest :model="quest"></quest>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import QuestModel from './quests/QuestModel'
import Quest from './quests/Quest.vue'
import QuestService from './quests/QuestService'

@Component({
  components: {
    Quest
  }
})
export default class App extends Vue {
  quests: QuestModel[] = []

  mounted() {
    this.getQuestList();
  }

  async getQuestList() {
    this.quests = await new QuestService().getQuestList();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  padding: 50px;
}

h1, h2 {
  font-weight: bold;
}

ul {
  list-style-type: lao;
  padding: 0;
}

li {
  /*display: inline-block;*/
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
