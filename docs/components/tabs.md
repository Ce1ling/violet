# Tabs 切换组件

Tabs 选项卡切换组件，分隔展示不同类型的数据。

## 基础用法

简单的切换展示。

::: tip
您必须为 `vi-tabs` 指定一个 `active` 属性，它用于指定当前展示的 tab，与 `vi-tab` 的 `name` 属性对应。所以您也必须为 `vi-tab` 指定 `label`、`name` 属性，前者用于渲染 tab 的头部，后者用于作为唯一标识符。
:::

<div class="examples">
  <vi-tabs active="1">
    <vi-tab label="Vue" name="1">Vue，渐进式 JavaScript 框架</vi-tab>
    <vi-tab label="React" name="2">React，用于构建用户界面的 JavaScript 库</vi-tab>
    <vi-tab label="Svelte" name="3">Svelte，控制性增强的 Web 应用程序</vi-tab>
    <vi-tab label="Solid" name="4">Solid，用于构建用户界面的简单且高性能的响应式</vi-tab>
  </vi-tabs>
</div>

```vue
<template>
  <vi-tabs active="1">
    <vi-tab label="Vue" name="1">Vue，渐进式 JavaScript 框架</vi-tab>
    <vi-tab label="React" name="2">React，用于构建用户界面的 JavaScript 库</vi-tab>
    <vi-tab label="Svelte" name="3">Svelte，控制性增强的 Web 应用程序</vi-tab>
    <vi-tab label="Solid" name="4">Solid，用于构建用户界面的简单且高性能的响应式</vi-tab>
  </vi-tabs>
</template>
```

## APIs

### Tabs 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| active | 当前展示的 Tab | string | —— |
| active-bg-color | 当前展示的 Tab 的背景颜色 | string | #802ae8 |
| bg-color | Tabs 头部背景颜色 | string | #eeeeee |
| ifMode | Tab 的展示是否为类似 `v-if` 的模式 | boolean | false |

### Tabs 事件

| 事件名 | 事件触发时机 | 事件参数 |
| :---: | :---: | :---: |
| tab-click | Tab 点击时触发 | (name: 当前点击的 Tab, event: 默认事件对象) |

### Tab 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| label | Tab 标题 | string | —— |
| name | 唯一标识符，Tabs 的 `active` 根据此属性辨别当前展示的 Tab | string | —— |

