<template>
  <div id="app">
    <!-- <h1 class="page-title">Audax Society</h1> -->
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
  font-family: 'Tangerine', cursive;
  color: #2c3e50;
  padding: 50px;
}

h1.page-title {
  font-size: 5.0em;
  margin: 0em;
  padding: 0em;
  color: #000000;
}

h1, h2 {
  font-weight: bold;
}

li {
  margin: .2em 10px;
}

a {
  color: #42b983;
}

html {
  background: #4a3200;
  background-image: url("assets/bg1.png"), url("assets/bg2.png");
  background-repeat: repeat-x, repeat;
}
</style>
