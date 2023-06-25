---
title: Button
lang: zh-CN
---


# Button 按钮

基础按钮组件，改善您的按钮。

## 基础用法

使用 `type` 属性，来定义按钮类型，`round` 属性来定义圆角按钮、`circle` 属性来定义圆形按钮。

::: tip

如果您的按钮 `type` 类型是 `primary`，则您可以省略 `type` 属性，因为它是默认值。

:::

::: demo 

Button/Basic

:::

## 加载状态

使用 `loading` 属性， 使按钮处于加载状态。您可以使用 `is-prefix` 属性来控制“加载图标”在左还是右。同时，您也可以自定义“加载图标”，分别使用 `prefix` 与 `suffix` 具名插槽。

::: warning

注意：
1. 如果您使用了“自定义图标”，那么 Violet 将认为您需要自定义加载时图标动画，若您不需要自定义，您可以在“自定义图标”上加上 `loading` 属性。
2. 如果您使用了 `suffix` 插槽，请将 `vi-button` 的 `prefix` 属性设置为 `false` (如 加载状态4 所示)，否则您将得到左右两个图标。

:::

::: demo

Button/Loading

:::

## 禁用状态

使用 `disabled` 属性， 使按钮处于禁用状态。

::: demo

Button/Disabled

:::

## 文字类型

使用 `text` 属性，来定义文本类型按钮。

::: tip

如果您不想要鼠标移入时的背景颜色，何不尝试一下 [Link](./link.md#下划线) 组件的去下划线写法呢？

:::

::: warning

请尽量不要与 `plain` 属性一起使用，虽然一起使用有额外效果，但没有什么意义，还可能触发未知的 `UI bug`。

:::

::: demo

Button/TextType

:::

## 自定义图标

使用 `prefix`、`suffix` 插槽，来放置图标。

::: demo

Button/CustomIcon

:::

## 自定义背景颜色

使用 `bg-color` 属性，来自定义按钮的背景颜色。

::: tip

不必担心，`Button` 的 `active` 和 `hover` 状态 Violet 将会自动为您计算。

:::

::: demo

Button/CustomBgColor

:::

## 自定义文字颜色

使用 `color` 属性，来自定义按钮的文字颜色。

::: demo

Button/CustomTextColor

:::

## 调整尺寸

使用 `size` 属性，可以调整按钮尺寸，一共内置三种尺寸：`'small' | 'normal' | 'large'`。默认为 `'normal'`。

::: demo

Button/Size

:::

## APIs

### 属性

| 属性名 | 说明 | 类型 | 默认值 | 是必需项 |
| :---: | :---: | :---: | :---: | :---: |
| type | 定义按钮类型 | `'primary' \| 'success' \| 'info' \| 'warning' \| 'danger'` | `'primary'` | `false` |
| text | 是否为文字按钮 | `boolean` | `false` | `false` |
| round | 是否为圆角按钮 | `boolean` | `fasle` | `false` |
| circle | 是否为圆形按钮 | `boolean` | `false` | `false` |
| disabled | 是否为禁用状态 | `boolean` | `false` | `false` |
| loading | 是否为加载状态 | `boolean` | `false` | `false` |
| bg-color | 定义按钮背景颜色 | `string` | —— | `false` |
| color | 定义按钮文字颜色 | `string` | —— | `false` |
| is-prefix | 加载时的图标是否在前面(左边) | `boolean` | `true` | `false` |
| plain | 是否为朴素的按钮 | `boolean` | `false` | `false` |
| size | 尺寸大小 | `'small' \| 'normal' \| 'large'` | `normal` | `false` |

### 插槽

| 插槽名 | 插槽说明 |
| :---: | :---: |
| prefix | 前置内容 |
| suffix | 后置内容 |