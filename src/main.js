import Vue from 'vue'
import App from './App.vue'
import * as Projects from './components/test.js'

new Vue({
  el: '#app',
  render: h => h(App)
})

Projects.test()