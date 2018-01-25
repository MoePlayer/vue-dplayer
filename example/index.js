import Vue from 'vue'
import App from './App.vue'
import VueDPlayer from '../src/index'

Vue.use(VueDPlayer)

new Vue({
  el: '#app',
  render: h => h(App)
})
