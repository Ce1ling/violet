---
title: Message
lang: zh-CN
---

# Message 轻提示

轻提示组件，对于一些操作弹出轻型提示。

## 基础用法

Violet 为每种类型都提供了静态方法，直接调用即可。

::: demo

Message/Basic

:::

## 可关闭的

设置 `closable` 属性为 `true`，开启可手动关闭功能。

::: tip

上方提供了静态方法的使用方式，当然也有完整写法，如下所示。

:::

::: demo

Message/Closable

:::

## HTML 字符串

设置 `isHtmlStr` 属性为 `true`，可以在内容中写入 `HTML` 元素并渲染。

::: warning

请注意，在网站上动态的渲染 `HTML` 是非常危险的行为。所以，请确保此 `HTML` 渲染绝对的安全，否则请勿使用 `HTML` 渲染。<br />
再次注意，一个原则是：永远不要相信用户的输入。所以，你不该在任何情况下将用户的输入作为 `HTML` 渲染。

:::

::: demo

Message/HtmlStr

:::

## 不自动关闭

设置 `duration` 属性为 `0`，Message 就不会自动关闭。

::: demo

Message/NotAutoClose

:::

## 自定义图标

通过 `prefix`，自定义前置图标，目前仅能使用 Violet 提供的图标。

::: demo

Message/CustomIcon

:::

## 设置位置

通过 `position` 属性，可以设置消息出现的位置。

::: warning

**注意**：不要同时使用多种位置，否则它会出现问题；依次点击以下示例按钮您即可查看到问题所在！

Q: 很明显这是个 `bug`，为什么不解决呢？

A: 问得好，因为我懒得搞，有本事你就来提 `PR`！

:::

::: demo

Message/Position

:::

## APIs

### 属性

| 属性名 | 说明 | 类型 | 默认值 | 是必需项 |
| :---: | :---: | :---: | :---: | :---: |
| type | 示类型 | `'primary' \| 'success' \| 'info' \| 'warning' \| 'danger'` | —— | `true` |
| content | 内容 | `string` | —— | `true` |
| duration | 存在时间，设置为 `0` 将不会自动关闭 | `number` | `3000` | `false` |
| closable | 是否可手动关闭 | `boolean` | `false` | `false` |
| isHtmlStr | 是否使用 `HTML` 字符串 | `boolean` | `false` | `false` |
| prefix | 自定义图标 | `string` | —— | `false` |
| z-index | 同原生 `CSS z-index` | `number` | —— | `false` |
| position | 设置出现位置 | `'t-l' \| 't-m' \| 't-r' \| 'b-l' \| 'b-m' \| 'b-r' ` | `'t-m'` | `false` |

### 方法

`Message` 调用后会返回当前 `Message` 实例，如果想手动关闭，可以调用实例的 `close` 方法。

| 方法名 | 说明 |
| :---: | :---: |
| close | 手动关闭 `Message` |
