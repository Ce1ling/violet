# Toast

轻提示组件

## 基础用法

从 Violet 中导入 `Toast` 方法，调用即可。

<script setup lang="ts">
import { Toast } from '../../packages/components/Toast'

const primary = () => {
  Toast()
}
const success = () => {
  Toast()
}
const info = () => {
  Toast()
}
const warning = () => {
  Toast()
}
const danger = () => {
  Toast()
}
</script>

<div class="examples">
  <vi-row>
    <vi-button @click="primary">primary</vi-button>
    <vi-button type="success" @click="success">success</vi-button>
    <vi-button type="info" @click="info">info</vi-button>
    <vi-button type="warning" @click="warning">warning</vi-button>
    <vi-button type="danger" @click="danger">danger</vi-button>
  </vi-row>
</div>

```vue
<template>
  <vi-row>
    <vi-button @click="primary">primary</vi-button>
    <vi-button type="success" @click="success">success</vi-button>
    <vi-button type="info" @click="info">info</vi-button>
    <vi-button type="warning" @click="warning">warning</vi-button>
    <vi-button type="danger" @click="danger">danger</vi-button>
  </vi-row>
</template>

<script setup lang="ts">
import { Toast } from '../../packages/components/Toast'

const primary = () => {
  Toast()
}
const success = () => {
  Toast()
}
const info = () => {
  Toast()
}
const warning = () => {
  Toast()
}
const danger = () => {
  Toast()
}
</script>
```