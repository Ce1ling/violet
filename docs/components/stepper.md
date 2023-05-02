---
title: Stepper
lang: zh-CN
---

# Stepper 步进器

根据步数进行 增加/减少 操作。

## 基础用法

使用 `v-model` 指令，绑定数字内容。

::: demo

Stepper/Basic

:::

## 禁用状态

使用 `disabled` 属性，禁用步进器。

::: demo

Stepper/Disabled

:::

## 自定步数

使用 `step` 属性，自定义 “加”/“减” 步数。

::: demo

Stepper/CustomStep

:::

## 限制最大/最小值

使用 `min`、`max` 属性，分别设置最小值与最大值。当然，您也可以单独使用其中一个。

::: demo

Stepper/LimitMaxMin

:::

## 保留小数

使用 `to-fixed` 属性，保留小数。根据 `to-fixed` 的值保留小数位数。

::: tip

使用了 `to-fixed`，您就可以将 `step` 设置为小数进行 加/减 了。

:::

::: demo

Stepper/ToFixed

:::

## 按钮位置

使用 `position` 属性，定义 加/减 按钮的位置。仅支持 `'left'` / `'right'`。

::: demo

Stepper/ButtonPosition

:::

## 定义图标大小

使用 `icon-size` 属性，自定义图标大小。

::: tip

一般您不需要此属性，因为 Violet 设置的图标大小正好合适。但如您有特殊需求，可以使用此属性自定义。

:::

::: demo

Stepper/CustomIconSize

:::

## APIs

### 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| `v-model` | 绑定步进器的值 | `number` | —— |
| disabled | 是否为禁用状态 | `boolean` | `false` |
| step | 步数 | `number` | `1` |
| max | 最大值 | `number` | `Infinity` |
| min | 最小值 | `number` | `-Infinity` |
| to-fixed | 保留小数 | `number` | —— |
| position | 按钮位置 | `'normal' \| 'left' \| 'right'` | `'normal'` |
| icon-size | 图标大小 | `string` | —— |
