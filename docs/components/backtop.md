# Backtop

快速返回顶部。

## 基础用法

通过 `show-height` 属性，控制显示高度。当滚动条滚动到此值时，则显示。

<div class="examples">
  <span>请下滑查看效果（右下角第一个）</span>
  <vi-backtop :show-height="50" :right="280" :bottom="100" />
</div>

```vue
<template>
  <span>请下滑查看效果（右下角第一个）</span>
  <vi-backtop :show-height="50" :right="280" :bottom="100" />
</template>
```

## 圆形形式

通过 `round` 属性，控制是否为圆形。

<div class="examples">
  <span>请下滑查看效果（右下角第二个）</span>
  <vi-backtop :show-height="50" :right="220" :bottom="100" round />
</div>

```vue
<template>
  <span>请下滑查看效果（右下角第二个）</span>
  <vi-backtop :show-height="50" :right="220" :bottom="100" round />
</template>
```

## 自定义内容

将自定义内容直接放入标签体内即可。

<div class="examples">
  <span>请下滑查看效果（右下角第三个）</span>
  <vi-backtop 
    class="vi-backtop-demo-custome" 
    :show-height="50" 
    :right="160" 
    :bottom="100">
    TOP
  </vi-backtop>
</div>

<style lang="scss">
.vi-backtop-demo-custome {
  padding: 10px;
  font-weight: bolder;
  color: var(--vi-color-primary);
  &:hover { color: var(--vi-color-white); }
}
</style>

```vue
<template>
  <span>请下滑查看效果（右下角第三个）</span>
  <vi-backtop 
    class="vi-backtop-demo-custome" 
    :show-height="50" 
    :right="160" 
    :bottom="100">
    TOP
  </vi-backtop>
</template>

<style lang="scss">
  .vi-backtop-demo-custome {
    padding: 10px;
    font-weight: bolder;
    color: var(--vi-color-primary);
    &:hover { color: var(--vi-color-white); }
  }
</style>
```

## APIs

### 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| show-height | 显示高度(滚动到达此高度则显示) | `number` | `500` |
| hide-width | 隐藏宽度(小于等于此宽度则彻底隐藏) | `number` | `-Infinity` |
| right | `backtop` 离右侧距离 | `number` | `50` |
| bottom | `backtop` 离底部距离 | `number` | `50` |
| z-index | 同原生 CSS `z-index` | `number` | `99` |
| round | 是否为圆角 | `boolean` | `fasle` |
