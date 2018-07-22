const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')

const router = require('./src/server')

app.use(logger())
app.use(router.routes())

app.listen(8088)
console.log('listening on port 8088 ...')
