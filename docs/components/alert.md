<script setup lang="ts">
const close = () => window.alert('Closing')
</script>

# Alert 提示

对一些状态进行友好提示。

## 基础用法

我们为您提供了共 5种 类型的 Alert。

<div class="examples">
  <vi-flex direction="column" gap="18px">
    <vi-alert>主要提示</vi-alert>
    <vi-alert type="success">成功提示</vi-alert>
    <vi-alert type="info">信息提示</vi-alert>
    <vi-alert type="warning">警告提示</vi-alert>
    <vi-alert type="danger">危险提示</vi-alert>
  </vi-flex>
</div>

```vue
<template>
  <vi-flex direction="column" gap="18px">
    <vi-alert>主要提示</vi-alert>
    <vi-alert type="success">成功提示</vi-alert>
    <vi-alert type="info">信息提示</vi-alert>
    <vi-alert type="warning">警告提示</vi-alert>
    <vi-alert type="danger">危险提示</vi-alert>
  </vi-flex>
</template>
```

## 可关闭的

使用 `closable` 属性，设置 Alert 可被关闭。

<div class="examples">
  <vi-flex direction="column" gap="18px">
    <vi-alert closable>主要提示</vi-alert>
    <vi-alert type="success" closable>成功提示</vi-alert>
    <vi-alert type="info" closable>信息提示</vi-alert>
    <vi-alert type="warning" closable>警告提示</vi-alert>
    <vi-alert type="danger" closable>危险提示</vi-alert>
  </vi-flex>
</div>

```vue
<template>
  <vi-flex direction="column" gap="18px">
    <vi-alert closable>主要提示</vi-alert>
    <vi-alert type="success" closable>成功提示</vi-alert>
    <vi-alert type="info" closable>信息提示</vi-alert>
    <vi-alert type="warning" closable>警告提示</vi-alert>
    <vi-alert type="danger" closable>危险提示</vi-alert>
  </vi-flex>
</template>
```

## 携带图标

使用 `pre-icon` 属性，设置默认前置图标。

<div class="examples">
  <vi-flex direction="column" gap="18px">
    <vi-alert closable pre-icon>主要提示</vi-alert>
    <vi-alert type="success" closable pre-icon>成功提示</vi-alert>
    <vi-alert type="info" closable pre-icon>信息提示</vi-alert>
    <vi-alert type="warning" closable pre-icon>警告提示</vi-alert>
    <vi-alert type="danger" closable pre-icon>危险提示</vi-alert>
  </vi-flex>
</div>

```vue
<template>
  <vi-flex direction="column" gap="18px">
    <vi-alert closable pre-icon>主要提示</vi-alert>
    <vi-alert type="success" closable pre-icon>成功提示</vi-alert>
    <vi-alert type="info" closable pre-icon>信息提示</vi-alert>
    <vi-alert type="warning" closable pre-icon>警告提示</vi-alert>
    <vi-alert type="danger" closable pre-icon>危险提示</vi-alert>
  </vi-flex>
</template>
```

## 深色模式

使用 `dark` 属性，设置为深色默认。

<div class="examples">
  <vi-flex direction="column" gap="18px">
    <vi-alert closable pre-icon dark>主要提示</vi-alert>
    <vi-alert type="success" closable pre-icon dark>成功提示</vi-alert>
    <vi-alert type="info" closable pre-icon dark>信息提示</vi-alert>
    <vi-alert type="warning" closable pre-icon dark>警告提示</vi-alert>
    <vi-alert type="danger" closable pre-icon dark>危险提示</vi-alert>
  </vi-flex>
</div>

```vue
<template>
  <vi-flex direction="column" gap="18px">
    <vi-alert closable pre-icon dark>主要提示</vi-alert>
    <vi-alert type="success" closable pre-icon dark>成功提示</vi-alert>
    <vi-alert type="info" closable pre-icon dark>信息提示</vi-alert>
    <vi-alert type="warning" closable pre-icon dark>警告提示</vi-alert>
    <vi-alert type="danger" closable pre-icon dark>危险提示</vi-alert>
  </vi-flex>
</template>
```

## 设置居中

将 `center` 属性值为 `'text'`，为文本居中。设置为 `'all'`，为全部居中。

<div class="examples">
  <vi-flex direction="column" gap="18px">
    <vi-alert closable pre-icon center="text">文字居中</vi-alert>
    <vi-alert type="success" closable pre-icon center="text">文字居中</vi-alert>
    <vi-alert type="info" closable pre-icon center="all">全部居中</vi-alert>
    <vi-alert type="warning" closable pre-icon center="all">全部居中</vi-alert>
    <vi-alert type="danger" closable pre-icon center="all">全部居中</vi-alert>
  </vi-flex>
</div>

