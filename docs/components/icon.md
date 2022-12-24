<script setup lang="ts">
import { ref } from 'vue'
import { iconMaps } from '../../packages/components/Icon/iconMaps'
const isLoading = ref(false)
const duration = ref(2)

const copy = (name: string) => {
  navigator.clipboard.writeText(`<vi-icon name="${name}" />`)
    .then(res => console.log('复制成功'))
    .catch(err => console.log('复制失败'))
}
</script>

# Icon 图标

基础 Icon 图标组件，内含 Violet 提供的一些基础图标。

## 基础用法

使用 `name` 属性来定义图标，它是必须的！

<div class="examples">
  <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
    <vi-icon name="windows" size="50px" />
    <vi-icon name="linux" size="50px" />
    <vi-icon name="mac" size="50px" />
    <vi-icon name="check" size="50px" />
    <vi-icon name="close" size="50px" />
    <vi-icon name="loading" size="50px" />
  </div>
</div>

```vue
<template>
  <vi-icon name="windows" size="50px" />
  <vi-icon name="linux" size="50px" />
  <vi-icon name="mac" size="50px" />
  <vi-icon name="check" size="50px" />
  <vi-icon name="close" size="50px" />
  <vi-icon name="loading" size="50px" />
</template>
```

## 加载动画

Violet 为您提供了一个内置的加载动画，使用 `loading` 属性可以启用它。

::: tip
`loading` 属性不一定非要加在 loading 图标上，它可以加在任意一个 `vi-icon` 上，您可以点击“测试”按钮查看效果。
:::

<div class="examples">
  <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
    <vi-icon name="loading" size="50px" loading />
    <vi-icon name="close" size="50px" :loading="isLoading" />
    <vi-button @click="isLoading = !isLoading">测试</vi-button>
  </div>
</div>

```vue
<script setup lang="ts">
import { ref } from 'vue'
const isLoading = ref(false)
</script>

<template>
  <vi-icon name="loading" size="50px" loading />
  <vi-icon name="close" size="50px" :loading="isLoading" />
  <vi-button @click="isLoading = !isLoading">测试</vi-button>
</template>
```

## 自定义加载动画时长

有时候可能您对动画的默认加载时长不满意，可以使用 `duration` 属性来自定义加载时间。通过下方“加”、“减”按钮查看效果。

<div class="examples">
  <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
    <vi-icon name="loading" size="50px" loading :duration="duration" />
    <p>当前动画时间为：{{ duration }} 秒</p>
    <vi-button circle @click="duration ++"> <vi-icon name="plus" title="增加" /> </vi-button>
    <vi-button circle @click="duration --"> <vi-icon name="minus" title="减少" /> </vi-button>
  </div>
</div>

```vue
<script setup lang="ts">
import { ref } from 'vue'
const duration = ref(2)
</script>

<template>
  <vi-icon name="loading" size="50px" loading :duration="duration" />
  <p>当前动画时间为：{{ duration }} 秒</p>
  <vi-button circle @click="duration ++"> <vi-icon name="plus" title="增加" /> </vi-button>
  <vi-button circle @click="duration --"> <vi-icon name="minus" title="减少" /> </vi-button>
</template>
```

## 自定义颜色

图标的默认颜色是继承自父级的，您可以使用 `color` 属性手动定义颜色。

<div class="examples">
  <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
    <vi-icon name="check" size="50px" color="blueviolet" />
    <vi-icon name="close" size="50px" color="violet" />
    <vi-icon name="plus" size="50px" color="orange" />
  </div>
</div>

```vue
<template>
  <vi-icon name="check" color="blueviolet" />
  <vi-icon name="close" color="violet" />
  <vi-icon name="plus" color="orange" />
</template>
```

## 自定义 hover 状态颜色

使用 `hover-color` 属性，可以直接定义图标 `hover` 状态的颜色。

<div class="examples">
  <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
    <vi-icon name="check" size="50px" hover-color="blueviolet" />
    <vi-icon name="close" size="50px" hover-color="violet" />
    <vi-icon name="plus" size="50px" hover-color="orange" />
  </div>
</div>

```vue
<template>
  <vi-icon name="check" size="50px" hover-color="blueviolet" />
  <vi-icon name="close" size="50px" hover-color="violet" />
  <vi-icon name="plus" size="50px" hover-color="orange" />
</template>
```

## 自定义鼠标指针

使用 `cursor` 属性来定义鼠标指针状态。此功能完全等同于 CSS 的 `cursor` 属性，考虑到图标大部分时候都是可以被点击的，所以它默认是 `pointer` 状态。

<div class="examples">
  <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
    <vi-icon name="check" size="50px" cursor="text" />
    <vi-icon name="close" size="50px" cursor="not-allowed" />
    <vi-icon name="plus" size="50px" cursor="move" />
  </div>
</div>

```vue
<template>
  <vi-icon name="check" size="50px" cursor="text" />
  <vi-icon name="close" size="50px" cursor="not-allowed" />
  <vi-icon name="plus" size="50px" cursor="move" />
</template>
```

## 图标集合

点击图标即可复制。

<ul class="icon-list">
  <li v-for="icon in Object.keys(iconMaps)" :key="icon" @click="copy(icon)">
    <vi-icon :name="icon" size="50px" />
    <span> {{ icon }} </span>
  </li>
</ul>

<style scoped lang="scss">
.icon-list {
  padding: 0;
  margin: 0;
  list-style: none;
  border-left: 1px solid var(--border-color);
  border-top: 1px solid var(--border-color);
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 10px;
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    span { cursor: pointer }
    &:hover {
      color: var(--primary-color);
    }
  }
}
@media screen and (max-width: 1422px) {
  .icon-list { grid-template-columns: repeat(8, 1fr); }
}
</style>

## APIs

### 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| name | 图标名称 | string | —— |
| size | 图标大小 | string | '20px' |
| color | 图标颜色 | string | inherit |
| cursor | 移入时的鼠标指针 | string | 'pointer' |
| hover-color | 鼠标移入时的颜色（CSS `hover` 状态） | string | —— |
| loading | 是否需要加载动画 | boolean | false |
| duration | 加载动画时长 | number | 2 |