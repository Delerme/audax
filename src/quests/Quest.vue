<template>
  <div class="quest">
    <h1>{{ model.title }}</h1>
    <h2>Lvl {{ model.difficulty }}</h2>
    <button class="toggle-description" @click.stop="toggleDescription"></button>
    <template v-if="showDescription">
      <p>{{ model.description }}</p>
    </template>
    <template v-else>
      <div class="rewards">
        <h2>Rewards:</h2>
        <hr/>
        <ul>
          <li v-for="reward of model.rewards">{{ reward }}</li>
        </ul>
      </div>
      <div class="slots">
        <h2>Adventuring Party</h2>
        <hr/>
        <template v-for="(email, index) of model.party">
          <signup-slot :email="email" :index="index" @requestSlot="updateSlot">
          </signup-slot>
        </template>
      </div>
    </template>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import QuestModel from './QuestModel'
import SignupSlot from './signups/SignupSlot.vue'

@Component({
  components: {
    SignupSlot
  },
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

  updateSlot(email: string, index: number) {
    this.model.party[index] = email;
    //TODO: save quest with service
  }
}
</script>


<style>
div.quest {
  width: 20em;
  height: 30em;
  background-color: #cecece;
  padding: 1em;
  margin: 1em 5em 1em 0em;
  float: left;
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

ul {
  list-style-type: none;
  padding: 0;
}

h1 {
  margin: 0em;
  min-width: 65%;
  max-width: 70%;
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
  height: 80%;
  font-size: 1.4em;
}
</style>
