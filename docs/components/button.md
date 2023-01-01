# Button 按钮

基础按钮组件，改善您的按钮。

## 基础用法

您可以使用 `type` 属性来定义按钮类型、`round` 属性来定义圆角按钮、`circle` 属性来定义圆形按钮。

::: tip
如果您的按钮 `type` 类型是 `primary`，则您可以省略 `type` 属性，因为它是默认值。
:::

<div class="examples">
  <vi-row>
    <vi-button> 主要按钮 </vi-button>
    <vi-button type="success"> 成功按钮 </vi-button>
    <vi-button type="warning"> 警告按钮 </vi-button>
    <vi-button type="danger"> 危险按钮 </vi-button>
  </vi-row>

  <vi-row>
    <vi-button round> 主要按钮 </vi-button>
    <vi-button type="success" round> 成功按钮 </vi-button>
    <vi-button type="warning" round> 警告按钮 </vi-button>
    <vi-button type="danger" round> 危险按钮 </vi-button>
  </vi-row>

  <vi-row>
    <vi-button circle> <vi-icon name="Home" /> </vi-button>
    <vi-button type="success" circle> <vi-icon name="Check" /> </vi-button>
    <vi-button type="warning" circle> <vi-icon name="Warning" /> </vi-button>
    <vi-button type="danger" circle> <vi-icon name="Delete" /> </vi-button>
  </vi-row>
</div>

```vue
<template>
  <vi-row>
    <vi-button> 主要按钮 </vi-button>
    <vi-button type="success"> 成功按钮 </vi-button>
    <vi-button type="warning"> 警告按钮 </vi-button>
    <vi-button type="danger"> 危险按钮 </vi-button>
  </vi-row>

  <vi-row>
    <vi-button round> 主要按钮 </vi-button>
    <vi-button type="success" round> 成功按钮 </vi-button>
    <vi-button type="warning" round> 警告按钮 </vi-button>
    <vi-button type="danger" round> 危险按钮 </vi-button>
  </vi-row>

  <vi-row>
    <vi-button circle> <vi-icon name="Home" /> </vi-button>
    <vi-button type="success" circle> <vi-icon name="Check" /> </vi-button>
    <vi-button type="warning" circle> <vi-icon name="Warning" /> </vi-button>
    <vi-button type="danger" circle> <vi-icon name="Delete" /> </vi-button>
  </vi-row>
</template>
```

## 加载状态

使用 `loading` 属性， 使按钮处于加载状态。您可以使用 `prefix` 属性来控制“加载图标”在左边还是右边。同时，您也可以自定义“加载图标”，分别使用 `prefix` 与 `suffix` 具名插槽。

::: warning
注意：
  1. 如果您使用了“自定义图标”，那么 Violet 将认为您需要自定义加载时图标动画，若您不需要自定义，您可以在“自定义图标”上加上 `loading` 属性。
  2. 如果您使用了 `suffix` 插槽，请将 `vi-button` 的 `prefix` 属性设置为 `false` (如 加载状态4 所示)，否则您将得到左右两个图标。
:::

<div class="examples">
  <vi-row>
    <vi-button type="primary" loading> 加载状态1 </vi-button>
    <vi-button type="success" loading :prefix="false"> 加载状态2 </vi-button>
    <vi-button type="warning" loading> 
      加载状态3 
      <template #prefix>
        <vi-icon name="Close" size="16px" cursor="wait" loading />
      </template>
    </vi-button>
    <vi-button type="danger" loading :prefix="false">
      加载状态4 
      <template #suffix>
        <vi-icon name="Close" size="16px" cursor="wait" loading />
      </template>
    </vi-button>
  </vi-row>
</div>

