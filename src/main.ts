import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import QuestBoard from './quests/QuestBoard.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: QuestBoard }
]

const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})