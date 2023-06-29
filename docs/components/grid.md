---
title: Grid
lang: zh-CN
---

# Grid 布局

栅格布局组件，快速布局。

## 基础使用

使用 `vi-row` 来定义行，`vi-col` 来定义列。多列时，默认有 `10px` 的间距。

::: demo

Grid/Basic

:::

## 设置间距

通过 `gap` 属性，设置列之间的间距。它默认是 `10px`，你可以设置更大、更小或是清除。

::: demo

Grid/SetMargin

:::

## 自由布局

在 `vi-col` 上设置 `span` 属性，来设置它所占的宽度。你可以根据 `vi-col` 的数量来计算设置 `span`，它的默认值是 `1`。

::: demo

Grid/FreeLayout

:::

## 对齐方式

在 `vi-row` 上设置 `justify` 属性，来设置对齐方式。我们采用了 `flex` 布局，所以你可以设置 `flex` 布局的所有对齐属性。

::: demo

Grid/AlignMethod

:::

## APIs

### Row 属性

| 属性名 | 说明 | 类型 | 默认值 |
| :---: | :---: | :---: | :---: |
| gap | 列间距 | `string` | `'10px'` |
| justify | 垂直对齐方式 | `'start' \| 'center' \| 'end' \| 'space-between' \| 'space-around' \| 'space-evenly'` | `'start'` |
| align | 水平对齐方式 | `'start' \| 'center' \| 'end'` | `'start'` |

### Row 插槽

| 插槽名 | 说明 |
| :---: | :---: |
| default | 定义默认内容 |

### Col 属性

| 属性名 | 说明 | 类型 | 默认值 |
| :---: | :---: | :---: | :---: |
| span | 宽度占比 | `string \| number` | `1` |

### Col 插槽

| 插槽名 | 说明 |
| :---: | :---: |
| default | 定义默认内容 |