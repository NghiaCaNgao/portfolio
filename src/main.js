import Vue from 'vue'
import App from './App.vue'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import { uniFacebookF, uniGithub, uniLinkedin, uniYoutube } from 'vue-unicons/dist/icons'
import "animate.css"
import "./assets/styles/theme.css"

Unicon.add([uniFacebookF, uniYoutube, uniGithub, uniLinkedin])
Vue.use(Unicon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
