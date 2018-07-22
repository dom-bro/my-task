const fs = require('fs')
const path = require('path')

module.exports = router => {
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
