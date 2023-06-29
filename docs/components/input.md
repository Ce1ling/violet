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

| 属性名 | 说明 | 类型 | 默认值 | 是必需项 | 
| :---: | :---: | :---: | :---: | :---: |
| `v-model` | 输入框的值 | `string` | —— | `true` |
| type | 输入框类型 | `string` | `'text'` | `false` |
| placeholder | 同原生属性 | `string` | —— | `false` |
| disabled | 是否为禁用 | `boolean` | `false` | `false` |
| clearable | 显示清空按钮 | `boolean` | `false` | `false` |
| show-pwd | 切换显示密码 | `boolean` | `false` | `false` |
| rows | `type="textarea"` 时的高度 | `string` | `'2'` | `false` |
| limit | 限制输入长度 | `string` | —— | `false` |
| show-limit | 显示限制长度 | `boolean` | `false` | `false` |
| prefix-icon | 头部图标 | `vi-icon \| string` | —— | `false` |
| suffix-icon | 尾部图标 | `vi-icon \| string` | —— | `false` |

### 插槽

| 插槽名 | 说明 | 注意事项 |
| :---: | :---: | :---: |
| prefix | 定义头部内容 | 对 `type="textarea"` 无效 |
| suffix | 定义尾部内容 | 对 `type="textarea"` 无效 |
| prepend | 定义前置内容 | 对 `type="textarea"` 无效 |
| append | 定义后置内容 | 对 `type="textarea"` 无效 |
