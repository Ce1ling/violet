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