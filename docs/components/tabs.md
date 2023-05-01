<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref('1')
const val2 = ref('1')
const active = ref('1')
const change = () => {
  const state = active.value <= 3 ? Number(active.value) + 1 : 1
  active.value = state.toString()
}
const list = ref([
  { name: '1', label: 'Vue', content: 'Vue，渐进式 JavaScript 框架' },
  { name: '2', label: 'React', content: 'React，用于构建用户界面的 JavaScript 库' },
  { name: '3', label: 'Svelte', content: 'Svelte，控制性增强的 Web 应用程序' },
  { name: '4', label: 'Solid', content: 'Solid，用于构建用户界面的简单且高性能的响应式' }
])
const val3 = ref('1')
const val4 = ref('1')
const handleRemove = (name: string) => {
  list.value = list.value.filter(v => v.name !== name)
}
const beforeChange = (name) => !(name === '2')
</script>

# Tabs 标签

Tabs 选项卡切换组件，分隔展示不同类型的数据。

## 基础用法

简单的切换展示。

::: tip

您必须为 `vi-tabs` 指定一个 `active` 属性，它用于指定当前展示的 tab，与 `vi-tab` 的 `name` 属性对应。所以您也必须为 `vi-tab` 指定 `label`、`name` 属性，前者用于渲染 tab 的头部，后者作为唯一标识符。

:::

<div class="examples">
  <vi-tabs v-model="val1">
    <vi-tab label="Vue" name="1">Vue，渐进式 JavaScript 框架</vi-tab>
    <vi-tab label="React" name="2">React，用于构建用户界面的 JavaScript 库</vi-tab>
    <vi-tab label="Svelte" name="3">Svelte，控制性增强的 Web 应用程序</vi-tab>
    <vi-tab label="Solid" name="4">Solid，用于构建用户界面的简单且高性能的响应式</vi-tab>
  </vi-tabs>
</div>

```vue
<template>
  <vi-tabs v-model="val1">
    <vi-tab label="Vue" name="1">Vue，渐进式 JavaScript 框架</vi-tab>
    <vi-tab label="React" name="2">React，用于构建用户界面的 JavaScript 库</vi-tab>
    <vi-tab label="Svelte" name="3">Svelte，控制性增强的 Web 应用程序</vi-tab>
    <vi-tab label="Solid" name="4">Solid，用于构建用户界面的简单且高性能的响应式</vi-tab>
  </vi-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val1 = ref('1')
</script>
```

## 动态切换

通过动态的 `active` 属性，来切换当前展示的 tab。如下所示：

<div class="examples">
  <vi-button @click="change">动态切换</vi-button>  <br />
  <vi-tabs v-model="active">
    <vi-tab label="Vue" name="1">Vue，渐进式 JavaScript 框架</vi-tab>
    <vi-tab label="React" name="2">React，用于构建用户界面的 JavaScript 库</vi-tab>
    <vi-tab label="Svelte" name="3">Svelte，控制性增强的 Web 应用程序</vi-tab>
    <vi-tab label="Solid" name="4">Solid，用于构建用户界面的简单且高性能的响应式</vi-tab>
  </vi-tabs>
</div>

```vue
<template>
  <vi-button @click="change">动态切换</vi-button> <br />
  <vi-tabs v-model="active">
    <vi-tab label="Vue" name="1">Vue，渐进式 JavaScript 框架</vi-tab>
    <vi-tab label="React" name="2">React，用于构建用户界面的 JavaScript 库</vi-tab>
    <vi-tab label="Svelte" name="3">Svelte，控制性增强的 Web 应用程序</vi-tab>
    <vi-tab label="Solid" name="4">Solid，用于构建用户界面的简单且高性能的响应式</vi-tab>
  </vi-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const active = ref('1')
const change = () => {
  const state = active.value <= 3 ? Number(active.value) + 1 : 1
  active.value = state.toString()
}
</script>
```

## ifMode

类似 Vue `v-if` 与 `v-show` 的区别，为了性能考虑，此模式默认为 `false`。如果您有需要，可以开启，开启后只有高亮的 Tab 会被渲染，其他 Tab 将被销毁！

::: tip

您可以打开“开发者工具”，并在 `Elements` 面板中来查看节点的渲染情况。如果您熟悉 Vue `v-if` 与 `v-show` 指令的区别，相信您立马就能理解！

:::

<div class="examples">
  <vi-tabs v-model="val2" if-mode>
    <vi-tab label="Vue" name="1">Vue，渐进式 JavaScript 框架</vi-tab>
    <vi-tab label="React" name="2">React，用于构建用户界面的 JavaScript 库</vi-tab>
    <vi-tab label="Svelte" name="3">Svelte，控制性增强的 Web 应用程序</vi-tab>
    <vi-tab label="Solid" name="4">Solid，用于构建用户界面的简单且高性能的响应式</vi-tab>
  </vi-tabs>
