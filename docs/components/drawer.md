---
title: Drawer
lang: zh-CN
---

# Drawer 抽屉

像抽屉一样的弹出层组件，在你不想使用 `Dialog` 的时候，可以用它代替，它与 `Dialog` 几乎一致，但拥有与 `Dialog` 完全不同的视觉效果。

## 基础用法

通过 `v-model` 指定，绑定显示状态。`title` 属性添加标题。

::: demo

Drawer/Basic

:::

## 不同方位

通过 `direction` 属性，使 `Drawer` 从不同方位出现。仅支持 `'l-r'`、`'r-l'`、`'t-b'`、`'b-t'`。

::: tip

`'l-r'`、`'r-l'`、`'t-b'`、`'b-t'` 的完整含义：

1. `l-r`: `'left to right'`
2. `r-l`: `'right to left'`
3. `t-b`: `'top to bottom'`
4. `b-t`: `'bottom to top'`

:::

::: demo

Drawer/Direction

:::

## 自定义

通过 `title` 属性自定义标题。`width` 属性自定义宽度，`height` 属性自定义高度。通过 `header`、`default`、`footer` 插槽定义对应区域内。设置 `:show-close="false"` 隐藏关闭按钮。

::: warning

注意！

1. `title` 属性为空或者不设置则无标题。
2. `header` 插槽会覆盖 `title` 属性，所以它们无法同时存在。
3. `width` 与 `height` 无法同时设置。`direction` 为`'l-r'` 或 `'r-l'`，请设置 `width`；为 `'t-b'` 或 `'b-t'` 请设置 `height`。

:::

::: demo

Drawer/Custom

:::

## 嵌套抽屉

`Drawer` 与 `Dialog` 一样支持嵌套，但也务必为子级 `Drawer` 添加 `append-to-body` 属性，以防止一些问题。

::: demo

Drawer/Nested

:::

与 `Dialog` 重复的属性不再做重复展示。如：`lock-scroll`、`click-mask-close`、`z-index`、`mask` 等。

## 阻止关闭

使用 `before-close` 属性，并绑定一个函数，则可阻止关闭。在关闭前会调用此函数，如果您不在此函数内手动关闭，则不会关闭。

::: tip

`before-close` 绑定的函数会接收一个参数，此参数是一个关闭函数，通过调用此函数手动关闭。

:::

::: warning

注意！虽然添加 `before-close` 之后会在关闭前阻止关闭，但如果是通过直接修改 `v-model` 绑定值关闭的话，则不受此属性影响。

:::

::: demo

Drawer/PreventClose

:::

## APIs

### 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| `v-model` | `Drawer` 显示/隐藏值 | `boolean` | —— |
| title | 标题 | `string` | —— |
| width | 宽度 | `string` | `'30%'` |
| height | 高度 | `string` | `'30%'` |
| direction | 方位 | `'l-r' \| 'r-l' \| 't-b' \| 'b-t'` |
| z-index | 同原生 CSS `z-index` | `number` | —— |
| show-close | 是否为显示关闭按钮 | `boolean` | `true` |
| append-to-body | 是否插入至 `body` | `boolean` | `false` |
| mask | 是否需要遮罩层 | `boolean` | `true` |
| lock-scroll | 是否锁定滚动条 | `boolean` | `true` |
| click-mask-close | 是否可点击遮罩层关闭 | `boolean` | `true` |
| before-close | 关闭前回调，可以阻止关闭。通过调用 `close` 参数函数手动关闭。 | `(close: () => void) => void` | `false` |

### 事件

| 事件名 | 事件触发时机 | 事件参数 |
| :---: | :---: | :---: |
| open | Dialog 打开时触发 | `(val: boolean) => void` |
| close | Dialog 关闭时触发 | `(val: boolean) => void` |

### 插槽

| 插槽名 | 插槽说明 |
| :---: | :---: |
| header | 头部区域，会替换 `title` 属性内容 |
| footer | 底部区域 |
