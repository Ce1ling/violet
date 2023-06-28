---
title: Switch
lang: zh-CN
---

# Switch 开关

仅用于两种状态之间进行切换，一般用于“开”/“关”。

## 基础用法

通过 `v-model` 指令，绑定并控制 `switch` 的状态。

::: demo

Switch/Basic

:::

## 自定义颜色

通过 `on-color`、`off-color`，来分别设置 `switch` “开”/“关” 状态的颜色。

::: demo

Switch/CustomColor

:::

## 禁用状态

使用 `disabled` 属性，来禁用 `switch`。

::: demo

Switch/Disabled

:::

## 加载状态

使用 `loading` 属性，设置为加载状态。

::: demo

Switch/Loading

:::

## 描述内容

使用 `on-text`、`off-text` 属性，来添加描述信息，注意，它们仅能添加文字类型描述。

::: demo

Switch/Desc

:::

## 图标描述

使用 `on-icon`、`off-icon` 属性，来设置图标描述，所有 Violet 内置的图标您都可以使用。

::: demo

Switch/IconDesc

:::

## 内部模式（描述内容）

使用 `is-inside` 属性，调整描述内容为“内部模式”，如下所示。

::: demo

Switch/InsideMode

:::

## 自定义内容

使用 `on`、`off` 插槽，来自定义 `on`/`off` 状态内容。

::: tip

如果单纯的文字与图标无法满足您(或是您想使用自定义图标)，您可以使用这两个插槽自定义内容。  

:::

::: warning

**注意**：这两个插槽的优先级非常高，当您使用了这两个插槽后，属性内容都会被覆盖。并且，由于我们无法预知您会在插槽内放置什么内容，所以可能导致我们的默认样式无法达到您想要的效果，此时，需要您手动补充样式代码。

:::

::: demo

Switch/CustomContent

:::

## 调整尺寸

使用 `size` 属性，调整尺寸，共支持: `'small' | 'normal' | 'large'`，默认为 `'normal'`。

::: demo

Switch/Size

:::

## APIs

### 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| v-model | 开关状态值 | `boolean` | —— |
| disabled | 禁用状态 | `boolean` | `false` |
| loading | 加载状态 | `boolean` | `false` |
| is-inside | 是否为内部模式 | `boolean` | `false` |
| on-color | 定义“开”状态的颜色 | `string` | —— |
| off-color | 定义“关”状态的颜色 | `string` | —— |
| on-text | 定义“开”状态描述文字 | `string` | —— |
| off-text | 定义“关”状态描述文字 | `string` | —— |
| on-icon | 定义“开”状态描述图标 | `string` | —— |
| off-icon | 定义“关”状态描述图标 | `string` | —— |
| width | 定义宽度 | `string` | —— |

### 插槽

| 插槽名 | 插槽说明 |
| :---: | :---: |
| on | “开” 状态内容 |
| off | “关” 状态内容 |