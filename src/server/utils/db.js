const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

module.exports = {
  connect (p) {
    return low(
      new FileSync(path.join(process.cwd(), 'database', p), {
        defaultValue: [],
      })
    )
  },
}
