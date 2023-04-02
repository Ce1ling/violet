<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref(true)
const val2 = ref(false)
const val3 = ref(true)
const val4 = ref(false)
const val5 = ref(true)
const val6 = ref(false)
const val7 = ref(true)
const val8 = ref(false)
const val9 = ref(true)
const val10 = ref(false)
const val11 = ref(true)
const val12 = ref(false)
const val13 = ref(['AK-47'])
const val14 = ref(['AK-47'])
const val15 = ref(['AK-47'])
</script>


# Checkbox 复选框

对一组内容进行多选。

## 基础用法

通过 `v-model` 绑定选中状态，`vi-checkbox` 的 `label` 内容可以当作标签体内容，如果您的标签体内容与 `label` 内容一致的话，可以省略标签体。

<div class="examples">
  <vi-flex gap="18px">
    <span>请选择你的武器</span>
    <vi-checkbox v-model="val1" label="AK-47" />
    <vi-checkbox v-model="val2" label="AWP" />
    <vi-checkbox v-model="val3" label="M4A4" />
    <vi-checkbox v-model="val4" label="M4A1-S" />
  </vi-flex>
</div>

```vue
<template>
  <vi-flex gap="18px">
    <span>请选择你的武器</span>
    <vi-checkbox v-model="val1" label="AK-47" />
    <vi-checkbox v-model="val2" label="AWP" />
    <vi-checkbox v-model="val3" label="M4A4" />
    <vi-checkbox v-model="val4" label="M4A1-S" />
  </vi-flex>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val1 = ref(true)
const val2 = ref(false)
const val3 = ref(true)
const val4 = ref(false)
</script>
```

## 禁用状态

通过 `disabled` 属性，禁用 checkbox。

<div class="examples">
  <vi-flex gap="18px">
    <span>请选择你的武器</span>
    <vi-checkbox v-model="val5" label="AK-47" disabled />
    <vi-checkbox v-model="val6" label="AWP" />
    <vi-checkbox v-model="val7" label="M4A4" />
    <vi-checkbox v-model="val8" label="M4A1-S" disabled />
  </vi-flex>
</div>

```vue
<template>
  <vi-flex gap="18px">
    <span>请选择你的武器</span>
    <vi-checkbox v-model="val5" label="AK-47" disabled />
    <vi-checkbox v-model="val6" label="AWP" />
    <vi-checkbox v-model="val7" label="M4A4" />
    <vi-checkbox v-model="val8" label="M4A1-S" disabled />
  </vi-flex>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val5 = ref(true)
const val6 = ref(false)
const val7 = ref(true)
const val8 = ref(false)
</script>
```

## 带边框

通过 `border` 属性，启用边框。

<div class="examples">
  <vi-flex gap="18px">
    <span>请选择你的武器</span>
    <vi-checkbox v-model="val9" label="AK-47" border />
    <vi-checkbox v-model="val10" label="AWP" border />
    <vi-checkbox v-model="val11" label="M4A4" border disabled />
    <vi-checkbox v-model="val12" label="M4A1-S" border />
  </vi-flex>
</div>

```vue
<template>
  <vi-flex gap="18px">
    <span>请选择你的武器</span>
    <vi-checkbox v-model="val9" label="AK-47" border />
    <vi-checkbox v-model="val10" label="AWP" border />
    <vi-checkbox v-model="val11" label="M4A4" border disabled />
    <vi-checkbox v-model="val12" label="M4A1-S" border />
  </vi-flex>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val9 = ref(true)
const val10 = ref(false)
const val11 = ref(true)
const val12 = ref(false)
</script>
```

## Ckeckbox 组

如需使用 Ckeckbox 组，请使用 `vi-checkbox-group` 标签包裹。它提供 `gap` 属性来定义间距。

::: tip

**强烈建议**您使用 `vi-radio-group`，因为它可以更好的组织结构。  
使用了 `vi-checkbox-group`后，可直接将 `v-model` 绑定在 `vi-checkbox-group` 上，无需绑定给每个 `vi-checkbox`。

:::

