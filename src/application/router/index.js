const Home = () => import('@/src/views/Home')

let url
const routes = [
  {
    path: '*',
    async component () {
      try {
        return await import(`@/${url}`)
      } catch (e) {
        return import('@/src/views/404')
      }
    },
    beforeEnter (to, from, next) {
      url = to.path.substr(1)
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
