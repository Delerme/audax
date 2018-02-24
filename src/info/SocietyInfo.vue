<template>
  <div class="info-container">
    <div id="info-1" class="info-sheet">
      <h1 class="info-title">The Audax Society</h1>
      <hr>
      <p class="info-text">
        The Audax Society is a shared campaign of episodic,
        single-session D&ampD adventures that follows
        the Society's quest to collect and study magical
        artifacts. Players can create
        multiple characters that advance as they play with
        different parties, different players, and even
        different DMs! All successful adventures contribute
        to the Society's success, adding magical items to
        the arsenal that
        future adventuring parties can utilize. This format
        is especially useful for players that can't commit to 
        regularly scheduled long-form sessions. If you're
        interested in playing or DMing, or learning to do
        either, this is a great way to start.
      </p>
    </div>
    <div id="info-2" class="info-sheet">
      <h1 class="info-title">Shared Campaign</h1>
      <hr>
      <p class="info-text">
        Audax sessions use D&ampD 5th Edition rules with minor
        variations for creating, leveling, and obtaining equipment
        for characters:
        <ul>
          <li>
            Characters are made at Lvl 3 or 1 level below the
            player's highest level character (if you have a Lvl 6
            character you can make new characters at Lvl 5)
          </li>
          <li>
            New character stats are determined using point-buy
          </li>
          <li>
            Characters gain 2 checkpoints (CX) per session. It
            takes 4 CX to level up to Lvls 4 and 5, and 8 CX
            for levels beyond that.
          </li>
          <li>
            Characters gain 1 treasure point (TP) per session.
            These points can be used to buy a variety of magic items
            from the Society.
          </li>
          <li>
            Instead of aquiring equipment during adventures,
            the Society outfits parties with equipment
            within a budget (so individual character gold is
            typically useless)
          </li>
        </ul>
      </p>
    </div>
    <div id="info-3" class="info-sheet">
      <h1 class="info-title">Getting Started</h1>
      <hr>
      <p class="info-text">
        When you're ready to play you can sign up for a quest on the <a href='/#/'>Quest Board</a>
        which refreshes each week.
        <ul>
          <li>
            Each quest corresponds to a day of the week
          </li>
          <li>
            Sessions are 2 hours long and start between 5pm and 6pm, when the party is available
          </li>
          <li>
            Beginner sessions start with 10-30 minutes of character creation and mock scenarios
          </li>
          <li>
            Bringing a laptop or tablet to sessions is recommended
          </li>
        </ul>
      </p>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class SocietyInfo extends Vue {
  mounted() {
    console.log(this.$el.childNodes);
  }
}
</script>


<style>
div.info-container {
  display:inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  font-family: 'Bellefair', serif;
}

div.info-sheet {
  background: #f1e9d2;
  border: .2em solid #000000;
  padding: 2em;
}

div#info-1 {
  width: 37em;
  height: 20em;
}

div#info-2 {
  width: 20em;
  height: 45em;
  margin-top: 3em;
  margin-left: -2em;
}

div#info-3 {
  width: 30em;
  height: 20em;
  margin-top: -30em;
  margin-right: 22%;
}

h1.info-title {
  margin: 0em 0em 0em 0em;
}

p.info-text {
  font-size: 1.3em;
}

hr {
  width: 90%;
}
</style>