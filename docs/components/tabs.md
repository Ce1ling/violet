---
title: Tabs
lang: zh-CN
---

# Tabs 选项卡

Tabs 选项卡切换组件，分隔展示不同类型的数据。

## 基础用法

简单的切换展示。

::: tip

您必须为 `vi-tabs` 指定一个 `active` 属性，它用于指定当前展示的 tab，与 `vi-tab` 的 `name` 属性对应。所以您也必须为 `vi-tab` 指定 `label`、`name` 属性，前者用于渲染 tab 的头部，后者作为唯一标识符。

:::

::: demo

Tabs/Basic

:::

## 不同类型

切换不同类型的 Tabs, 目前仅支持: `'normal'`、`'inner-card'`。

::: demo

Tabs/Type

:::

## 动态切换

通过动态的 `active` 属性，来切换当前展示的 tab。如下所示：

::: demo

Tabs/DynamicToggle

:::

## ifMode

类似 Vue `v-if` 与 `v-show` 的区别，为了性能考虑，此模式默认为 `false`。如果您有需要，可以开启，开启后只有高亮的 Tab 会被渲染，其他 Tab 将被销毁！

::: tip

您可以打开“开发者工具”，并在 `Elements` 面板中来查看节点的渲染情况。如果您熟悉 Vue `v-if` 与 `v-show` 指令的区别，相信您立马就能理解！

:::

::: demo

Tabs/IfMode

:::

## 可被移除

使用 `removable` 属性，设置选项卡可被移除。点击移除按钮后触发 `tab-remove` 事件。

::: warning

请注意！移除按钮仅触发 `tab-remove` 事件并传入相应参数，您需要自己编写移除逻辑。因为 Violet 并不知道您的数据结构，而如果操作 DOM 的话，效率会非常低！同样的，移除后当前 Tab 也需要您手动更新，因为 Violet 同样不知道您的更新后的数据！

:::

::: demo

Tabs/Removable

:::

## 阻止切换

使用 `before-change` 钩子，此钩子函数返回 `true` 则正常切换，返回 `false` 则阻止切换。

::: tip
此示例中使用 `before-change` 阻止了切换到 `React`，所以您无法切换到 `React`。
:::

::: warning 
注意：`before-change` 虽然会阻止切换，但被点击的选项卡仍能触发 `tab-click` 事件。
:::

::: demo

Tabs/PreventToggle

:::

## APIs

### Tabs 属性

| 属性名 | 说明 | 类型 | 默认值 | 是必需项 |
| :---: | :---: | :---: | :---: | :---: |
| `v-model` | 当前展示的选项卡 | `string` | —— | `true` |
| type | 选项卡类型 | `'normal' \| 'inner-card'` | —— | `false` |
| active-bg-color | 当前展示的选项卡的背景颜色 | `string` | `'#802ae8'` | `false` |
| bg-color | 标题背景颜色 | `string` | `#eeeeee` | `false` |
| ifMode | 是否为类似 `v-if` 的模式 | `boolean` | `false` | `false` |
| removable | 是否可被移除 | `boolean` | `false` | `false` |
| before-change | 选项卡切换前触发，返回 `false` 则阻止切换 | `(name: string) => boolean` | —— | `false` |
| padding | 非 `'normal'` 类型的 `padding` | `string` | `'6px'` | `false` |
| bar-height | 高亮状态条高度(仅 `'normal'` 模式可用) | `string` | `'2px'` | `false` |
| center | 居中选项卡 | `boolean` | `false` | `false` |
| bar-half | 使用一半宽度的高亮状态条(仅 `'normal'` 模式可用) | `boolean` | `false` | `false` |

### Tabs 事件

| 事件名 | 触发时机 | 参数 |
| :---: | :---: | :---: |
| tab-click |选项卡标题被点击时触发 | `(name: string, e: MouseEvent): void` |
| tab-remove | 点击移除按钮触发 | `(name: string, e: MouseEvent): void` |
| change | `v-model` 值改变后触发 | `(newVal: string, oldVal: string): void` |

### Tab 属性

| 属性名 | 说明 | 类型 | 默认值 |
| :---: | :---: | :---: | :---: |
| label |选项卡 标题 | `string` | —— | `true` |
| name | 唯一标识符，选项卡的 `v-model` 根据此属性辨别当前展示的选项卡 | `string` | —— | `true` |

### Tab 插槽

| 插槽名 | 说明 |
| :---: | :---: |
| default | 定义默认内容 |