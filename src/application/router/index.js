import Home from '@/src/views/Home'

let url
const X = '/x/' // 通配路由
const routes = [
  {
    path: `${X}*`,
    async component () {
      try {
        return await import(`@/src/views/x/${url}`)
      } catch (e) {
        return import('@/src/views/404')
      }
    },
    beforeEnter (to, from, next) {
      url = to.path.substr(X.length)
      next()
    },
  },
  {
    path: '/',
    component: Home,
  },
]

export default {
  routes,
}
