
# Button 按钮

基础按钮组件，改善您的按钮。

## 基础用法

<div>
  <vi-button> 主要按钮 </vi-button>
  <!-- <vi-icon name="loading" /> -->
  <!-- <vi-button type="success"> 成功按钮 </vi-button>
  <vi-button type="warning"> 警告按钮 </vi-button>
  <vi-button type="danger"> 危险按钮 </vi-button> -->
</div>
<!-- 
<div>
  <vi-button type="primary" round> 主要按钮 </vi-button>
  <vi-button type="success" round> 成功按钮 </vi-button>
  <vi-button type="warning" round> 警告按钮 </vi-button>
  <vi-button type="danger" round> 危险按钮 </vi-button>
</div>

<div>
  <vi-button type="primary" circle> 主 </vi-button>
  <vi-button type="success" circle> 成 </vi-button>
  <vi-button type="warning" circle> 警 </vi-button>
  <vi-button type="danger" circle> 危 </vi-button>
</div> -->

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
    <vi-button type="primary" circle> 主 </vi-button>
    <vi-button type="success" circle> 成 </vi-button>
    <vi-button type="warning" circle> 警 </vi-button>
    <vi-button type="danger" circle> 危 </vi-button>
  </div>
</template>
```

## 加载状态

使用 `loading` 属性， 使按钮处于加载状态。

<!-- <vi-button type="primary" :loading="true"> 主要按钮 </vi-button>
<vi-button type="success" :loading="true"> 成功按钮 </vi-button>
<vi-button type="warning" :loading="true"> 警告按钮 </vi-button>
<vi-button type="danger" :loading="true"> 危险按钮 </vi-button> -->

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

<!-- <vi-button type="primary" disabled> 主要按钮 </vi-button>
<vi-button type="success" disabled> 成功按钮 </vi-button>
<vi-button type="warning" disabled> 警告按钮 </vi-button>
<vi-button type="danger" disabled> 危险按钮 </vi-button> -->

```vue
<template>
  <vi-button type="primary" disabled> 主要按钮 </vi-button>
  <vi-button type="success" disabled> 成功按钮 </vi-button>
  <vi-button type="warning" disabled> 警告按钮 </vi-button>
  <vi-button type="danger" disabled> 危险按钮 </vi-button>
</template>
```

## 文字类型

<!-- <vi-button type="primary" text> 主要按钮 </vi-button>
<vi-button type="success" text> 成功按钮 </vi-button>
<vi-button type="warning" text> 警告按钮 </vi-button>
<vi-button type="danger" text> 危险按钮 </vi-button> -->

```vue
<template>
  <vi-button type="primary" text> 主要按钮 </vi-button>
  <vi-button type="success" text> 成功按钮 </vi-button>
  <vi-button type="warning" text> 警告按钮 </vi-button>
  <vi-button type="danger" text> 危险按钮 </vi-button>
</template>
```

## 自定义背景颜色

使用 `text` 属性来定义文本类型按钮。

::: tip
按钮的 `active`、`hover` 状态我们将会为您自动计算。对于特别鲜艳的颜色，如果计算不准确，您可以手动修改。
:::

<!-- <vi-button type="primary" text> 自定义背景颜色 </vi-button>
<vi-button type="success" text> 与文字按钮一起使用 </vi-button>
<vi-button type="warning"> 自定义背景颜色 </vi-button>
<vi-button type="danger"> 不与文字按钮一起使用 </vi-button> -->

```vue
<template>
  <vi-button type="primary" text> 自定义背景颜色 </vi-button>
  <vi-button type="success" text> 与文字按钮一起使用 </vi-button>
  <vi-button type="warning"> 自定义背景颜色 </vi-button>
  <vi-button type="danger"> 不与文字按钮一起使用 </vi-button>
</template>
```







## APIs

以下是 `button` 组件的 `api`

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| type | 定义按钮类型 | string | primary |
| text | 是否为文字按钮 | boolean | false |
| round | 是否为圆角按钮 | boolean | fasle |
| circle | 是否为圆形按钮 | boolean | false |
| disabled | 是否为禁用状态 | boolean | false |
| loading | 是否为加载状态 | boolean | false |
| bgColor | 定义按钮背景颜色 | string | —— |
| color | 定义按钮文字颜色 | string | —— |