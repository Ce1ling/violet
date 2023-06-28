---
title: Alert
lang: zh-CN
---

# Alert 提示

对一些状态进行友好提示。

## 基础用法

我们为您提供了共 5种 类型的 Alert。

::: demo

Alert/Basic

:::

## 可关闭的

使用 `closable` 属性，设置 Alert 可被关闭。

::: demo

Alert/Closable

:::

## 携带图标

使用 `pre-icon` 属性，设置默认前置图标。

::: demo

Alert/HasIcon

:::

## 深色模式

使用 `dark` 属性，设置为深色默认。

::: demo

Alert/DarkMode

:::

## 设置居中

将 `center` 属性值为 `'text'`，为文本居中。设置为 `'all'`，为全部居中。

::: demo

Alert/SetCenter

:::

## 自定义图标

将 `pre-icon` 的值设置为 Violet 提供的 Icon 的名字即可。仅支持 Violet 提供的 Icon。

::: demo

Alert/CustomIcon

:::

## 自定义关闭

将 `close` 插槽，您可以将关闭图标设置为任何内容。

::: tip

对了，Alert 在关闭时会先触发一个 `close` 事件，你可以在此做一些事。

:::

::: demo

Alert/CustomClose

:::

## 携带标题

使用 `title` 属性，设置标题。它同样可以携带图标。

::: tip

如果您的 Alert 仅包含文本，可以使用简化的自闭合形式，因为 Violet 提供了 `content` 属性让您放置文本内容。

:::

::: demo

Alert/HasTitle

:::

## APIs

### 属性

| 属性名 | 说明 | 类型 | 默认值 | 是必需项 |
| :---: | :---: | :---: | :---: | :---: | 
| type | 类型 | `'primary' \| 'success' \| 'info' \| 'warning' \| 'danger'` | `'primary'` | `false` |
| dark | 是否为深色模式 | `boolean` | `false` | `false` |
| closable | 是否可关闭 | `boolean` | `fasle` | `false` |
| pre-icon | 是否需要前置图标 | `boolean` | `false` | `false` | `false` |
| center | 居中模式 | `'none' \| 'text' \| 'all'` | `'none'` | `false` |
| title | 标题 | `string` | —— | `false` |
| content | 内容 | `string` | —— | `false` |

### 事件

| 事件名 | 触发时机 | 参数 |
| :---: | :---: | :---: |
| close | 点击关闭时关闭前 | `(e: MouseEvent): void` |

### 插槽

| 插槽名 | 说明 |
| :---: | :---: |
| default | 定义默认内容 |
| close | 定义关闭区域内容 |