</div>

```vue
<template>
  <vi-tabs v-model="val2" if-mode>
    <vi-tab label="Vue" name="1">Vue，渐进式 JavaScript 框架</vi-tab>
    <vi-tab label="React" name="2">React，用于构建用户界面的 JavaScript 库</vi-tab>
    <vi-tab label="Svelte" name="3">Svelte，控制性增强的 Web 应用程序</vi-tab>
    <vi-tab label="Solid" name="4">Solid，用于构建用户界面的简单且高性能的响应式</vi-tab>
  </vi-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val2 = ref('1')
</script>
```

## 可被移除

使用 `removable` 属性，设置标签可被移除。点击移除按钮后触发 `tab-remove` 事件。

::: warning

请注意！移除按钮仅触发 `tab-remove` 事件并传入相应参数，您需要自己编写移除逻辑。因为 Violet 并不知道您的数据结构，而如果操作 DOM 的话，效率会非常低！同样的，移除后当前 Tab 也需要您手动更新，因为 Violet 同样不知道您的更新后的数据！

:::

<div class="examples">
  <vi-tabs v-model="val3" removable @tab-remove="handleRemove">
    <vi-tab 
      v-for="item in list"
      :key="item.name"
      :name="item.name"
      :label="item.label">
      {{ item.content }}
    </vi-tab>
  </vi-tabs>
</div>

```vue
<template>
  <vi-tabs v-model="val3" removable @tab-remove="handleRemove">
    <vi-tab 
      v-for="item in list"
      :key="item.name"
      :name="item.name"
      :label="item.label">
      {{ item.content }}
    </vi-tab>
  </vi-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const list = ref([
  { name: '1', label: 'Vue', content: 'Vue，渐进式 JavaScript 框架' },
  { name: '2', label: 'React', content: 'React，用于构建用户界面的 JavaScript 库' },
  { name: '3', label: 'Svelte', content: 'Svelte，控制性增强的 Web 应用程序' },
  { name: '4', label: 'Solid', content: 'Solid，用于构建用户界面的简单且高性能的响应式' }
])
const val3 = ref('1')
const handleRemove = (name: string) => {
  list.value = list.value.filter(v => v.name !== name)
}
</script>
```

## 阻止切换

使用 `before-change` 钩子，此钩子函数返回 `true` 则正常切换，返回 `false` 则阻止切换。

::: tip
此示例中使用 `before-change` 阻止了切换到 `React`，所以您无法切换到 `React`。
:::

::: warning 
注意：`before-change` 虽然会阻止切换，但被点击的标签仍能触发 `tab-click` 事件。
:::

<div class="examples">
  <vi-tabs v-model="val4" :before-change="beforeChange">
    <vi-tab 
      v-for="item in JSON.parse(JSON.stringify(list))"
      :key="item.name"
      :name="item.name"
      :label="item.label">
      {{ item.content }}
    </vi-tab>
  </vi-tabs>
</div>

```vue
<template>
  <vi-tabs v-model="val4" :before-change="beforeChange">
    <vi-tab 
      v-for="item in JSON.parse(JSON.stringify(list))"
      :key="item.name"
      :name="item.name"
      :label="item.label">
      {{ item.content }}
    </vi-tab>
  </vi-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val4 = ref('1')
const beforeChange = (name) => !(name === '2')
</script>
```

## APIs

### Tabs 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| `v-model` | 当前展示的标签 | `string` | —— |
| active-bg-color | 当前展示的标签的背景颜色 | `string` | `'#802ae8'` |
| bg-color | 标题背景颜色 | `string` | `#eeeeee` |
| ifMode | 是否为类似 `v-if` 的模式 | `boolean` | `false` |
| removable | 是否可被移除 | `boolean` | `false` |
| before-change | 标签切换前触发，返回 `false` 则阻止切换 | `(name: string) => boolean` | —— |

### Tabs 事件

| 事件名 | 事件触发时机 | 事件参数 |
| :---: | :---: | :---: |
| tab-click |标签标题被点击时触发 | `(name: string, e: MouseEvent) => void` |
| tab-remove | 点击移除按钮触发 | `(name: string, e: MouseEvent) => void` |
| change | `v-model` 值改变后触发 | `(newVal: string, oldVal: string) => void` |

### Tab 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| label |标签 标题 | `string` | —— |
| name | 唯一标识符，标签的 `v-model` 根据此属性辨别当前展示的标签 | `string` | —— |
