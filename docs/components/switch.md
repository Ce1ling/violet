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

## icon 描述

使用 `on-icon`、`off-icon` 属性，来设置图标描述，所有 violet 内置的图标您都可以使用。

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

## APIs

### 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| v-model | 开关状态值 | boolean | —— |
| disabled | 禁用状态 | boolean | false |
| loading | 加载状态 | boolean | false |
| is-inside | 是否为内部模式 | boolean | false |
| on-color | 定义“开”状态的颜色 | string | —— |
| off-color | 定义“关”状态的颜色 | string | —— |
| on-text | 定义“开”状态描述文字 | string | —— |
| off-text | 定义“关”状态描述文字 | string | —— |
| on-icon | 定义“开”状态描述图标 | string | —— |
| off-icon | 定义“关”状态描述图标 | string | —— |