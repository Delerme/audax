<template>
  <div class="quest">
    <h1 class="quest-title">{{ model.title }}</h1>
    <h2 class="quest-lvl">Lvl {{ model.difficulty }}</h2>
    <button class="toggle-description" @click.stop="toggleDescription"></button>
    <template v-if="showDescription">
      <p class="quest-desc">{{ model.description }}</p>
    </template>
    <template v-else>
      <div class="rewards">
        <ul>
          <li v-for="reward of model.rewards">{{ reward }}</li>
        </ul>
      </div>
      <div class="slots">
        <h2 class="quest-party">Adventuring Party</h2>
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
import QuestService from './QuestService'
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
    new QuestService().updateQuestParty(this.model.id, index, email);
  }
}
</script>


<style>
div.quest {
  width: 20em;
  height: 30em;
  background: #f1e9d2;
  padding: 1em;
  margin: 1em 1.5em 1em 0em;
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

div.rewards ul {
  list-style-type: none;
  font-size: 2.0em;
  padding: 0;
}

h1.quest-title {
  margin: 0em;
  font-size: 2.3em;
  min-width: 70%;
  max-width: 73%;
}

h2.quest-lvl, h2.quest-party {
  margin: 0em;
  font-size: 2.0em;
}

h3 {
  margin: 0em;
  font-size: 2.0em;
}

p.quest-desc {
  width: 100%;
  height: 80%;
  font-size: 2.0em;
}
</style>
