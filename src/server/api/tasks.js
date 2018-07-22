const fs = require('fs')
const path = require('path')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(path.join(__dirname, '../../database/sql.db'))
// db.run(`create table tableA(name text)`)
console.log(db.run('.tables'))

module.exports = router => {
  router.get('/api/sqlite', async (ctx, next) => {})
  router.get('/api/createTask', async (ctx, next) => {
    ctx.type = 'json'

    const tasks = require('../../database/tasks')

    tasks.push({
      title: 'hello',
      status: 'draft',

      wiki: [],
      ui: ['dfs'],
      api: [],

      publish: [],

      branch: '',
      backend: '',
      qa: '',
    })

    const res = fs.writeFileSync(
      path.join(__dirname, '../../database/tasks.json'),
      JSON.stringify(tasks, null, 2)
    )

    console.log(res)

    ctx.body = {
      success: true,
    }
  })
  router.get('/api/getTasks', async (ctx, next) => {
    ctx.type = 'json'

    ctx.body = require('../../database/tasks')
    next()
  })
}
