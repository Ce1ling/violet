# Violet UI 项目贡献指南

嗨！很高兴你能来到这里，这代表你想为 Violet UI 做出一些贡献了，不是吗？

非常欢迎你为 Violet UI 做出贡献，但考虑到多人协作的规范化问题，所以你需要花几分钟阅读一下以下注意事项。

在你认真阅读过以下注意事项之后，就可以开始贡献了！

## Issue 规范

- 当你遇到或发现 Violet UI 的一些问题后，或是你认为 Violet UI 应该实现一个功能但还未实现，你可以提交一个 `issue` 来使开发者修复或完成你的问题。
- 在提交 `issue` 之前，请手动搜索一下，查看是否已经有相关 `issue`。如果有，请不要再次提交了。

## Pull Request 规范

- **注意！** 贡献前请将本项目 fork 到你自己的仓库，请勿直接在本项目中创建分支。

- `git commit` 必须符合 `Conventional commit` 规范，如: `type(scope): description`。具体如下：

  1. `type` 必须为: `feat`、`fix`、`chore`、`docs` `perf`、`refactor`、`style`、`revert`、`release` `test`、`improvement`、`build`、`ci` 中的一个。
  
  2. `scope` 必须为: `components`、`docs`、`directives`、`hooks`、`utils`、`violet-ui` `test-utils`、`theme-chalk`、`project`、`core`、`ci`、`dev`、`build`、`deploy`、`other`、`color`、`border`、`var`、`typography`、`tokens`、`locale` 中的一个。
  
  3. `description` 描述信息不要超过 72 个字符。

- 假设你现在正在贡献 `dialog` 组件, 你可以这样提交: 

  1. 当你修复了一个 `bug`:  `fix(components): [dialog] 修复 xxx bug`
  
  2. 当你新增了一个功能: `feat(components): [dialog] 新增 xxx 功能`
  
- 请保证运行 `npm run build` 后能够正确打包项目。

- 请不要提交任何打包文件

- 请在提交 `PR` 之前进行 `rebase` 操作。
