<script setup lang="ts">
import { ref } from 'vue'

const tabActive = ref('Vue')
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const show5 = ref(false)
const show6 = ref(false)
const show7 = ref(false)
const show8 = ref(false)
const show9 = ref(false)
const show10 = ref(false)
const show11 = ref(false)
const show12 = ref(false)
const show13 = ref(false)
const movable = ref(true)

const open = () => {
  console.log('dialog open')
}
const close = () => {
  console.log('dialog close')
}
const beforeClose = (close: () => void) => {
  console.log('before close 阻止了关闭')
}
</script>

# Dialog 对话框

在不影响当前页面的情况下，进行一些页面相关操作。

## 基础用法

通过 `v-model` 绑定 `Dialog` 是否显示(它必须是 `boolean`)，使用 `title` 属性来定义头部内容、`width` 来定义宽度，标签体内容将会被渲染为主体内容。

<div class="examples">
  <vi-button @click="show1 = true">打开 Dialog</vi-button>
  <vi-dialog v-model="show1" width="30%" title="你知道吗">
    香菜是这个世界上最难吃的菜
    <template #footer>
      <vi-button @click="show1 = false">确认</vi-button>
      <vi-button type="info" @click="show1 = false">取消</vi-button>
    </template>
  </vi-dialog>
</div>

```vue
<template>
  <vi-button @click="show1 = true">打开 Dialog</vi-button>
  <vi-dialog v-model="show1" width="30%" title="你知道吗">
    香菜是这个世界上最难吃的菜
    <template #footer>
      <vi-button @click="show1 = false">确认</vi-button>
      <vi-button type="info" @click="show1 = false">取消</vi-button>
    </template>
  </vi-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show1 = ref(false)
</script>
```

## 进阶用法

使用 `content` 属性，定义主体内容。通过 `show-close-btn`，来隐藏默认的关闭按钮。通过 `z-index` 可自定义 `Dialog` 的 CSS `z-index`。

::: tip

1. 如果您的 `Dialog` 仅包含简单的文本，可以直接使用 `title` + `content` 的形式进行简写，使代码更加简洁！
2. 如果您需要自定义的内容比较多，可以使用 `header`、`default`、`footer` 插槽，任意定义！

:::

::: warning

不过请注意，`title` 与 `header` 插槽不能一起使用，`content` 与 `default` 插槽也是如此。

:::

<div class="examples">
  <vi-row>
    <vi-button @click="show2 = true">打开简写的 Dialog</vi-button>
    <vi-button @click="show3 = true">打开自定义的 Dialog</vi-button>
  </vi-row>
  <vi-dialog 
    v-model="show2" 
    width="30%" 
    title="简写形式" 
    content="使用 content 属性简写"
    :show-close-btn="false"
  />
  <vi-dialog v-model="show3" :show-close-btn="false">
    <template #header>
      <span>自定义的头部</span>
      <vi-button type="danger" @click="show3 = false">
        <vi-icon name="Close" />
      </vi-button>
    </template>
    主体内容可以是其他组件
    <vi-tabs v-model="tabActive">
      <vi-tab name="Vue" label="Vue">Vue</vi-tab>
      <vi-tab name="React" label="React">React</vi-tab>
      <vi-tab name="Svelte" label="Svelte">Svelte</vi-tab>
    </vi-tabs>
    <template #footer>
      自定义底部
      <vi-button @click="show3 = false">关闭</vi-button>
    </template>
  </vi-dialog>
</div>

```vue
<template>
  <vi-row>
    <vi-button @click="show2 = true">打开简写的 Dialog</vi-button>
    <vi-button @click="show3 = true">打开自定义的 Dialog</vi-button>
  </vi-row>
  <vi-dialog 
    v-model="show2" 
    width="30%" 
    title="简写形式" 
    content="使用 content 属性简写"
    :show-close-btn="false"
  />
  <vi-dialog 
    v-model="show3" 
    width="30%" 
    :show-close-btn="false">
    <template #header>
      <span>自定义的头部</span>
      <vi-button type="danger" @click="show3 = false">
        <vi-icon name="Close" />
      </vi-button>
    </template>
    自定义主体内容
    <template #footer>
      自定义底部
      <vi-button @click="show3 = false">关闭</vi-button>
    </template>
  </vi-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show2 = ref(false)
const show3 = ref(false)
</script>
```

## 多层嵌套

有时您可能需要在一个 `Dialog` 中再打开一个 `Dialog`，此时，请尽量给子级 `Dialog` 加上 `append-to-body` 属性，即使未出现问题。

::: warning

一般来说，我们并不推荐嵌套，但如果确实存在此需求，请最好给子级 `Dialog` 加上 `append-to-body` 属性。