<div class="examples">
  <vi-flex gap="18px">
    <span>请选择你的武器</span>
    <vi-checkbox-group v-model="val14" gap="18px" border>
      <vi-checkbox label="AK-47" />
      <vi-checkbox label="AWP" />
      <vi-checkbox label="M4A4" disabled />
      <vi-checkbox label="M4A1-S" />
    </vi-checkbox-group>
  </vi-flex>
</div>

```vue
<template>
  <vi-flex gap="18px">
    <span>请选择你的武器</span>
    <vi-checkbox-group v-model="val14" gap="18px" border>
      <vi-checkbox label="AK-47" />
      <vi-checkbox label="AWP" />
      <vi-checkbox label="M4A4" disabled />
      <vi-checkbox label="M4A1-S" />
    </vi-checkbox-group>
  </vi-flex>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val14 = ref(['AK-47'])
</script>
```

## 按钮类型

如需使用按钮类型，请使用 `vi-checkbox-group` 标签包裹并添加 `is-button` 属性。因为 Violet 需要使用此标签做特殊处理，，而 `is-button` 属性则表示使用按钮类型。

::: warning

**注意**：如果使用了按钮类型，`border` 属性将无效，因为按钮类型自带边框，您无需它。

:::

::: danger

**警告**：在单独使用 `vi-checkbox` 时(没有被 `vi-checkbox-group` 包裹的情况下)，请勿单独在 `vi-checkbox` 上添加 `is-btn` 属性，否则会导致 UI 错乱！

:::

<div class="examples">
  <vi-flex gap="18px">
    <span>请选择你的武器</span>
    <vi-checkbox-group v-model="val13" is-button>
      <vi-checkbox label="AK-47" />
      <vi-checkbox label="AWP" />
      <vi-checkbox label="M4A4" disabled />
      <vi-checkbox label="M4A1-S" />
    </vi-checkbox-group>
  </vi-flex>
</div>

```vue
<template>
  <vi-flex gap="18px">
    <span>请选择你的武器</span>
    <vi-checkbox-group v-model="val13" is-button>
      <vi-checkbox label="AK-47" />
      <vi-checkbox label="AWP" />
      <vi-checkbox label="M4A4" disabled />
      <vi-checkbox label="M4A1-S" />
    </vi-checkbox-group>
  </vi-flex>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val13 = ref(['AK-47'])
</script>
```

## 限制选中数量

如需限制选中数量，请使用 `vi-checkbox-group` 包裹。使用 `min` 属性来限制最少选中，`max` 属性来限制最多选中。

<div class="examples">
  <vi-flex gap="18px">
    <span>请选择你的武器</span>
    <vi-checkbox-group v-model="val15" :min="1" :max="3">
      <vi-checkbox label="AK-47" />
      <vi-checkbox label="AWP" />
      <vi-checkbox label="M4A4" />
      <vi-checkbox label="M4A1-S" />
    </vi-checkbox-group>
  </vi-flex>
</div>

```vue
<template>
  <vi-flex gap="18px">
    <span>请选择你的武器</span>
    <vi-checkbox-group v-model="val15" :min="1" :max="3">
      <vi-checkbox label="AK-47" />
      <vi-checkbox label="AWP" />
      <vi-checkbox label="M4A4" />
      <vi-checkbox label="M4A1-S" />
    </vi-checkbox-group>
  </vi-flex>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val15 = ref(['AK-47'])
</script>
```

## APIs

### Checkbox 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| `v-model` | 绑定值 | `string` | —— |
| label | 选中时的内容 | `boolean` | `false` |
| disabled | 是否为禁用状态 | `boolean` | `fasle` |
| border | 是否需要边框 | `boolean` | `false` |

### CheckboxGroup 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| `v-model` | 绑定值 | `string` | —— |
| gap | 间距 | `string` | `'18px'` |
| min | 限制最少选中 | `number` | `0` |
| max | 限制最多选中 | `number` | `Infinity` |
| is-button | 是否为按钮类型 | `boolean` | `false` |
| border | 是否需要边框 | `boolean` | `false` |
