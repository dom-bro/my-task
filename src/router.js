import VueRouter from 'vue-router'

import User from './views/User.vue'
import Category from './views/Category.vue'

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  // 动态路由
  { path: '/user/:id', component: User },
  // 嵌套路由
  {
    path: '/category/:category',
    component: Category,
    children: [
      {
        path: ':bookId',
        component: {
          template: `<div>{{ $route.params.bookId }}</div>`
        }
      }
    ]
  }
]

export default new VueRouter({
  routes
})
