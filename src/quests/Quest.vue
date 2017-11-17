<template>
  <div class="quest">
    <h1>{{ model.title }}</h1>
    <p>{{ model }}</p>
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
  // TODO: bind click to see description
}
</script>


<style>
div.quest {
  width: 30em;
  height: 10em;
  background-color: #cecece;
  padding: 1em;
}
</style>