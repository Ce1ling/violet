# Tabs 切换组件

Tabs 选项卡切换组件，分隔展示不同类型的数据。

## 基础用法

简单的切换展示。您必须为 `vi-tabs` 指定一个 `active` 属性，它用于指定当前展示的 tab。而 `vi-tab`，您必须为其指定 `label` 和 `name` 这两个属性，前者用于渲染 tab 的头部，后者用于作为唯一标识符，`active` 状态就是由 `name` 属性决定的。

<vi-tabs active="1">
  <vi-tab label="Vue" name="1">Vue</vi-tab>
  <vi-tab label="React" name="2">React</vi-tab>
  <vi-tab label="Svelte" name="3">Svelte</vi-tab>
</vi-tabs>

```vue
<template>
  <vi-tabs active="1">
    <vi-tab label="Vue" name="1">Vue</vi-tab>
    <vi-tab label="React" name="2">React</vi-tab>
    <vi-tab label="Svelte" name="3">Svelte</vi-tab>
  </vi-tabs>
</template>
```
