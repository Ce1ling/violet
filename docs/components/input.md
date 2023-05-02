---
title: Input
lang: zh-CN
---

# Input 输入框

用户输入类型组件。

## 基础用法

通过 `v-model` 指令，绑定 `value` 值。

::: demo 

Input/Basic

:::

## 禁用状态

使用 `disabled` 属性，来禁用 input。

::: demo 

Input/Disabled

:::

## 可清空

使用 `clearable` 属性，启用清空按钮，在有输入内容时，它就会显示。

::: demo 

Input/Clearable

:::

## 显示密码

使用 `show-pwd` 属性，启用切换显示密码框，前提是：此输入框必须是密码框。

::: demo 

Input/ShowPwd

:::

## 限制输入

使用 `limit` 属性，来限制输入内容长度。你也可以通过 `show-limit`，来展示限制数。分隔符您也可以自定义，它默认是 `' / '`。

::: demo 

Input/LimitInput

:::

## 文本域

将 `type` 属性设置为 `textarea`，启用文本域。你可以使用 `rows` 属性来控制高度，同时，文本域也支持限制输入。

::: tip

虽然 `textarea` 支持限制输入，但不代表它也支持 `input` 的其他功能。如：清空按钮、插槽等。

:::

::: demo 

Input/Textarea

:::

## 自定义图标

通过 `prefix-icon`、`suffix-icon` 属性，定义前后 `Icon`，它会使用 Violet 所提供的 `Icon`。如果你想对 `Icon` 做出一些设置，可以使用对象形式。对于更复杂的设置（或想自定义的不是 `Icon`），你可以使用 “插槽式”，我们提供了 `prefix`、`suffix` 插槽。

::: demo 

Input/CustomIcon

:::

## 复合型

通过 `prepend`、`append` 插槽，设置前后置内容。

::: demo 

Input/Mixed

:::

## APIs

### 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| type | Input 类型 | `string` | `'text'` |
| placeholder | 同原生属性 | `string` | —— |
| disabled | 禁用 Input | `boolean` | `false` |
| clearable | 显示清空按钮 | `boolean` | `false` |
| show-pwd | 切换显示密码 | `boolean` | `false` |
| rows | `type="textarea"` 的高度 | `string` | `'2'` |
| limit | 限制输入长度 | `string` | —— |
| show-limit | 显示限制长度 | `boolean` | `false` |
| prefix-icon | 头部图标 | `vi-icon \| string` | —— |
| suffix-icon | 尾部图标 | `vi-icon \| string` | —— |

### 插槽

| 插槽名 | 插槽说明 | 注意事项 |
| :---: | :---: | :---: |
| prefix | 头部内容 | 对 `type="textarea"` 无效 |
| suffix | 尾部内容 | 对 `type="textarea"` 无效 |
| prepend | 前置内容 | 对 `type="textarea"` 无效 |
| append | 后置内容 | 对 `type="textarea"` 无效 |
