# Button 按钮

基础按钮组件，改善您的按钮。

## 基础用法

<div class="examples">
  <div style="display: flex; gap: 10px;">
    <vi-button> 主要按钮 </vi-button>
    <vi-button type="success"> 成功按钮 </vi-button>
    <vi-button type="warning"> 警告按钮 </vi-button>
    <vi-button type="danger"> 危险按钮 </vi-button>
  </div>

  <div style="display: flex; gap: 10px; margin: 10px 0;">
    <vi-button type="primary" round> 主要按钮 </vi-button>
    <vi-button type="success" round> 成功按钮 </vi-button>
    <vi-button type="warning" round> 警告按钮 </vi-button>
    <vi-button type="danger" round> 危险按钮 </vi-button>
  </div>

  <div style="display: flex; gap: 10px;">
    <vi-button type="primary" circle> <vi-icon name="home" /> </vi-button>
    <vi-button type="success" circle> <vi-icon name="check" /> </vi-button>
    <vi-button type="warning" circle> <vi-icon name="warning" /> </vi-button>
    <vi-button type="danger" circle> <vi-icon name="delete" /> </vi-button>
  </div>
</div>

```vue
<template>
  <div>
    <vi-button> 主要按钮 </vi-button>
    <vi-button type="success"> 成功按钮 </vi-button>
    <vi-button type="warning"> 警告按钮 </vi-button>
    <vi-button type="danger"> 危险按钮 </vi-button>
  </div>

  <div>
    <vi-button type="primary" round> 主要按钮 </vi-button>
    <vi-button type="success" round> 成功按钮 </vi-button>
    <vi-button type="warning" round> 警告按钮 </vi-button>
    <vi-button type="danger" round> 危险按钮 </vi-button>
  </div>

  <div>
    <vi-button type="primary" circle> <vi-icon name="home" /> </vi-button>
    <vi-button type="success" circle> <vi-icon name="check" /> </vi-button>
    <vi-button type="warning" circle> <vi-icon name="warning" /> </vi-button>
    <vi-button type="danger" circle> <vi-icon name="delete" /> </vi-button>
  </div>
</template>
```

## 加载状态

使用 `loading` 属性， 使按钮处于加载状态。

<div class="examples">
  <div style="display: flex; gap: 10px;">
    <vi-button type="primary" :loading="true"> 主要按钮 </vi-button>
    <vi-button type="success" :loading="true"> 成功按钮 </vi-button>
    <vi-button type="warning" :loading="true"> 警告按钮 </vi-button>
    <vi-button type="danger" :loading="true"> 危险按钮 </vi-button>
  </div>
</div>

```vue
<template>
  <vi-button type="primary" :loading="true"> 主要按钮 </vi-button>
  <vi-button type="success" :loading="true"> 成功按钮 </vi-button>
  <vi-button type="warning" :loading="true"> 警告按钮 </vi-button>
  <vi-button type="danger" :loading="true"> 危险按钮 </vi-button>
</template>
```

## 禁用状态

使用 `disabled` 属性， 使按钮处于禁用状态。

<div class="examples">
  <div style="display: flex; gap: 10px;">
    <vi-button type="primary" disabled> 主要按钮 </vi-button>
    <vi-button type="success" disabled> 成功按钮 </vi-button>
    <vi-button type="warning" disabled> 警告按钮 </vi-button>
    <vi-button type="danger" disabled> 危险按钮 </vi-button>
  </div>
</div>

```vue
<template>
  <vi-button type="primary" disabled> 主要按钮 </vi-button>
  <vi-button type="success" disabled> 成功按钮 </vi-button>
  <vi-button type="warning" disabled> 警告按钮 </vi-button>
  <vi-button type="danger" disabled> 危险按钮 </vi-button>
</template>
```

## 文字类型

使用 `text` 属性，来定义文本类型按钮。

<div class="examples">
  <div style="display: flex; gap: 10px;">
    <vi-button type="primary" text> 主要按钮 </vi-button>
    <vi-button type="success" text> 成功按钮 </vi-button>
    <vi-button type="warning" text> 警告按钮 </vi-button>
    <vi-button type="danger" text> 危险按钮 </vi-button>
  </div>
</div>

```vue
<template>
  <vi-button type="primary" text> 主要按钮 </vi-button>
  <vi-button type="success" text> 成功按钮 </vi-button>
  <vi-button type="warning" text> 警告按钮 </vi-button>
  <vi-button type="danger" text> 危险按钮 </vi-button>
</template>
```

## 自定义背景颜色

使用 `bg-color` 属性，来自定义按钮的背景颜色。

::: tip
按钮的 `active` 和 `hover` 状态我们将会为您自动计算。
:::

<div class="examples">
  <div style="display: flex; gap: 10px;">
    <vi-button type="primary" bg-color="orange"> 自定义1 </vi-button>
    <vi-button type="success" bg-color="skyblue"> 自定义2 </vi-button>
    <vi-button type="warning" bg-color="violet"> 自定义3 </vi-button>
    <vi-button type="danger" bg-color="blueviolet"> 自定义4 </vi-button>
  </div>
</div>

```vue
<template>
  <vi-button type="primary" bg-color="orange"> 自定义1 </vi-button>
  <vi-button type="success" bg-color="skyblue"> 自定义2 </vi-button>
  <vi-button type="warning" bg-color="violet"> 自定义3 </vi-button>
  <vi-button type="danger" bg-color="blueviolet"> 自定义4 </vi-button>
</template>
```

## 自定义文字颜色

使用 `color` 属性，来自定义按钮的文字颜色。

<div class="examples">
  <div style="display: flex; gap: 10px;">
    <vi-button type="primary" text color="orange"> 自定义1 </vi-button>
    <vi-button type="success" text color="skyblue"> 自定义2 </vi-button>
    <vi-button type="warning" color="green"> 自定义3 </vi-button>
    <vi-button type="danger" color="blue"> 自定义4 </vi-button>
  </div>
</div>

```vue
<template>
  <vi-button type="primary" text color="orange"> 自定义1 </vi-button>
  <vi-button type="success" text color="skyblue"> 自定义2 </vi-button>
  <vi-button type="warning" color="green"> 自定义3 </vi-button>
  <vi-button type="danger" color="blue"> 自定义4 </vi-button>
</template>
```

## APIs

### 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| type | 定义按钮类型 | string | primary |
| text | 是否为文字按钮 | boolean | false |
| round | 是否为圆角按钮 | boolean | fasle |
| circle | 是否为圆形按钮 | boolean | false |
| disabled | 是否为禁用状态 | boolean | false |
| loading | 是否为加载状态 | boolean | false |
| bg-color | 定义按钮背景颜色 | string | —— |
| color | 定义按钮文字颜色 | string | —— |

### 事件


### 方法