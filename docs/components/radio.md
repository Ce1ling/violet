---
title: Radio
lang: zh-CN
---

# Radio 单选框

对一组内容进行单选。

## 基础用法

您必须绑定 `v-model` 与 `label` 属性，才能使 `vi-radio` 正常工作。`v-model` 用于绑定同一个变量，`lable` 是选中此 radio 时提供的内容。

::: demo

Radio/Basic

:::

## 禁用状态

使用 `disabled` 属性，来禁用 radio。

::: demo

Radio/Disabled

:::

## 带边框

使用 `border` 属性，来启用边框。

::: demo

Radio/HasBorder

:::

## Radio 组

如需使用 Radio 组，请使用 `vi-radio-group` 标签包裹。它提供 `gap` 属性来定义间距。

::: tip

**强烈建议**您使用 `vi-radio-group`，因为它可以更好的组织结构。  
使用了 `vi-radio-group` 后，可直接将 `v-model` 绑定在 `vi-radio-group` 上，无需绑定给每个 `vi-radio`。

:::

::: demo

Radio/RadioGroup

:::

## 按钮类型

如需使用按钮类型，必须使用 `vi-radio-group` 标签包裹并添加 `is-button` 属性。因为 Violet 需要使用此标签做特殊处理，而 `is-button` 属性则表示使用按钮类型。

::: warning

**注意**：如果使用了按钮类型，`border` 属性将无效，因为按钮类型自带边框，您无需它。

:::

::: danger

**警告**：在单独使用 `vi-radio` 时(没有被 `vi-radio-group` 包裹的情况下)，请勿单独在 `vi-radio` 上添加 `is-btn` 属性，否则会导致 UI 错乱！

:::

::: demo

Radio/ButtonType

:::

## APIs

### Radio 属性

| 属性名 | 说明 | 类型 | 默认值 | 是必需项 |
| :---: | :---: | :---: | :---: | :---: |
| `v-model` | 绑定值 | `string` | —— | `true` |
| label | 选中时的内容 | `boolean` | `false` | `true` |
| disabled | 是否为禁用状态 | `boolean` | `false` | `false` |
| border | 是否需要边框 | `boolean` | `false` | `false` |

### RadioGroup 属性

| 属性名 | 说明 | 类型 | 默认值 | 是必需想 |
| :---: | :---: | :---: | :---: | :---: |
| `v-model` | 绑定值 | `string` | —— | `true` |
| is-button | 是否为按钮类型 | `boolean` | `false` | `false` |
| border | 是否需要边框 | `boolean` | `false` | `false` |
| gap | 间距 | `string` | `'18px'` | `false` |
