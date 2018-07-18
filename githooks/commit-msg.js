require('colors')
const fs = require('fs')
const path = require('path')

try {
  const COMMIT_EDITMSG = path.join(process.cwd(), '.git/COMMIT_EDITMSG')
  const msg = fs.readFileSync(COMMIT_EDITMSG, 'utf8')
  if (msg.trim().length < 5) {
    console.error('😏 提交信息至少要 5 个字'.red)
    process.exit(1)
  }
} catch (e) {
  console.error(e)
  process.exit(1)
}
