---
title: Transfer
lang: zh-CN
---

# Transfer 穿梭器

你知道用途吗？

## 基础用法

使用 `v-model` 属性，绑定当前选中的项，`list` 属性为数据列表。

::: warning

**注意1**: `v-model` 中的元素必须是 `list` 中元素的 `id` 值。

**注意2**: `list` 中的元素必须是一个对象且拥有 `id`、`label`、`checked`、`disabled` 属性。除此之外，您也可以定义一些自己的属性。


:::

::: demo

Transfer/Basic

:::

## 自定义标题

使用 `titles` 属性，自定义列表标题，它是一个二元组。

::: demo

Transfer/Titles

:::

## 可拖动的

使用 `draggable` 属性，使选项可以被拖拽。

::: tip

试着拖动 “容器1” 中的选项到 “容器2” 中，当然，也可以拖回来。

:::

::: demo 

Transfer/Draggable

:::

## APIs

### 属性

| 属性名 | 说明 | 类型 | 默认值 | 是必需项 |
| :---: | :---: | :---: | :---: | :---: | 
| `v-model` | 已选择的数据 | `string[]` | —— | `true` |
| list | 数据列表 | `T extends TransferItem[]` | —— | `true` |
| show-total | 是否显示总数与选中数 | `boolean` | `fasle` | `false` |
| titles | 定义标题 | `[string, string]` | `['List 1', 'List 2']` | `false` | 
| draggable | 选项是否可拖拽 | `boolean` | `false` | `false` |

### 事件

| 事件名 | 触发时机 | 参数 |
| :---: | :---: | :---: |
| change | 数据发生改变时触发 | `(e: MouseEvent): void` |
| check-change | 选中状态发生改变时触发 | `(e: MouseEvent): void` |