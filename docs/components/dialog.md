---
title: Dialog
lang: zh-CN
---

# Dialog 对话框

在不影响当前页面的情况下，进行一些页面相关操作。

## 基础用法

通过 `v-model` 绑定 `Dialog` 是否显示(它必须是 `boolean`)，使用 `title` 属性来定义头部内容、`width` 来定义宽度，标签体内容将会被渲染为主体内容。

::: demo

Dialog/Basic

:::

## 进阶用法

使用 `content` 属性，定义主体内容。通过 `show-close-btn`，来隐藏默认的关闭按钮。通过 `z-index` 可自定义 `Dialog` 的 CSS `z-index`。

::: tip

1. 如果您的 `Dialog` 仅包含简单的文本，可以直接使用 `title` + `content` 的形式进行简写，使代码更加简洁！
2. 如果您需要自定义的内容比较多，可以使用 `header`、`default`、`footer` 插槽，任意定义！

:::

::: warning

不过请注意，`title` 与 `header` 插槽不能一起使用，`content` 与 `default` 插槽也是如此。

:::

::: demo

Dialog/AdvancedUsage

:::

## 多层嵌套

有时您可能需要在一个 `Dialog` 中再打开一个 `Dialog`，此时，请尽量给子级 `Dialog` 加上 `append-to-body` 属性，即使未出现问题。

::: warning

一般来说，我们并不推荐嵌套，但如果确实存在此需求，请最好给子级 `Dialog` 加上 `append-to-body` 属性。

:::

::: demo

Dialog/Nested

:::

## 设置居中

我们提供的居中一共分为两种：内容居中、整体居中。使用 `center` 将内容居中，`box-center` 将整体居中。

::: tip

两种居中可以一起使用，如果使有嵌套的话，子级会继承父级的居中。

:::

::: demo

Dialog/SetCenter

:::

## 隐藏遮罩层

我们提供的居中一共分为两种：内容居中、整体居中。使用 `center` 将内容居中，`box-center` 将整体居中。

::: tip

两种居中可以一起使用，如果使有嵌套的话，子级会继承父级的居中。

:::

::: demo

Dialog/HideMask

:::

## 解锁滚动条

通过 `lock-scroll` 属性，来锁定/解锁滚动条。默认为锁定。

::: demo

Dialog/UnlockScoll

:::

## 可移动的

通过 `movable` 属性，来启用可拖拽的 `Dialog`。

::: tip

您还可以通过切换 `movable` 属性值达到切换可拖拽性的目的。

:::

::: demo

Dialog/Movable

:::

## 遮罩层不可关闭

通过 `click-mask-close` 属性，设置点击遮罩层时不可以关闭。默认可关闭。

::: tip

对了，`Dialog` 在打开和关闭时都会触发事件，分别是：`open`、`close`。

:::

::: demo

Dialog/MaskCannotClose

:::

## 关闭时销毁

使用 `destroy` 属性，设置关闭后销毁节点。默认不销毁。

::: demo

Dialog/DestroyClose

:::

## 阻止关闭

使用 `before-close` 属性，并绑定一个函数，则可阻止关闭。在关闭前会调用此函数，如果您不在此函数内手动关闭，则不会关闭。

::: tip

`before-close` 绑定的函数会接收一个参数，此参数是一个关闭函数，通过调用此函数手动关闭。

:::

::: warning

注意！虽然添加 `before-close` 之后会在关闭前阻止关闭，但如果是通过直接修改 `v-model` 绑定值关闭的话，则不受此属性影响。

:::

::: demo

Dialog/PreventClose

:::

## APIs

### 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| `v-model` | `Dialog` 显示/隐藏值 | `boolean` | —— |
| title | 标题 | `string` | —— |
| content | 主体内容 | `string` | —— |
| width | 宽度 | `string` | '50%' |
| z-index | 同原生 CSS `z-index` | `number` | —— |
| show-close-btn | 是否为显示关闭按钮 | `boolean` | `true` |
| append-to-body | 是否插入至 `body` | `boolean` | `false` |
| center | 是否将内容居中 | `boolean` | `false` |
| box-center | 是否将整体居中 | `boolean` | `false` |
| mask | 是否需要遮罩层 | `boolean` | `true` |
| movable | 是否可移动(拖动) | `boolean` | `false` |
| lock-scroll | 是否锁定滚动条 | `boolean` | `true` |
| click-mask-close | 是否可点击遮罩层关闭 | `boolean` | `true` |
| destroy | 是否在关闭时销毁节点 | `boolean` | `false` |
| before-close | 关闭前回调，可以阻止关闭。通过调用 `close` 参数函数手动关闭。 | `(close: () => void) => void` | `false` |

### 事件

| 事件名 | 事件触发时机 | 事件参数 |
| :---: | :---: | :---: |
| open | `Dialog` 打开时触发 | `(val: boolean) => void` |
| close | `Dialog` 关闭时触发 | `(val: boolean) => void` |

### 插槽

| 插槽名 | 插槽说明 |
| :---: | :---: |
| header | 头部区域，会替换 `title` 属性内容 |
| footer | 底部区域 |
