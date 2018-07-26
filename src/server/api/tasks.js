const db = require('../utils/db')
const tasks = db.connect('tasks.json')

module.exports = router => {
  router.get('/api/tasks', async (ctx, next) => {
    ctx.type = 'json'
    ctx.body = tasks
  })
  router.get('/api/createTask', async (ctx, next) => {
    ctx.type = 'json'
    tasks
      .push({
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
      .write()

    ctx.body = {
      success: true,
    }
  })
}
