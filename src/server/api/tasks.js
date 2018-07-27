const db = require('../utils/db')
const tasks = db.connect('tasks.json')

module.exports = router => {
  router.get('/api/tasks', async ctx => {
    ctx.type = 'json'
    ctx.body = tasks
  })
  router.post('/api/createTask', async ctx => {
    const task = ctx.request.body
    tasks.push(task).write()

    ctx.type = 'json'
    ctx.body = {
      success: true,
    }
  })
}
