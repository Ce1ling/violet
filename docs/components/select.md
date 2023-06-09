---
title: Select
lang: zh-CN
---

# Select 选择器

对多项内容进行选择。

## 基础使用

使用 `v-model` 绑定当前选中项，提供 `options` 数据渲染选项。

::: warning

注意：`options` 必须为 `array`，且元素必须为 `object`，且每个 `object` 中必须包含 `label`、`value` 这两个 `key`。

:::

::: demo

Select/Basic

:::

## 禁用状态

使用 `disabled` 属性，使 Select 进入禁用状态。

::: demo

Select/Disabled

:::

## 可清空的

使用 `clearable` 属性，是 Select 可清除，鼠标移入 Select 可查看效果。

::: demo

Select/Clearable

:::

## 可多选的

使用 `multiple` 属性，使 Select 可多选；同时，还可以使用 `max` 属性，设置最多选中数。

::: demo

Select/Multiple

:::

## 指定 `key`

使用 `options-key` 属性，指定渲染的 `options` 的 `key` 值。

::: tip

在某些场景下，您可以需要使用类似 `id` 的 `key` 渲染 `options`，使得 `options` 数据可以被随意的操作。

在**默认情况**下，我们会使用 `index` 索引作为 `key` 进行渲染。

:::

::: warning

**注意**：您所指定的 `key` 必须是 `options` 元素中存在的 `key`，否则无法正确设置。

:::

::: demo

Select/OptionsKey

:::

## APIs

### 属性

| 属性名 | 说明 | 类型 | 默认值 | 是必需项 |
| :---: | :---: | :---: | :---: | :---: |
| `v-model` | 当前激活的选择 | `SelectOption['value']` | —— | `true` |
| options | 选择列表 | `T extends SelectOption[]` | —— | `true` |
| disabled | 禁用选择器 | `boolean` | `false` | `false` |
| clearable | 可清空的 | `boolean` | `false` | `false` |
| multiple | 可多选 | `boolean` | `false` | `false` |
| max | 最大可选中数(仅 `multiple` 可用) | `number` | `Infinity` | `false` |
| options-key | 为渲染的 `options` 指定 `key` | `string` | —— | `false` |