```vue
<template>
  <vi-flex direction="column" gap="18px">
    <vi-alert closable pre-icon center="text">文字居中</vi-alert>
    <vi-alert type="success" closable pre-icon center="text">文字居中</vi-alert>
    <vi-alert type="info" closable pre-icon center="all">全部居中</vi-alert>
    <vi-alert type="warning" closable pre-icon center="all">全部居中</vi-alert>
    <vi-alert type="danger" closable pre-icon center="all">全部居中</vi-alert>
  </vi-flex>
</template>
```

## 自定义图标

将 `pre-icon` 的值设置为 Violet 提供的 Icon 的名字即可。仅支持 Violet 提供的 Icon。

<div class="examples">
  <vi-flex direction="column" gap="18px">
    <vi-alert closable pre-icon="HomeFill">primary 图标</vi-alert>
    <vi-alert type="success" closable pre-icon="Check">success 图标</vi-alert>
    <vi-alert type="info" closable pre-icon="TagFill">info 图标</vi-alert>
    <vi-alert type="warning" closable pre-icon="ScienceFill">warning 图标</vi-alert>
    <vi-alert type="danger" closable pre-icon="HeartBrokenFill">danger 图标</vi-alert>
  </vi-flex>
</div>

```vue
<template>
  <vi-flex direction="column" gap="18px">
    <vi-alert closable pre-icon="HomeFill">primary 图标</vi-alert>
    <vi-alert type="success" closable pre-icon="Check">success 图标</vi-alert>
    <vi-alert type="info" closable pre-icon="TagFill">info 图标</vi-alert>
    <vi-alert type="warning" closable pre-icon="ScienceFill">warning 图标</vi-alert>
    <vi-alert type="danger" closable pre-icon="HeartBrokenFill">danger 图标</vi-alert>
  </vi-flex>
</template>
```

## 自定义关闭

将 `close` 插槽，您可以将关闭图标设置为任何内容。

::: tip

对了，Alert 在关闭时会先触发一个 `close` 事件，你可以在此做一些事。

:::

<div class="examples">
  <vi-flex direction="column" gap="18px">
    <vi-alert closable pre-icon>
      文字关闭
      <template #close>Got It!</template>
    </vi-alert>
    <vi-alert type="success" closable pre-icon>
      其他图标关闭
      <template #close> <vi-icon name="VisibilityOff" /> </template>
    </vi-alert>
    <vi-alert type="danger" closable pre-icon @close="close">触发 close 事件</vi-alert>
  </vi-flex>
</div>

```vue
<template>
  <vi-flex direction="column" gap="18px">
    <vi-alert closable pre-icon>
      文字关闭
      <template #close>Got It!</template>
    </vi-alert>
    <vi-alert type="success" closable pre-icon>
      其他图标关闭
      <template #close> <vi-icon name="VisibilityOff" /> </template>
    </vi-alert>
    <vi-alert type="danger" closable pre-icon @close="close">触发 close 事件</vi-alert>
  </vi-flex>
</template>
```

## 携带标题

使用 `title` 属性，设置标题。它同样可以携带图标。

::: tip

如果您的 Alert 仅包含文本，可以使用简化的自闭合形式，因为 Violet 提供了 `content` 属性让您放置文本内容。

:::

<div class="examples">
  <vi-flex direction="column" gap="18px">
    <vi-alert closable title="这是标题"> 这是内容 </vi-alert>
    <vi-alert type="success" closable pre-icon title="携带图标"> 图标会被放大 </vi-alert>
    <vi-alert type="info" closable pre-icon title="仅包含标题" />
    <vi-alert type="warning" closable pre-icon title="自闭合" content="使用 content 定义内容" />
  </vi-flex>
</div>

```vue
<template>
  <vi-flex direction="column" gap="18px">
    <vi-alert closable title="这是标题"> 这是内容 </vi-alert>
    <vi-alert type="success" closable pre-icon title="携带图标"> 图标会被放大 </vi-alert>
    <vi-alert type="info" closable pre-icon title="仅包含标题" />
    <vi-alert type="warning" closable pre-icon title="自闭合" content="使用 content 定义内容" />
  </vi-flex>
</template>
```

## APIs

### 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| type | `Alert` 类型 | `'primary'` / `'success'` / `'info'` / `'warning'` / `'danger'` | `'primary'` |
| dark | 是否为深色模式 | `boolean` | `false` |
| closable | 是否可关闭 | `boolean` | `fasle` |
| pre-icon | 是否需要前置图标 | `boolean` | `false` |
| center | 居中模式 | `'none'` / `'text'` / `'all'` | `'none'` |
| title | 标题 | `string` | —— |
| content | 内容 | `string` | —— |

### 事件

| 事件名 | 事件触发时机 | 事件参数 |
| :---: | :---: | :---: |
| close | 点击关闭时关闭前 | `(e: MouseEvent) => void` |

### 插槽

| 插槽名 | 插槽说明 |
| :---: | :---: |
| close | 关闭区域内容 |
