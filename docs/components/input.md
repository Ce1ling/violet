<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('')
const val3 = ref('')
const val4 = ref('')
const val5 = ref('')
const val6 = ref('')
const val7 = ref('')
const val8 = ref('')
const val9 = ref('')
const val10 = ref('')
const val11 = ref('')
const val12 = ref('')
const val13 = ref('')
const val14 = ref('')
const val15 = ref('')
</script>

# Input 输入框

用户输入类型组件。

## 基础用法

通过 `v-model` 指令，绑定其 `value` 值。

<div class="examples">
  <vi-input v-model="val1" placeholder="基础 Input" />
</div>

```vue
<template>
  <vi-input v-model="val1" placeholder="基础 Input" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref('')
</script>
```

## 禁用状态

通过 `disabled` 属性，来禁用 input。

<div class="examples">
  <vi-input v-model="val2" placeholder="禁用 Input" disabled />
</div>

```vue
<template>
  <vi-input v-model="val2" placeholder="禁用 Input" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const val2 = ref('')
</script>
```

## 可清空

通过 `clearable` 属性，启用清空按钮，在有输入内容时，它就会显示。

<div class="examples">
  <vi-input v-model="val3" placeholder="可清空 Input" clearable />
</div>

```vue
<template>
  <vi-input v-model="val3" placeholder="禁用 Input" clearable />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const val3 = ref('')
</script>
```

## 显示密码

通过 `show-pwd` 属性，启用切换显示密码框，前提是：此输入框必须是密码框。

<div class="examples">
  <vi-input v-model="val4" type="password" placeholder="显示密码" show-pwd />
</div>

```vue
<template>
  <vi-input v-model="val4" type="password" placeholder="显示密码" show-pwd />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const val4 = ref('')
</script>
```

## 限制输入

通过 `limit` 属性，来限制输入内容长度。你也可以通过 `show-limit`，来展示具体限制数。

<div class="examples">
  <vi-input v-model="val5" placeholder="限制输入 10 个字符" limit="10" /> <br />
  <vi-input v-model="val6" placeholder="显示限制输入" limit="10" show-limit />
</div>

```vue
<template>
  <vi-input v-model="val5" placeholder="限制输入 10 个字符" limit="10" />
  <vi-input v-model="val6" placeholder="显示限制输入" limit="10" show-limit />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const val5 = ref('')
const val6 = ref('')
</script>
```

## 文本域

将 `type` 属性设置为 `textarea`，启用文本域。你可以使用 `rows` 属性来控制高度，同时，文本域也支持限制输入。

<div class="examples">
  <vi-input v-model="val7" type="textarea" placeholder="文本域" /> <br />
  <vi-input v-model="val8" type="textarea" placeholder="文本域（自定义高度）" rows="5" /> <br />
  <vi-input v-model="val9" type="textarea" placeholder="文本域（限制输入）" limit="30" show-limit />
</div>

```vue
<template>
  <vi-input v-model="val7" type="textarea" placeholder="文本域" />
  <vi-input v-model="val8" type="textarea" placeholder="文本域（自定义高度）" rows="5" />
  <vi-input v-model="val9" type="textarea" placeholder="文本域（限制输入）" limit="30" show-limit />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const val7 = ref('')
const val8 = ref('')
const val9 = ref('')
</script>
```

## 自定义 Icon

通过 `pre-icon`、`suf-icon` 属性，定义前后 Icon，它会使用 Violet 所提供的 Icon。如果你想对 Icon 做出一些设置，可以使用对象形式。对于更复杂的设置（或想自定义的不是 Icon），你可以使用 “插槽模式”，我们提供了 `prefix`、`suffix` 插槽。

<div class="examples">
  <vi-input v-model="val10" placeholder="自定义前后 icon" pre-icon="Search" suf-icon="Menu" /> <br />
  <vi-input v-model="val11" placeholder="自定义前后 icon（对象式）" 
    :pre-icon="{ name: 'Apple', size: '16px', hoverColor: 'var(--primary-color)' }" 
    :suf-icon="{ name: 'Windows', size: '16px', hoverColor: 'var(--primary-color)' }"  
  />  <br />
  <vi-input v-model="val12" placeholder="自定义前后 icon (插槽模式)">
    <template #prefix>
      <vi-icon name="Plus" size="16px" color="var(--primary-color)" />
    </template>
    <template #suffix>suffix</template>
  </vi-input>
</div>

```vue
<template>
  <vi-input v-model="val10" placeholder="自定义前后 icon" pre-icon="Search" suf-icon="Menu" /> <br />
  <vi-input v-model="val11" placeholder="自定义前后 icon（对象式）" 
    :pre-icon="{ name: 'Apple', size: '16px', hoverColor: 'var(--primary-color)' }" 
    :suf-icon="{ name: 'Windows', size: '16px', hoverColor: 'var(--primary-color)' }"  
  />  <br />
  <vi-input v-model="val12" placeholder="自定义前后 icon (插槽模式)">
    <template #prefix>
      <vi-icon name="Plus" size="16px" color="var(--primary-color)" />
    </template>
    <template #suffix>suffix</template>
  </vi-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const val10 = ref('')
const val11 = ref('')
const val12 = ref('')
</script>
```

## 复合型

通过 `prepend`、`append` 插槽，设置前后置内容。

<div class="examples">
  <vi-input v-model="val13" placeholder="添加前置与后置内容" clearable>
    <template #prepend>http://</template>
    <template #append>.com</template>
  </vi-input>
</div>

```vue
<template>
  <vi-input v-model="val13" placeholder="添加前置与后置内容" clearable>
    <template #prepend>http://</template>
    <template #append>.com</template>
  </vi-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const val13 = ref('')
</script>
```

## APIs

### 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| type | Input 类型 | string | 'text' |
| placeholder | 同原生属性 | string | —— |
| disabled | 禁用 Input | boolean | fasle |
| clearable | 显示清空按钮 | boolean | false |
| show-pwd | 切换显示密码 | boolean | false |
| rows | `type=textarea` 的高度 | string | '2' |
| limit | 限制输入长度 | string | —— |
| show-limit | 显示限制长度 | boolean | false |
| pre-icon | 头部图标 | `vi-icon` / string | —— |
| suf-icon | 尾部图标 | `vi-icon` / string | —— |

### 插槽

| 插槽名 | 插槽说明 | 注意事项 |
| :---: | :---: | :---: |
| prefix | 头部内容 | 对 `type="textarea"` 无效 |
| suffix | 尾部内容 | 对 `type="textarea"` 无效 |
| prepend | 前置内容 | 对 `type="textarea"` 无效 |
| append | 后置内容 | 对 `type="textarea"` 无效 |
