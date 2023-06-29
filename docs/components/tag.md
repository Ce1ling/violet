---
title: Tag
lang: zh-CN
---

# Tag 标签

对一些数据进行标记。

## 基础用法

直接使用即可，无需绑定属性。若您需要切换类型，可使用 `type` 属性切换。

::: demo

Tag/Basic

:::

## 禁用状态

使用 `disabled` 属性，使其被禁用。

::: demo

Tag/Disabled

:::

## 可关闭的

使用 `closable` 属性，使其可被关闭。

::: warning

**注意**：此功能仅仅是帮您移除了 DOM 结构，也就是说，如果您是用数据渲染的(比如: `v-for`)，我们无法更改到您的数据。

这种情况您需要自行修改数据，幸运的是，我们为您提供了一个 `close` 事件，它在标签关闭后触发。

:::

::: demo

Tag/Closable

:::


## API

### 属性

| 名称 | 说明 | 类型 | 默认值 | 是必需的 |
| :---: | :---: | :---: | :---: | :---: |
| type | 类型 | `'primary' \| 'success' \| 'info' \| 'warning' \| 'danger'` | `'primary'` | `false` |
| broder | 是否需要边框 | `boolean` | `false` | `false` |
| closable | 是否可关闭 | `boolean` | `false` | `false` |
| disabled | 是否为禁用 | `boolean` | `false` | `false` |
| round | 是否为圆角 | `boolean` | `false` | `false` |

### 事件

| 名称 | 触发时机 | 参数 |
| :---: | :---: | :---: |
| close | 关闭后触发 | `(e: MouseEvent): void` |

### 插槽

| 插槽名 | 说明 |
| :---: | :---: |
| default | 定义默认内容 |