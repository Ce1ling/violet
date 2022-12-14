<script setup lang="ts">
import { ref } from 'vue'
import { iconMaps } from '../../packages/components/Icon/iconMaps'
import { Toast } from '../../packages/components/Toast/index'

const isLoading = ref(false)
const duration = ref(2)

const copy = (name: string) => {
  navigator.clipboard.writeText(`<vi-icon name="${name}" />`)
    .then(res => Toast('复制成功'))
    .catch(err => Toast('复制失败'))
}
</script>

# Icon 图标

基础 Icon 图标组件，内含 Violet 提供的一些基础图标。

## 基础用法

使用 `name` 属性来定义图标，它是必须的！

<div class="examples">
  <vi-row>
    <vi-icon name="Windows" size="28px" />
    <vi-icon name="Linux" size="28px" />
    <vi-icon name="Mac" size="28px" />
    <vi-icon name="Check" size="28px" />
    <vi-icon name="Close" size="28px" />
    <vi-icon name="Loading" size="28px" />
  </vi-row>
</div>

```vue
<template>
  <vi-row>
    <vi-icon name="Windows" size="28px" />
    <vi-icon name="Linux" size="28px" />
    <vi-icon name="Mac" size="28px" />
    <vi-icon name="Check" size="28px" />
    <vi-icon name="Close" size="28px" />
    <vi-icon name="Loading" size="28px" />
  </vi-row>
</template>
```

## 加载动画

Violet 为您提供了一个内置的加载动画，使用 `loading` 属性可以启用它。

::: tip
`loading` 属性不一定非要加在 loading 图标上，它可以加在任意一个 `vi-icon` 上，您可以点击“测试”按钮查看效果。
:::

<div class="examples">
  <vi-row>
    <vi-icon name="Loading" size="28px" loading />
    <vi-icon name="Close" size="28px" :loading="isLoading" />
    <vi-button @click="isLoading = !isLoading">测试</vi-button>
  </vi-row>
</div>

```vue
<script setup lang="ts">
import { ref } from 'vue'
const isLoading = ref(false)
</script>

<template>
  <vi-row>
    <vi-icon name="Loading" size="28px" loading />
    <vi-icon name="Close" size="28px" :loading="isLoading" />
    <vi-button @click="isLoading = !isLoading">测试</vi-button>
  </vi-row>
</template>
```

## 自定义加载动画时长

有时候可能您对动画的默认加载时长不满意，可以使用 `duration` 属性来自定义加载时间。通过下方“加”、“减”按钮查看效果。

<div class="examples">
  <vi-row>
    <vi-icon name="Loading" size="28px" loading :duration="duration" />
    <p>当前动画时间为：{{ duration }} 秒</p>
    <vi-button circle @click="duration ++"> <vi-icon name="Plus" title="增加" /> </vi-button>
    <vi-button circle @click="duration --"> <vi-icon name="Minus" title="减少" /> </vi-button>
  </vi-row>
</div>

```vue
<script setup lang="ts">
import { ref } from 'vue'
const duration = ref(2)
</script>

<template>
  <vi-row>
    <vi-icon name="Loading" size="28px" loading :duration="duration" />
    <p>当前动画时间为：{{ duration }} 秒</p>
    <vi-button circle @click="duration ++"> <vi-icon name="Plus" title="增加" /> </vi-button>
    <vi-button circle @click="duration --"> <vi-icon name="Minus" title="减少" /> </vi-button>
  </vi-row>
</template>
```

## 自定义颜色

图标的默认颜色是继承自父级的，您可以使用 `color` 属性手动定义颜色。

<div class="examples">
  <vi-row>
    <vi-icon name="Check" size="28px" color="blueviolet" />
    <vi-icon name="Close" size="28px" color="violet" />
    <vi-icon name="Plus" size="28px" color="orange" />
  </vi-row>
</div>

```vue
<template>
  <vi-row>
    <vi-icon name="Check" size="28px" color="blueviolet" />
    <vi-icon name="Close" size="28px" color="violet" />
    <vi-icon name="Plus" size="28px" color="orange" />
  </vi-row>
</template>
```

## 自定义 hover 状态颜色

使用 `hover-color` 属性，可以直接定义图标 `hover` 状态的颜色。

<div class="examples">
  <vi-row>
    <vi-icon name="Check" size="28px" hover-color="blueviolet" />
    <vi-icon name="Close" size="28px" hover-color="violet" />
    <vi-icon name="Plus" size="28px" hover-color="orange" />
  </vi-row>
</div>

```vue
<template>
  <vi-row>
    <vi-icon name="Check" size="28px" hover-color="blueviolet" />
    <vi-icon name="Close" size="28px" hover-color="violet" />
    <vi-icon name="Plus" size="28px" hover-color="orange" />
  </vi-row>
</template>
```

## 自定义鼠标指针

使用 `cursor` 属性来定义鼠标指针状态。此功能完全等同于 CSS 的 `cursor` 属性，考虑到图标大部分时候都是可以被点击的，所以它默认是 `pointer` 状态。

<div class="examples">
  <vi-row>
    <vi-icon name="Check" size="28px" cursor="text" />
    <vi-icon name="Close" size="28px" cursor="not-allowed" />
    <vi-icon name="Plus" size="28px" cursor="move" />
  </vi-row>
</div>

```vue
<template>
  <vi-row>
    <vi-icon name="Check" size="28px" cursor="text" />
    <vi-icon name="Close" size="28px" cursor="not-allowed" />
    <vi-icon name="Plus" size="28px" cursor="move" />
  </vi-row>
</template>
```

## 图标集合

点击图标即可复制。

<ul class="icon-list">
  <li v-for="icon in Object.keys(iconMaps)" :key="icon" @click="copy(icon)">
    <vi-icon :name="icon" size="28px" />
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
  grid-template-columns: repeat(8, 1fr);
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
@media screen and (max-width: 1820px) {
  .icon-list { grid-template-columns: repeat(5, 1fr); }
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