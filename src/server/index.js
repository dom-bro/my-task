const Router = require('koa-router')
const router = new Router()
const all = require('require-dir')('.', {
  recurse: true,
})

traverseRoute(all)

module.exports = router

function traverseRoute (obj) {
  for (let key in obj) {
    let val = obj[key]
    if (typeof val === 'object') traverseRoute(val)
    else if (typeof val === 'function') val(router)
    else throw new Error('🐛 Expect route to be a function!')
  }
}
