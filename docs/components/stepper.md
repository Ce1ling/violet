<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref(1)
const val2 = ref(1)
const val3 = ref(0)
const val4 = ref(1)
const val5 = ref(1)
const val6 = ref(1)
const val7 = ref(1)
const val8 = ref(1)
const val9 = ref(1)
const val10 = ref(1)
const val11 = ref(1)
</script>

# Stepper 步进器

根据步数进行 增加/减少 操作。

## 基础用法

使用 `v-model` 指令，绑定数字内容。

<div class="examples">
  <vi-stepper v-model="val1" />
</div>

```vue
<template>
  <vi-stepper v-model="val1" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val1 = ref(1)
</script>
```

## 禁用状态

使用 `disabled` 属性，禁用步进器。

<div class="examples">
  <vi-stepper v-model="val2" disabled />
</div>

```vue
<template>
  <vi-stepper v-model="val2" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val2 = ref(1)
</script>
```

## 自定步数

使用 `step` 属性，自定义 “加”/“减” 时的步数。

<div class="examples">
  <vi-stepper v-model="val3" :step="3" />
</div>

```vue
<template>
  <vi-stepper v-model="val3" :step="3" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val3 = ref(0)
</script>
```

## 限制最大/最小值

使用 `min`、`max` 属性，分别设置最小值与最大值。当然，您也可以单独使用其中一个。

<div class="examples">
  <vi-flex align="center" gap="8px">
    <span>单独使用：</span>
    <vi-stepper v-model="val4" :min="1" />
    <span>一起使用：</span>
    <vi-stepper v-model="val5" :min="1" :max="3" />
  </vi-flex>
</div>

```vue
<template>
  <vi-flex align="center" gap="8px">
    <span>单独使用：</span>
    <vi-stepper v-model="val4" :min="1" />
    <span>一起使用：</span>
    <vi-stepper v-model="val5" :min="1" :max="3" />
  </vi-flex>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val3 = ref(0)
</script>
```

## 保留小数

使用 `to-fixed` 属性，保留小数。根据 `to-fixed` 的值保留小数位数。

::: tip

使用了 `to-fixed`，您就可以将 `step` 设置为小数进行 加/减 了。

:::

<div class="examples">
  <vi-flex gap="18px">
    <vi-stepper v-model="val6" :to-fixed="1" />
    <vi-stepper v-model="val7" :to-fixed="2" :step="0.3" />
    <vi-stepper v-model="val8" :to-fixed="3" :step="0.03" />
  </vi-flex>
</div>

```vue
<template>
  <vi-flex gap="18px">
    <vi-stepper v-model="val6" :to-fixed="1" />
    <vi-stepper v-model="val7" :to-fixed="2" :step="0.3" />
    <vi-stepper v-model="val8" :to-fixed="3" :step="0.03" />
  </vi-flex>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val6 = ref(1)
const val7 = ref(1)
const val8 = ref(1)
</script>
```

## 按钮位置

使用 `position` 属性，定义 “加”/“减” 按钮的位置。仅支持 `'left'` / `'right'`。

<div class="examples">
  <vi-flex gap="18px">
    <vi-stepper v-model="val9" position="left" :min="1" :max="5" />
    <vi-stepper v-model="val10" position="right" :min="1" :max="5" />
  </vi-flex>
</div>

```vue
<template>
  <vi-flex gap="18px">
    <vi-stepper v-model="val9" position="left" :min="1" :max="5" />
    <vi-stepper v-model="val10" position="right" :min="1" :max="5" />
  </vi-flex>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val9 = ref(1)
const val10 = ref(1)
</script>
```

## 定义 Icon 大小

使用 `icon-size` 属性，自定义 `Icon` 大小。

::: tip

一般您不需要此属性，因为 Violet 设置的 `Icon` 大小正好合适。但如您有特殊需求，可以使用此属性自定义。

:::

<div class="examples">
  <vi-flex gap="18px">
    <vi-stepper v-model="val9" icon-size="22px" />
    <vi-stepper v-model="val10" position="left" icon-size="16px" />
    <vi-stepper v-model="val11" position="right" icon-size="16px" />
  </vi-flex>
</div>

```vue
<template>
  <vi-flex gap="18px">
    <vi-stepper v-model="val9" icon-size="22px" />
    <vi-stepper v-model="val10" position="left" icon-size="16px" />
    <vi-stepper v-model="val11" position="right" icon-size="16px" />
  </vi-flex>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val9 = ref(1)
const val10 = ref(1)
const val11 = ref(1)
</script>
```

## APIs

### 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| `v-model` | 绑定步进器的值 | `number` | —— |
| disabled | 是否为禁用状态 | `boolean` | `false` |
| step | 步数 | `number` | 1 |
| max | 最大值 | `number` | `Infinity` |
| min | 最小值 | `number` | `-Infinity` |
| to-fixed | 保留小数 | `number` | —— |
| position | 按钮位置 | `'normal'` / `'left'` / `'right'` | `'normal'` |
| icon-size | icon 大小 | `string` | —— |
