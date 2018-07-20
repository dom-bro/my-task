import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import store from '@/src/application/store'
import mixin from '@/src/application/mixin'
import router from '@/src/application/router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.mixin(mixin)

new Vue({
  store: new Vuex.Store(store),
  router: new VueRouter(router),
}).$mount('#app')
