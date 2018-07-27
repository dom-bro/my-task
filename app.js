const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')

const router = require('./src/server/api')

app.use(logger())
app.use(bodyParser())
app.use(router.routes())

app.listen(8088)
console.log('listening on port 8088 ...')
