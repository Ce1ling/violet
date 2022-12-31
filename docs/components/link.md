# Link 链接

基础超链接组件，美化超链接。

## 基础用法

使用 `type` 属性可以定义一些基础类型。

<div class="examples">
  <vi-row gap="28px">
    <vi-link href="https://github.com/Ce1ling/violet" target="_blank">violet</vi-link>
    <vi-link type="success" href="#">violet</vi-link>
    <vi-link type="warning" href="#">violet</vi-link>
    <vi-link type="danger" href="#">violet</vi-link>
  </vi-row>
</div>

```vue
<template>
  <vi-row gap="28px">
    <vi-link href="https://github.com/Ce1ling/violet" target="_blank">violet</vi-link>
    <vi-link type="success" href="#">violet</vi-link>
    <vi-link type="warning" href="#">violet</vi-link>
    <vi-link type="danger" href="#">violet</vi-link>
  </vi-row>
</template>
```

## 下划线

您可以将 `underline` 变为 `false`，来取消下划线，如 `type="success"`、`type="danger"` 所示。

<div class="examples">
  <vi-row gap="28px">
    <vi-link href="#">violet</vi-link>
    <vi-link type="success" href="#" :underline="false">violet</vi-link>
    <vi-link type="warning" href="#">violet</vi-link>
    <vi-link type="danger" href="#" :underline="false">violet</vi-link>
  </vi-row>
</div>

```vue
<template>
  <vi-row gap="28px">
    <vi-link href="#">violet</vi-link>
    <vi-link type="success" href="#" :underline="false">violet</vi-link>
    <vi-link type="warning" href="#">violet</vi-link>
    <vi-link type="danger" href="#" :underline="false">violet</vi-link>
  </vi-row>
</template>
```

## 禁用状态

使用 `disabled` 属性来禁用链接。

<div class="examples">
  <vi-row gap="28px">
    <vi-link href="https://github.com/Ce1ling/violet" disabled>violet</vi-link>
    <vi-link type="success" href="#" disabled>violet</vi-link>
    <vi-link type="warning" href="#" disabled>violet</vi-link>
    <vi-link type="danger" href="#" disabled>violet</vi-link>
  </vi-row>
</div>

```vue
<template>
  <vi-row gap="28px">
    <vi-link href="https://github.com/Ce1ling/violet" disabled>violet</vi-link>
    <vi-link type="success" href="#" disabled>violet</vi-link>
    <vi-link type="warning" href="#" disabled>violet</vi-link>
    <vi-link type="danger" href="#" disabled>violet</vi-link>
  </vi-row>
</template>
```

## 自定义图标

使用 `prefix` 与 `suffix` 插槽，来定义图标并定义位置。

<div class="examples">
  <vi-row gap="28px">
    <vi-link type="success" href="#" target="_blank"> 
      <template #prefix>
        <vi-icon name="plus" />
      </template>
      violet
    </vi-link>
    <vi-link type="danger" href="#" target="_blank"> 
      violet
      <template #suffix>
        <vi-icon name="minus" />
      </template>
    </vi-link>
    <vi-link type="success" href="#" target="_blank" disabled> 
      <template #prefix>
        <vi-icon name="plus" cursor="inherit" />
      </template>
      violet
    </vi-link>
    <vi-link type="danger" href="#" target="_blank" disabled> 
      violet
      <template #suffix>
        <vi-icon name="minus" cursor="inherit" />
      </template>
    </vi-link>
  </vi-row>
</div>

```vue
<template>
  <vi-row gap="28px">
    <vi-link type="success" href="#" target="_blank"> 
      <template #prefix>
        <vi-icon name="plus" />
      </template>
      violet
    </vi-link>
    <vi-link type="danger" href="#" target="_blank"> 
      violet
      <template #suffix>
        <vi-icon name="minus" />
      </template>
    </vi-link>
  </vi-row>
</template>
```

## APIs

### 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| type | 定义链接类型 | string | primary |
| href | 同 `a` 标签 `href` 属性 | string | —— |
| underline | 是否需要下划线 | boolean | true |
| disabled | 是否为禁用状态 | boolean | false |