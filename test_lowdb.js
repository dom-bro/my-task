// const path = require('path')
// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')

// const db = low(new FileSync('database/tasks.json', {defaultValue: []}))
// const fs = require('fs')

// fs.writeFileSync('./src/database/task.json', '{}')

require('./src/server/api/tasks')

// db.push({a: 1})
//   .write()
// db.get('tasks')
//   .push({
//     hello: 1
//   })
//   .write()
