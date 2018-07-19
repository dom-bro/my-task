import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Home from './views/Home.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)
Vue.use(ElementUI)

new Vue({
  render: h => h(Home),
  router,
}).$mount('#app')
