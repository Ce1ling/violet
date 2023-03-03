<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref('1')
const val2 = ref('1')
const val3 = ref('1')
const val4 = ref('1')
const val5 = ref('1')
</script>

# Radio 单选框

对一组内容进行单选。

## 基础用法

您必须绑定 `v-model` 与 `label` 属性，才能使 `vi-radio` 正常工作。`v-model` 用于绑定同一个变量，`lable` 是选中此 radio 时提供的内容。

<div class="examples">
  <vi-flex gap="18px">
    <span>你喜欢干什么？</span>
    <vi-radio v-model="val1" label="1">写代码</vi-radio>
    <vi-radio v-model="val1" label="2">删代码</vi-radio>
    <vi-radio v-model="val1" label="3">改代码</vi-radio>
    <vi-radio v-model="val1" label="4">看代码</vi-radio>
  </vi-flex>
</div>

```vue
<template>
  <vi-flex gap="18px">
    <span>你喜欢干什么？</span>
    <vi-radio v-model="val1" label="1">写代码</vi-radio>
    <vi-radio v-model="val1" label="2">删代码</vi-radio>
    <vi-radio v-model="val1" label="3">改代码</vi-radio>
    <vi-radio v-model="val1" label="4">看代码</vi-radio>
  </vi-flex>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val1 = ref('1')
</script>
```

## 禁用状态

使用 `disabled` 属性，来禁用 radio。

<div class="examples">
  <vi-flex gap="18px">
    <span>你喜欢干什么？</span>
    <vi-radio v-model="val2" label="1">写代码</vi-radio>
    <vi-radio v-model="val2" label="2" disabled>删代码</vi-radio>
    <vi-radio v-model="val2" label="3" disabled>改代码</vi-radio>
    <vi-radio v-model="val2" label="4">看代码</vi-radio>
  </vi-flex>
</div>

```vue
<template>
  <vi-flex gap="18px">
    <span>你喜欢干什么？</span>
    <vi-radio v-model="val2" label="1">写代码</vi-radio>
    <vi-radio v-model="val2" label="2" disabled>删代码</vi-radio>
    <vi-radio v-model="val2" label="3" disabled>改代码</vi-radio>
    <vi-radio v-model="val2" label="4">看代码</vi-radio>
  </vi-flex>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val2 = ref('1')
</script>
```

## 带边框

使用 `border` 属性，来启用边框。

<div class="examples">
  <vi-flex gap="18px">
    <span>你喜欢干什么？</span>
    <vi-radio v-model="val3" label="1" border>写代码</vi-radio>
    <vi-radio v-model="val3" label="2" border disabled>删代码</vi-radio>
    <vi-radio v-model="val3" label="3" border>改代码</vi-radio>
    <vi-radio v-model="val3" label="4" border>看代码</vi-radio>
  </vi-flex>
</div>

```vue
<template>
  <vi-flex gap="18px">
    <span>你喜欢干什么？</span>
    <vi-radio v-model="val3" label="1" border>写代码</vi-radio>
    <vi-radio v-model="val3" label="2" border disabled>删代码</vi-radio>
    <vi-radio v-model="val3" label="3" border>改代码</vi-radio>
    <vi-radio v-model="val3" label="4" border>看代码</vi-radio>
  </vi-flex>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val3 = ref('1')
</script>
```

## Radio 组

如需使用 Radio 组，请使用 `vi-radio-group` 标签包裹。它提供 `gap` 属性来定义间距。

::: tip
使用了 `vi-radio-group`后，直接将 `v-model` 给 `vi-radio-group` 绑定即可，无需给每个 `vi-radio` 绑定。
:::

<div class="examples">
  <vi-flex gap="18px">
    <span>你喜欢干什么？</span>
    <vi-radio-group v-model="val5" gap="28px">
      <vi-radio label="1">写代码</vi-radio>
      <vi-radio label="2" disabled>删代码</vi-radio>
      <vi-radio label="3">改代码</vi-radio>
      <vi-radio label="4">看代码</vi-radio>
    </vi-radio-group>
  </vi-flex>
</div>

```vue
<template>
  <vi-flex gap="18px">
    <span>你喜欢干什么？</span>
    <vi-radio-group v-model="val5" gap="28px">
      <vi-radio label="1">写代码</vi-radio>
      <vi-radio label="2" disabled>删代码</vi-radio>
      <vi-radio label="3">改代码</vi-radio>
      <vi-radio label="4">看代码</vi-radio>
    </vi-radio-group>
  </vi-flex>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val4 = ref('1')
</script>
```

## 按钮类型

如需使用按钮类型，必须使用 `vi-radio-group` 标签包裹并添加 `is-button` 属性。因为 Violet 需要使用此标签做特殊处理，而 `is-button` 属性则表示使用按钮类型。

::: warning
注意：如果使用了按钮类型，`border` 属性将无效，因为按钮类型自带边框，您无需它。
:::

<div class="examples">
  <vi-flex gap="18px">
    <span>你喜欢干什么？</span>
    <vi-radio-group v-model="val4" is-button>
      <vi-radio label="1">写代码</vi-radio>
      <vi-radio label="2" disabled>删代码</vi-radio>
      <vi-radio label="3">改代码</vi-radio>
      <vi-radio label="4">看代码</vi-radio>
    </vi-radio-group>
  </vi-flex>
</div>

```vue
<template>
  <vi-flex gap="18px">
    <span>你喜欢干什么？</span>
    <vi-radio-group v-model="val4" is-button>
      <vi-radio label="1">写代码</vi-radio>
      <vi-radio label="2" disabled>删代码</vi-radio>
      <vi-radio label="3">改代码</vi-radio>
      <vi-radio label="4">看代码</vi-radio>
    </vi-radio-group>
  </vi-flex>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val4 = ref('1')
</script>
```

## APIs

### Radio 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| `v-model` | 绑定值 | string | —— |
| label | 选中时的内容 | boolean | false |
| disabled | 是否为禁用状态 | boolean | fasle |
| border | 是否需要边框 | boolean | false |

### RadioGroup 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| is-button | 是否为按钮类型 | boolean | false |
| gap | 间距 | string | '18px' |
