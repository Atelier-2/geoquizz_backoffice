import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios' 

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

window.axios = axios.create({
  baseURL: 'http://docketu.iutnc.univ-lorraine.fr:58181'  
});

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
