---
title: Toast
lang: zh-CN
---

# Toast 轻提示

轻提示组件，对于一些操作弹出轻型提示。

## 基础用法

从 Violet 中导入 `Toast` 方法，调用即可。

::: demo

Toast/Basic

:::

## 可关闭的

设置 `closable` 属性为 `true`，开启可手动关闭功能。

::: demo

Toast/Closable

:::

## 使用 HTML 字符串

设置 `isHtmlStr` 属性为 `true`，可以在内容中写入 `HTML` 元素并渲染。

::: warning

请注意，在网站上动态的渲染 `HTML` 是非常危险的行为。所以，请确保此 `HTML` 渲染绝对的安全，否则请勿使用 `HTML` 渲染。<br />
再次注意，一个原则是：永远不要相信用户的输入。所以，你不该在任何情况下将用户的输入作为 `HTML` 渲染。

:::

::: demo

Toast/HtmlStr

:::

## 不会自动关闭

设置 `duration` 属性为 `0`，Toast 就不会自动关闭。

::: demo

Toast/NotAutoClose

:::

## 自定义图标

通过 `prefix`，自定义前置图标，目前仅能使用 Violet 提供的图标。

::: demo

Toast/CustomIcon

:::

## APIs

### 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| type | 示类型 | `string` | `'info'` |
| content | 内容 | `string` | —— |
| duration | 存在时间，设置为 `0` 将不会自动关闭 | `number` | `3000` |
| closable | 是否可手动关闭 | `boolean` | `false` |
| isHtmlStr | 是否使用 `HTML` 字符串 | `boolean` | `false` |
| prefix | 自定义 `Icon` | `string` | —— |

### 方法

`Toast` 调用后会返回当前 `Toast` 实例，如果想手动关闭，可以调用实例的 `close` 方法。

| 方法名 | 方法说明 |
| :---: | :---: |
| close | 手动关闭 `Toast` |
