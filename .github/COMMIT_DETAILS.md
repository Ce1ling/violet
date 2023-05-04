# Commit 规范

这里将为你介绍 `commit` 规范具体含义。

如: `type(scope): description`。

## type

用于描述本次提交的类型。

1. `feat`: 新增功能、特性。

2. `fix`: 修复 `bug`。

3. `docs`: 文档相关修改。

4. `perf`: 代码性能提升，不能影响任意现有功能。

5. `refactor`: 代码重构，不能影响任意现有功能。

6. `style`: 不是 `CSS` 修改，而是代码样式变动，比如: 删除所有分号。

7. `revert`: `commit` 回退。

8. `release`: 版本发布。

9.  `test`: 新增或修改测试工具、测试用例。

11. `build`: 构建工具的变动(`vite`、`npm`)。

12. `ci`: `ci` 相关变动。

13. `improvement`: 代码改进。

14. `workflow`: 工作流相关文件修改。

15. `chore`: 其他，不是上述中的一种任意一种类型。

## scope

用于描述本次提交作用的范围。

**注意！** `scope` 是可选的，没有明确的作用范围可以省略 `scope`。明确的范围如：对一个组件进行修改，`scope` 必须为 `components`。

1. `components`: 影响组件的变动。

2. `docs`: 影响文档的变动。

3. `directives`: 影响指令的变动。

4. `hooks`: 影响组合式函数(`hook`)的变动。

5. `utils`: 影响工具函数的变动。

6. `violet-ui`: 影响 `violet-ui` 相关。

7. `test-utils`: 影响测试工具的变动。

8. `theme-chalk`: 影响主题的变动。

9.  `project`: 影响项目文件。

10. `core`: 影响核心文件。

11. `ci`: 影响 `ci` 类文件。

12. `dev`: 影响开发的变动。

13. `build`: 影响构建的变动。

14. `deploy`: 影响部署的变动。

15. `other`: 影响其他。

16. `color`: 影响颜色的变动。

17. `border`: 影响边的变动。

18. `var`: 影响变量的变动。

19. `typography`: 影响排版的变动。

## description

本次提交具体的描述信息，描述本次提交完成的任务，一般不超过 72 个字符。