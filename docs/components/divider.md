---
title: Divider
lang: zh-CN
---

# Divider 分割线

以最简单的方式，分割不同区域内容。

## 基础用法

用以分割区域。

::: demo

Divider/Basic

:::

## 添加标注

`vi-divider` 的标签体内容被认为是标注内容。使用 `position` 属性，定义标注位置，默认为 `start`。

::: demo

Divider/AddLabel

:::

## 设置方向

使用 `direction` 属性，设置分割线方向，它仅支持 `vertical` 与 `horizontal`。默认为 `horizontal`。

::: demo

Divider/SetDirection

:::

## 定义边距

使用 `margin` 属性，自定义外边距。

::: demo

Divider/CustomMargin

:::

## 定义厚度

使用 `thick` 属性，定义线条厚度，不过 Violet 不建议您设置的非常大(因为这可能导致一些 UI `bug`)。

::: demo

Divider/CustomThick

:::

## 定义颜色

使用 `color` 属性，定义线条颜色。

::: demo

Divider/CustomColor

:::

## 定义线条样式

使用 `border-style` 属性，定义线条样式。它的值与 CSS `border-style` 接受的值完全相同！

::: tip

因为它完全等于 CSS `border-style`，所以，完整取值请参见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style)。

:::

::: demo

Divider/CustomLineStyle

:::

## APIs

### 属性

| 属性名 | 说明 | 类型 | 默认值 | 是必需项 |
| :---: | :---: | :---: | :---: | :---: |
| margin | 边距 | `string` | `'18px'` | `false` |
| thick | 厚度 | `string` | `'1px'` | `false` |
| color | 颜色 | `string` | —— | `false` |
| border-style | 样式 | `string` | `'solid'` | `false` |
| position | 标注内容的位置 | `'start' \| 'center' \| 'end'` | `'start'` | `false` |
| direction | 方向 | `'horizontal' \| 'vertival'` | `'horizontal'` | `false` |

### 插槽

| 插槽名 | 说明 |
| :---: | :---: |
| default | 定义默认区域 |