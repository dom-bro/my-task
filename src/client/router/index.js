import Home from '@/src/views/Home'

const PAGE_NOT_FOUND = import('@/src/views/404')

let url
const X = '/src/views/x/' // 通配路由
const routes = [
  {
    path: `${X}*`,
    async component () {
      try {
        return await import(`@/src/views/x/${url}`)
      } catch (e) {
        console.error(e)
        return PAGE_NOT_FOUND
      }
    },
    beforeEnter (to, from, next) {
      url = to.path.substr(X.length)
      next()
    },
  },
  {
    path: '*',
    component () {
      return PAGE_NOT_FOUND
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