```vue
<template>
  <vi-row>
    <vi-button type="primary" loading> 加载状态1 </vi-button>
    <vi-button type="success" loading :prefix="false"> 加载状态2 </vi-button>
    <vi-button type="warning" loading> 
      加载状态3 
      <template #prefix>
        <vi-icon name="Close" size="16px" cursor="wait" loading />
      </template>
    </vi-button>
    <vi-button type="danger" loading :prefix="false">
      加载状态4 
      <template #suffix>
        <vi-icon name="Close" size="16px" cursor="wait" loading />
      </template>
    </vi-button>
  </vi-row>
</template>
```

## 禁用状态

使用 `disabled` 属性， 使按钮处于禁用状态。

<div class="examples">
  <vi-row>
    <vi-button type="primary" disabled> 主要按钮 </vi-button>
    <vi-button type="success" disabled> 成功按钮 </vi-button>
    <vi-button type="warning" disabled> 警告按钮 </vi-button>
    <vi-button type="danger" disabled> 危险按钮 </vi-button>
  </vi-row>
</div>

```vue
<template>
  <vi-row>
    <vi-button type="primary" disabled> 主要按钮 </vi-button>
    <vi-button type="success" disabled> 成功按钮 </vi-button>
    <vi-button type="warning" disabled> 警告按钮 </vi-button>
    <vi-button type="danger" disabled> 危险按钮 </vi-button>
  </vi-row>
</template>
```

## 文字类型

使用 `text` 属性，来定义文本类型按钮。

<div class="examples">
  <vi-row>
    <vi-button type="primary" text> 主要按钮 </vi-button>
    <vi-button type="success" text> 成功按钮 </vi-button>
    <vi-button type="warning" text> 警告按钮 </vi-button>
    <vi-button type="danger" text> 危险按钮 </vi-button>
  </vi-row>
</div>

```vue
<template>
  <vi-row>
    <vi-button type="primary" text> 主要按钮 </vi-button>
    <vi-button type="success" text> 成功按钮 </vi-button>
    <vi-button type="warning" text> 警告按钮 </vi-button>
    <vi-button type="danger" text> 危险按钮 </vi-button>
  </vi-row>
</template>
```

## 自定义背景颜色

使用 `bg-color` 属性，来自定义按钮的背景颜色。

::: tip
按钮的 `active` 和 `hover` 状态 Violet 将会为您自动计算。
:::

<div class="examples">
  <vi-row>
    <vi-button type="primary" bg-color="orange"> 自定义1 </vi-button>
    <vi-button type="success" bg-color="skyblue"> 自定义2 </vi-button>
    <vi-button type="warning" bg-color="violet"> 自定义3 </vi-button>
    <vi-button type="danger" bg-color="blueviolet"> 自定义4 </vi-button>
  </vi-row>
</div>

```vue
<template>
  <vi-row>
    <vi-button type="primary" bg-color="orange"> 自定义1 </vi-button>
    <vi-button type="success" bg-color="skyblue"> 自定义2 </vi-button>
    <vi-button type="warning" bg-color="violet"> 自定义3 </vi-button>
    <vi-button type="danger" bg-color="blueviolet"> 自定义4 </vi-button>
  </vi-row>
</template>
```

## 自定义文字颜色

使用 `color` 属性，来自定义按钮的文字颜色。

<div class="examples">
  <vi-row>
    <vi-button type="primary" text color="orange"> 自定义1 </vi-button>
    <vi-button type="success" text color="skyblue"> 自定义2 </vi-button>
    <vi-button type="warning" color="green"> 自定义3 </vi-button>
    <vi-button type="danger" color="blue"> 自定义4 </vi-button>
  </vi-row>
</div>

```vue
<template>
  <vi-row>
    <vi-button type="primary" text color="orange"> 自定义1 </vi-button>
    <vi-button type="success" text color="skyblue"> 自定义2 </vi-button>
    <vi-button type="warning" color="green"> 自定义3 </vi-button>
    <vi-button type="danger" color="blue"> 自定义4 </vi-button>
  </vi-row>
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
| prefix | 加载时的图标是否在前面(左边) | boolean | true |
