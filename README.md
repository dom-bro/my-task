# 🚫 💩 Code Lint

> Always run linters against staged git files and don't let 💩 slip into your code base 😄!

### Rules & Auto-fix

1.  [Prettier](https://prettier.io/)

Apply on `*.{js,vue,json,scss,md}`

个性化配置在 `.prettirerc.js` 文件

2.  [eslint-config-standard](https://standardjs.com/readme-zhcn.html)

Only for `*.{js,vue}`

个性化配置在 `.eslintrc.js` 文件

3.  [eslint-plugin-vue:essential](https://github.com/vuejs/eslint-plugin-vue)

Only for `*.vue`

### ❗️ 注意

- lint 只对 staged 的文件发生作用
- lint 会在 commit 时自动触发（pre-commit 钩子），也  可以手动 `npm run lint` 或 `yarn lint`，所以当你 commit 代码之后发现自己的代码发生了格式上的  微妙变化，请不要惊慌 😄，都是 lint 做的

# 👮 Git Flow

主分支： master(基于  此分支迁出新分支)

commit： 执行 commit 命令时会自动执行 lint 格式化代码（不要在 commit 命令后  使用 `--no-verify` 跳过  格式检查）

commit-msg： commit 时备注的提交信息至少 5 个字符 😏
