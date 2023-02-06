# Toast

吐司轻提示组件

## 基础用法

从 Violet 中导入 `Toast` 方法，调用即可。

<script setup lang="ts">
import { Toast } from '../../packages/components/Toast'

const handleClick = (type) => Toast[type](`${type} toast 提示`)

const handleHtmlStr = () => {
  Toast({
    isHtmlStr: true,
    type: 'primary',
    content: '<b>这是 HTML 字符串内容</b>'
  })
}

const handleClose = () => {
  Toast({
    closable: true,
    type: 'primary',
    content: '可手动关闭'
  })
}
</script>

<div class="examples">
  <vi-row>
    <vi-button @click="handleClick('primary')">主要提示</vi-button>
    <vi-button type="success" @click="handleClick('success')">成功提示</vi-button>
    <vi-button type="info" @click="handleClick('info')">信息提示</vi-button>
    <vi-button type="warning" @click="handleClick('warning')">警告提示</vi-button>
    <vi-button type="danger" @click="handleClick('danger')">危险提示</vi-button>
  </vi-row>
</div>

```vue
<template>
  <vi-row>
    <vi-button @click="handleClick('primary')">主要提示</vi-button>
    <vi-button type="success" @click="handleClick('success')">成功提示</vi-button>
    <vi-button type="info" @click="handleClick('info')">信息提示</vi-button>
    <vi-button type="warning" @click="handleClick('warning')">警告提示</vi-button>
    <vi-button type="danger" @click="handleClick('danger')">危险提示</vi-button>
  </vi-row>
</template>

<script setup lang="ts">
import { Toast } from 'violet'

const handleClick = (type) => Toast[type](`${type} toast 提示`)
</script>
```

## 可关闭的 Toast

设置 `closable` 属性为 `true`，开启可手动关闭功能。

<div class="examples">
  <vi-button @click="handleClose">可手动关闭</vi-button>
</div>

```vue
<template>
  <vi-button @click="handleClose">可手动关闭</vi-button>
</template>

<script>
import { Toast } from 'violet'

const handleClose = () => {
  Toast({
    closable: true,
    type: 'primary',
    content: '可手动关闭'
  })
}
</script>
```

## 使用 HTML 字符串

设置 `isHtmlStr` 属性为 `true`，可以在内容中写入 HTML 元素并渲染。

::: warning
请注意，在网站上动态的渲染 HTML 是非常危险的行为。所以，请确保此 HTML 渲染绝对的安全，否则请勿使用 HTML 渲染。<br />
二次注意，一个原则是：永远不要相信用户的输入。所以，你不该在任何情况下将用户的输入作为 Toast HTML 渲染。
:::

<div class="examples">
  <vi-button @click="handleHtmlStr">HTML 字符串</vi-button>
</div>

```vue
<template>
  <vi-button @click="handleHtmlStr">HTML 字符串</vi-button>
</template>

<script>
import { Toast } from 'violet'

const handleHtmlStr = () => {
  Toast({
    isHtmlStr: true,
    type: 'primary',
    content: '<b>这是 HTML 字符串内容</b>'
  })
}
</script>
```

## APIs

### 属性

### 事件