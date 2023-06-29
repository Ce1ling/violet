---
title: Layout
lang: zh-CN
---

# Layout 布局

布局组件，快速搭建页面主体结构。

## 基础说明

Violet 提供的布局组件包括：
1. `vi-flex`：快速创建 `flex` 布局组件，可自定义 `flex` 的一些属性。 
2. `vi-header`：顶部组件，一般用于页面最顶部。 
3. `vi-main`：主体组件，一般用于页面主要内容区。 
4. `vi-aside`： 侧边栏组件，一般用于需要侧边栏的页面。 
5. `vi-footer`：底部组件，一般用于页面最底部。

## 布局示例

1. 仅有 “顶部” 与 “主体” 的布局。

::: demo

Layout/Layout1

:::

2. 包含三大主要元素的布局。

::: demo

Layout/Layout2

:::

3. 包含 “侧边栏”，但没有 “底部” 的布局。

::: demo

Layout/Layout3

:::

4. 完整的页面布局。

::: demo

Layout/Layout4

:::

5. “侧边栏” 贯穿 “底部” 的布局。

::: demo

Layout/Layout5

:::

6. “侧边栏” 为通栏的布局。

::: demo

Layout/Layout6

:::

以上仅作示例，至于其他更多的布局方式，由您的需求而自由自定。

## APIs

### Flex 属性

| 属性名 | 说明 | 类型 | 默认值 | 是必需项 |
| :---: | :---: | :---: | :---: | :---: |
| direction | 同原生 `flex` 布局的 `flex-direction` | `'row' \| 'column' \| 'row-reverse' \| 'column-reverse'` | `'row'` | `false` |
| justify | 同原生 `flex` 布局的 `justify-content` | `'start' \| 'center' \| 'end' \| 'space-between' \| 'space-around' \| 'space-evenly'` | —— | `false` |
| align | 同原生 `flex` 布局的 `align-items` | `'start' \| 'center' \| 'end'` | —— | `false` |
| flex | 同原生 `flex` 布局的 `flex` | `string` | `'1'` | `false` |

### Flex 插槽

| 插槽名 | 说明 |
| :---: | :---: |
| default | 定义默认内容 |

### Header 属性

| 属性名 | 说明 | 类型 | 默认值 | 是必需项 |
| :---: | :---: | :---: | :---: | :---: |
| padding | 内边距 | `string` | `'0 18px'` | `false` |
| height | 高度 | `string` | `'80px'` | `false` |

### Header 插槽

| 插槽名 | 说明 |
| :---: | :---: |
| default | 定义默认内容 |

### Main 属性

| 属性名 | 说明 | 类型 | 默认值 | 是必需项 |
| :---: | :---: | :---: | :---: | :---: |
| padding | 内边距 | `string` | `'18px'` | `false` |

### Main 插槽

| 插槽名 | 说明 |
| :---: | :---: |
| default | 定义默认内容 |

### Aside 属性

| 属性名 | 说明 | 类型 | 默认值 | 是必需项 |
| :---: | :---: | :---: | :---: | :---: |
| width | 宽度 | `string` | `'300px'` | `false` |

### Aside 插槽

| 插槽名 | 说明 |
| :---: | :---: |
| default | 定义默认内容 |

### Footer 属性

| 属性名 | 说明 | 类型 | 默认值 | 是必需项 |
| :---: | :---: | :---: | :---: | :---: |
| padding | 内边距 | `string` | `'0 18px'` | `false` |
| height | 高度 | `string` | `'80px'` | `false` |

### Footer 插槽

| 插槽名 | 说明 |
| :---: | :---: |
| default | 定义默认内容 |