<script setup lang="ts">
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(true)
const checked3 = ref(true)
const checked4 = ref(true)
const checked5 = ref(true)
const checked6 = ref(true)
const checked7 = ref(true)
const checked8 = ref(true)
const checked9 = ref(true)
const checked10 = ref(true)
</script>

# Switch 开关

仅用于两种状态之间进行切换，一般用于“开”/“关”。

## 基础用法

通过 `v-model` 指令，绑定并控制 `switch` 的状态。

<div class="examples">
  <vi-switch v-model="checked1" />
</div>

```vue
<template>
  <vi-switch v-model="checked1" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked1 = ref(true)
</script>
```

## 自定义颜色

通过 `on-color`、`off-color`，来分别设置 `switch` “开”/“关” 状态的颜色。

<div class="examples">
  <vi-row>
    <vi-switch v-model="checked2" on-color="#0000ff" />
    <vi-switch v-model="checked3" on-color="#13ce66" off-color="#ff0000" />
  </vi-row>
</div>

```vue
<template>
  <vi-switch v-model="checked2" on-color="#0000ff" />
  <vi-switch v-model="checked3" on-color="#13ce66" off-color="#ff0000" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked2 = ref(true)
const checked3 = ref(true)
</script>
```

## 禁用状态

使用 `disabled` 属性，来禁用 `switch`。

<div class="examples">
  <vi-switch v-model="checked4" disabled />
</div>

```vue
<template>
  <vi-switch v-model="checked4" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked4 = ref(true)
</script>
```

## 加载状态

使用 `loading` 属性，设置为加载状态。

<div class="examples">
  <vi-switch v-model="checked5" loading />
</div>

```vue
<template>
  <vi-switch v-model="checked5" loading />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked5 = ref(true)
</script>
```

## 描述内容

使用 `on-text`、`off-text` 属性，来添加描述信息，注意，它们仅能添加文字类型描述。

<div class="examples">
  <vi-switch v-model="checked6" on-text="开" off-text="关" />
</div>

```vue
<template>
  <vi-switch v-model="checked6" on-text="开" off-text="关" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked6 = ref(true)
</script>
```

## 图标描述

使用 `on-icon`、`off-icon` 属性，来设置图标描述，所有 Violet 内置的图标您都可以使用。

<div class="examples">
  <vi-switch v-model="checked7" on-icon="Check" off-icon="Close" />
</div>

```vue
<template>
  <vi-switch v-model="checked7" on-icon="Check" off-icon="Close" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked7 = ref(true)
</script>
```

## 内部模式（描述内容）

使用 `is-inside` 属性，调整描述内容为“内部模式”，如下所示。

<div class="examples">
  <vi-row>
    <vi-switch v-model="checked8" on-text="开" off-text="关" is-inside />
    <vi-switch v-model="checked9" on-icon="Check" off-icon="Close" is-inside />
  </vi-row>
</div>

```vue
<template>
  <vi-switch v-model="checked8" on-text="开" off-text="关" is-inside />
  <vi-switch v-model="checked9" on-icon="Check" off-icon="Close" is-inside />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked8 = ref(true)
const checked9 = ref(true)
</script>
```

## 自定义内容

使用 `on`、`off` 插槽，来自定义 `on`/`off` 状态内容。

::: tip

如果单纯的文字与图标无法满足您(或是您想使用自定义图标)，您可以使用这两个插槽自定义内容。  

:::

::: warning

**注意**：这两个插槽的优先级非常高，当您使用了这两个插槽后，属性内容都会被覆盖。并且，由于我们无法预知您会在插槽内放置什么内容，所以可能导致我们的默认样式无法达到您想要的效果，此时，需要您手动补充样式代码。

:::

<div class="examples">
  <vi-switch v-model="checked10" on-icon="Check" off-icon="Close">
    <template #on> On </template>
    <template #off> Off </template>
  </vi-switch>
  <vi-switch v-model="checked10" on-icon="Check" off-icon="Close" is-inside width="50px">
    <template #on> On </template>
    <template #off> Off </template>
  </vi-switch>
</div>

```vue
<template>
  <vi-switch v-model="checked10" on-icon="Check" off-icon="Close">
    <template #on> On </template>
    <template #off> Off </template>
  </vi-switch>
  <vi-switch v-model="checked10" on-icon="Check" off-icon="Close" is-inside width="50px">
    <template #on> On </template>
    <template #off> Off </template>
  </vi-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked10 = ref(true)
</script>
```

## APIs

### 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| v-model | 开关状态值 | `boolean` | —— |
| disabled | 禁用状态 | `boolean` | `false` |
| loading | 加载状态 | `boolean` | `false` |
| is-inside | 是否为内部模式 | `boolean` | `false` |
| on-color | 定义“开”状态的颜色 | `string` | —— |
| off-color | 定义“关”状态的颜色 | `string` | —— |
| on-text | 定义“开”状态描述文字 | `string` | —— |
| off-text | 定义“关”状态描述文字 | `string` | —— |
| on-icon | 定义“开”状态描述图标 | `string` | —— |
| off-icon | 定义“关”状态描述图标 | `string` | —— |
| width | 定义宽度 | `string` | —— |

### 插槽

| 插槽名 | 插槽说明 |
| :---: | :---: |
| on | “开” 状态内容 |
| off | “关” 状态内容 |