:::

<div class="examples">
  <vi-button @click="show4 = true">打开 Dialog</vi-button>
  <vi-dialog v-model="show4" title="嵌套 Dialog">
    <vi-button @click="show5 = true">打开嵌套</vi-button>
    <vi-dialog 
      v-model="show5" 
      width="30%" 
      title="我是一个" 
      content="在 Dialog 里面的 Dialog"
    />
  </vi-dialog>
</div>

```vue
<template>
  <vi-button @click="show4 = true">打开 Dialog</vi-button>
  <vi-dialog v-model="show4" title="嵌套 Dialog">
    <vi-button @click="show5 = true">打开嵌套</vi-button>
    <vi-dialog 
      v-model="show5" 
      width="30%" 
      title="我是一个" 
      content="在 Dialog 里面的 Dialog"
    />
  </vi-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show4 = ref(false)
const show5 = ref(false)
</script>
```

## 设置居中

我们提供的居中一共分为两种：内容居中、整体居中。使用 `center` 将内容居中，`box-center` 将整体居中。

::: tip

两种居中可以一起使用，如果使有嵌套的话，子级会继承父级的居中。

:::

<div class="examples">
  <vi-button @click="show6 = true">内容居中</vi-button>
  <vi-dialog v-model="show6" title="嵌套 Dialog" center>
    这是内容
    <vi-dialog 
      v-model="show7" 
      width="30%" 
      title="整体居中" 
      content="我在屏幕中间"
      box-center
      :show-close-btn="false"
    />
    <template #footer>
      <vi-button @click="show7 = true">整体居中</vi-button>
    </template>
  </vi-dialog>
</div>

```vue
<template>
  <vi-button @click="show5 = true">内容居中</vi-button>
  <vi-dialog v-model="show6" title="嵌套 Dialog" center>
    这是内容
    <vi-dialog 
      v-model="show6" 
      width="30%" 
      title="整体居中" 
      content="我在屏幕中间"
      box-center
      :show-close-btn="false"
    />
    <template #footer>
      <vi-button @click="show6 = true">整体居中</vi-button>
    </template>
  </vi-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show6 = ref(false)
const show7 = ref(false)
</script>
```

## 隐藏遮罩层

我们提供的居中一共分为两种：内容居中、整体居中。使用 `center` 将内容居中，`box-center` 将整体居中。

::: tip

两种居中可以一起使用，如果使有嵌套的话，子级会继承父级的居中。

:::

<div class="examples">
  <vi-button @click="show8 = true">打开</vi-button>
  <vi-dialog v-model="show8" title="隐藏遮罩层" :mask="false">
    无遮罩层
  </vi-dialog>
</div>

```vue
<template>
  <vi-button @click="show8 = true">打开</vi-button>
  <vi-dialog v-model="show8" title="隐藏遮罩层" :mask="false">
    无遮罩层
  </vi-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show8 = ref(false)
</script>
```

## 解锁滚动条

通过 `lock-scroll` 属性，来锁定/解锁滚动条。默认为锁定。

<div class="examples">
  <vi-button @click="show9 = true">打开</vi-button>
  <vi-dialog v-model="show9" title="解锁滚动条" :lock-scroll="false">
    试着滚动一下鼠标滚轮
  </vi-dialog>
</div>

```vue
<template>
  <vi-button @click="show9 = true">打开</vi-button>
  <vi-dialog v-model="show9" title="解锁滚动条" :lock-scroll="false">
    试着滚动一下鼠标滚轮
  </vi-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show9 = ref(false)
</script>
```

## 可移动的

通过 `movable` 属性，来启用可拖拽的 `Dialog`。

::: tip

您还可以通过切换 `movable` 属性值达到切换可拖拽性的目的。

:::

<div class="examples">
  <vi-button @click="show10 = true">打开</vi-button>
  <vi-dialog v-model="show10" width="30%" title="可移动(拖拽)" :movable="movable">
    将鼠标放到 header 区域，然后按下拖动。
    <vi-button @click="movable = !movable">
      切换为 {{ movable ? '不可移动' : '可移动' }}
    </vi-button>
  </vi-dialog>
</div>

```vue
<template>
  <vi-button @click="show10 = true">打开</vi-button>
  <vi-dialog v-model="show10" width="30%" title="可移动(拖拽)" :movable="movable">
    将鼠标放到 header 区域，然后按下拖动。
    <vi-button @click="movable = !movable">
      切换为 {{ movable ? '不可移动' : '可移动' }}
    </vi-button>
  </vi-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show10 = ref(false)
const movable = ref(true)
</script>
```

## 遮罩层不可关闭

通过 `click-mask-close` 属性，设置点击遮罩层时不可以关闭。默认可关闭。

