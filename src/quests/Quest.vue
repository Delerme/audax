<template>
  <div class="quest">
    <h1>{{ model.title }}</h1>
    <h2>Lvl {{ model.difficulty }}</h2>
    <button class="toggle-description" v-on:click.stop="toggleDescription"></button>
    <template v-if="showDescription">
      <p>{{ model.description }}</p>
    </template>
    <template v-else>
      <h2>Reward: {{ model.reward }}</h2>
      <h2>Party: {{ model.party }}</h2>
    </template>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import QuestModel from './QuestModel'

@Component({
  props: {
    model: QuestModel
  }
})
export default class Quest extends Vue {
  model: QuestModel
  showDescription: boolean = false

  toggleDescription() {
    this.showDescription = !this.showDescription;
  }
}
</script>


<style>
div.quest {
  width: 30em;
  height: 10em;
  background-color: #cecece;
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-between;
}

button.toggle-description {
  margin: -1.1em;
  margin-left: -4em;
  padding: 0em;
  width: 0em;
  height: 0em;
  border-top: 0em solid transparent;
  border-bottom: 3em solid transparent;
  border-left: 0em solid transparent;
  border-right: 3em solid black;
  background: none;
}

h1 {
  margin: 0em;
  min-width: 70%;
  max-width: 75%;
  font-style: italic;
}

h2 {
  margin: 0em;
}

h3 {
  margin: 0em;
}

p {
  width: 100%;
  font-size: 1.4em;
}

</style>