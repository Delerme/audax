import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import QuestBoard from './quests/QuestBoard.vue'
import SocietyInfo from './info/SocietyInfo.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: QuestBoard },
  { path: '/info', component: SocietyInfo }
]

const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})