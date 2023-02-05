# Toast

吐司轻提示组件

## 基础用法

从 Violet 中导入 `Toast` 方法，调用即可。

<script setup lang="ts">
import { Toast } from '../../packages/components/Toast'

const handleClick = (type) => Toast[type](`${type} toast 提示`)
</script>

<div class="examples">
  <vi-row>
    <vi-button @click="handleClick('primary')">主要按钮</vi-button>
    <vi-button type="success" @click="handleClick('success')">成功按钮</vi-button>
    <vi-button type="info" @click="handleClick('info')">信息按钮</vi-button>
    <vi-button type="warning" @click="handleClick('warning')">警告按钮</vi-button>
    <vi-button type="danger" @click="handleClick('danger')">危险按钮</vi-button>
  </vi-row>
</div>

```vue
<template>
  <vi-row>
    <vi-button @click="handleClick('primary')">主要按钮</vi-button>
    <vi-button type="success" @click="handleClick('success')">成功按钮</vi-button>
    <vi-button type="info" @click="handleClick('info')">信息按钮</vi-button>
    <vi-button type="warning" @click="handleClick('warning')">警告按钮</vi-button>
    <vi-button type="danger" @click="handleClick('danger')">危险按钮</vi-button>
  </vi-row>
</template>

<script setup lang="ts">
import { Toast } from 'violet'

const handleClick = (type) => Toast[type](`${type} toast 提示`)
</script>
```