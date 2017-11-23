import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