::: tip

对了，`Dialog` 在打开和关闭时都会触发事件，分别是：`open`、`close`。

:::

<div class="examples">
  <vi-button @click="show11 = true">打开</vi-button>
  <vi-dialog 
    v-model="show11" 
    width="30%" 
    title="点击遮罩层" 
    box-center 
    :click-mask-close="false"
    @open="open"
    @close="close">
    试着点击遮罩层
  </vi-dialog>
</div>

```vue
<template>
  <vi-button @click="show11 = true">打开</vi-button>
  <vi-dialog 
    v-model="show11" 
    width="30%" 
    title="点击遮罩层" 
    box-center 
    :click-mask-close="false"
    @open="open"
    @close="close">
    试着点击遮罩层
  </vi-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show11 = ref(false)
const open = () => {
  console.log('dialog open')
}
const close = () => {
  console.log('dialog close')
}
</script>
```

## 关闭时销毁

使用 `destroy` 属性，设置关闭后销毁节点。默认不销毁。

<div class="examples">
  <vi-button @click="show12 = true">打开</vi-button>
  <vi-dialog v-model="show12" width="30%" title="关闭时销毁" destroy>
    在开发者工具中的 Elements 中查看吧！
  </vi-dialog>
</div>

```vue
<template>
  <vi-button @click="show12 = true">打开</vi-button>
  <vi-dialog v-model="show12" width="30%" title="关闭时销毁" destroy>
    在开发者工具中的 Elements 中查看吧！
  </vi-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show12 = ref(false)
</script>
```

## 阻止关闭

使用 `before-close` 属性，并绑定一个函数，则可阻止关闭。在关闭前会调用此函数，如果您不在此函数内手动关闭，则不会关闭。

::: tip

`before-close` 绑定的函数会接收一个参数，此参数是一个关闭函数，通过调用此函数手动关闭。

:::

::: warning

注意！虽然添加 `before-close` 之后会在关闭前阻止关闭，但如果是通过直接修改 `v-model` 绑定值关闭的话，则不受此属性影响。

:::

<div class="examples">
  <vi-button @click="show13 = true">打开</vi-button>
  <vi-dialog v-model="show13" width="30%" title="阻止关闭" :before-close="beforeClose">
    <span>试着点击右上角 "关闭按钮" 与 "遮罩层"。他们都无法关闭此 Dialog，但下方按钮可以。</span>
    <template #footer>
      <vi-button @click="show13 = false">修改 v-model 关闭</vi-button>
    </template>
  </vi-dialog>
</div>

```vue
<template>
  <vi-button @click="show13 = true">打开</vi-button>
  <vi-dialog v-model="show13" width="30%" title="阻止关闭" :before-close="beforeClose">
    <span>试着点击右上角 "关闭按钮" 与 "遮罩层"。他们都无法关闭此 Dialog，但下方按钮可以。</span>
    <template #footer>
      <vi-button @click="show13 = false">修改 v-model 关闭</vi-button>
    </template>
  </vi-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show13 = ref(false)
const beforeClose = (close: () => void) => {
  console.log('before close 阻止了关闭', close)
}
</script>
```

## APIs

### 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| `v-model` | `Dialog` 显示/隐藏值 | `boolean` | —— |
| title | 标题 | `string` | —— |
| content | 主体内容 | `string` | —— |
| width | 宽度 | `string` | '50%' |
| z-index | 同原生 CSS `z-index` | `number` | —— |
| show-close-btn | 是否为显示关闭按钮 | `boolean` | `true` |
| append-to-body | 是否插入至 `body` | `boolean` | `false` |
| center | 是否将内容居中 | `boolean` | `false` |
| box-center | 是否将整体居中 | `boolean` | `false` |
| mask | 是否需要遮罩层 | `boolean` | `true` |
| movable | 是否可移动(拖动) | `boolean` | `false` |
| lock-scroll | 是否锁定滚动条 | `boolean` | `true` |
| click-mask-close | 是否可点击遮罩层关闭 | `boolean` | `true` |
| destroy | 是否在关闭时销毁节点 | `boolean` | `false` |
| before-close | 关闭前回调，可以阻止关闭。通过调用 `close` 参数函数手动关闭。 | `(close: () => void) => void` | `false` |

### 事件

| 事件名 | 事件触发时机 | 事件参数 |
| :---: | :---: | :---: |
| open | `Dialog` 打开时触发 | `(val: boolean) => void` |
| close | `Dialog` 关闭时触发 | `(val: boolean) => void` |

### 插槽

| 插槽名 | 插槽说明 |
| :---: | :---: |
| header | 头部区域，会替换 `title` 属性内容 |
| footer | 底部区域 |
