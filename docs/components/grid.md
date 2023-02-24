<style lang="scss">
.vi-row-demo {
  padding: 8px;
  background-color: var(--shadow-color);
  border-radius: var(--border-radius);
  &:not(:last-child) { margin-bottom: 18px; }
  .vi-col {
    height: 28px;
    border-radius: var(--border-radius);
    background-color: var(--primary-color);
    &:nth-child(even) { background-color: violet; }
    &.justify { flex: 0 0 100px; }
  }
}
</style>

# Grid

栅格布局组件，快速布局。

## 基础使用

使用 `vi-row` 来定义行，`vi-col` 来定义列。多列时，默认有 `10px` 的间距。

<div class="examples">
  <vi-row class="vi-row-demo">
    <vi-col></vi-col>
  </vi-row>

  <vi-row class="vi-row-demo">
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>

  <vi-row class="vi-row-demo">
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>

  <vi-row class="vi-row-demo">
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>

  <vi-row class="vi-row-demo">
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>
</div>

```vue
<template>
  <vi-row class="vi-row-demo">
    <vi-col></vi-col>
  </vi-row>

  <vi-row class="vi-row-demo">
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>

  <vi-row class="vi-row-demo">
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>

  <vi-row class="vi-row-demo">
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>

  <vi-row class="vi-row-demo">
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>
</template>
```

## 设置间距

通过 `gap` 属性，设置列之间的间距。它默认是 `10px`，你可以设置更大、更小或是清除。

<div class="examples">
  更大的 gap
  <vi-row class="vi-row-demo" gap='28px'>
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>
  更小的 gap
  <vi-row class="vi-row-demo" gap='4px'>
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>
  清除 gap
  <vi-row class="vi-row-demo" gap='0'>
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>
</div>

```vue
<template>
  更大的 gap
  <vi-row class="vi-row-demo" gap='18px'>
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>
  更小的 gap
  <vi-row class="vi-row-demo" gap='4px'>
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>
  清除 gap
  <vi-row class="vi-row-demo" gap='0'>
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>
</template>
```

## 自由布局

在 `vi-col` 上设置 `span` 属性，来设置它所占的宽度。你可以根据 `vi-col` 的数量来计算设置 `span`，它的默认值是 `1`。

<div class="examples">
  <vi-row class="vi-row-demo">
    <vi-col span="2"></vi-col>
    <vi-col></vi-col>
  </vi-row>

  <vi-row class="vi-row-demo">
    <vi-col span="2"></vi-col>
    <vi-col span="2"></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>

  <vi-row class="vi-row-demo">
    <vi-col></vi-col>
    <vi-col span="4"></vi-col>
    <vi-col></vi-col>
  </vi-row>
</div>

```vue
<template>
  <vi-row class="vi-row-demo">
    <vi-col span="2"></vi-col>
    <vi-col></vi-col>
  </vi-row>

  <vi-row class="vi-row-demo">
    <vi-col span="2"></vi-col>
    <vi-col span="2"></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>

  <vi-row class="vi-row-demo">
    <vi-col></vi-col>
    <vi-col span="4"></vi-col>
    <vi-col></vi-col>
  </vi-row>
</template>
```

## 对齐方式

在 `vi-row` 上设置 `justify` 属性，来设置对齐方式。我们采用了 `flex` 布局，所以你可以设置 `flex` 布局的所有对齐属性。

<div class="examples">
  默认对齐（flex-start）
  <vi-row class="vi-row-demo">
    <vi-col class="justify"></vi-col>
    <vi-col class="justify"></vi-col>
    <vi-col class="justify"></vi-col>
  </vi-row>
  居中对齐（center）
  <vi-row class="vi-row-demo" justify="center">
    <vi-col class="justify"></vi-col>
    <vi-col class="justify"></vi-col>
    <vi-col class="justify"></vi-col>
  </vi-row>
  左右贴合（space-between）
  <vi-row class="vi-row-demo" justify="space-between">
    <vi-col class="justify"></vi-col>
    <vi-col class="justify"></vi-col>
    <vi-col class="justify"></vi-col>
  </vi-row>
  左右间距（space-around）
  <vi-row class="vi-row-demo" justify="space-around">
    <vi-col class="justify"></vi-col>
    <vi-col class="justify"></vi-col>
    <vi-col class="justify"></vi-col>
  </vi-row>
  相同间距（space-evenly）
  <vi-row class="vi-row-demo" justify="space-evenly">
    <vi-col class="justify"></vi-col>
    <vi-col class="justify"></vi-col>
    <vi-col class="justify"></vi-col>
  </vi-row>
</div>

## APIs

### Row 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| gap | 列间距 | string | '10px' |
| justify | 垂直对齐方式 | 'start' / 'center' / 'end' / 'space-between' / 'space-around' / 'space-evenly' | 'start' |
| align | 水平对齐方式 | 'start' / 'center' / 'end' | 'start' |

### Col 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| span | 宽度占比 | string / number | 1 |
