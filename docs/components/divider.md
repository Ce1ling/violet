# Divider 分割线

以最简单的方式，分割不同区域内容。

## 基础用法

用以分割区域。

<div class="examples">
  大风歌
  <vi-divider /> 
  大风起兮云飞扬， 威加海内兮归故乡， 安得猛士兮守四方！ 
  <vi-divider />
</div>

```vue
<template>
  大风歌
  <vi-divider /> 
  大风起兮云飞扬， 威加海内兮归故乡， 安得猛士兮守四方！ 
  <vi-divider />
</template>
```

## 添加标注

`vi-divider` 的标签体内容被认为是标注内容。使用 `position` 属性，定义标注位置，默认为 `start`。

<div class="examples">
  大风起兮云飞扬，
  <vi-divider position="start">刘邦</vi-divider>
  威加海内兮归故乡，
  <vi-divider position="center"> <vi-icon name="Star" /> </vi-divider>
  安得猛士兮守四方！
  <vi-divider position="end">大风歌</vi-divider>
</div>

```vue
<template>
  大风起兮云飞扬，
  <vi-divider position="start">大风歌</vi-divider>
  威加海内兮归故乡，
  <vi-divider position="center"> <vi-icon name="Star" /> </vi-divider>
  安得猛士兮守四方！
  <vi-divider position="end">刘邦</vi-divider>
</template>
```

## 设置方向

使用 `direction` 属性，设置分割线方向，它仅支持 `vertical` 与 `horizontal`。默认为 `horizontal`。

<div class="examples">
  大风起兮云飞扬
  <vi-divider direction="vertical" />
  威加海内兮归故乡
  <vi-divider direction="vertical" />
  安得猛士兮守四方！
</div>

```vue
<template>
  大风起兮云飞扬
  <vi-divider direction="vertical" />
  威加海内兮归故乡
  <vi-divider direction="vertical" />
  安得猛士兮守四方！
</template>
```

## 定义边距

使用 `margin` 属性，自定义外边距。

<div class="examples">
  大风歌
  <vi-divider position="center" margin="8px">窄边距</vi-divider>
  大风起兮云飞扬，
  <vi-divider position="center" margin="58px">宽边距</vi-divider>
  威加海内兮归故乡，
  <vi-divider position="center" margin="18px">正常边距</vi-divider>
  安得猛士兮守四方！
</div>

```vue
<template>
  大风歌
  <vi-divider position="center" margin="8px">窄</vi-divider>
  大风起兮云飞扬，
  <vi-divider position="center" margin="58px">宽</vi-divider>
  威加海内兮归故乡，
  <vi-divider position="center" margin="18px">正常</vi-divider>
  安得猛士兮守四方！
</template>
```

## 定义厚度

使用 `thick` 属性，定义线条厚度，不过 Violet 不建议您设置的非常大(因为这可能导致一些 UI `bug`)。

<div class="examples">
  大风歌
  <vi-divider thick="1px" />
  大风起兮云飞扬，
  <vi-divider thick="5px" />
  威加海内兮归故乡，
  <vi-divider thick="10px" />
  安得猛士兮守四方！
</div>

```vue
<template>
  大风歌
  <vi-divider thick="1px" />
  大风起兮云飞扬，
  <vi-divider thick="5px" />
  威加海内兮归故乡，
  <vi-divider thick="10px" />
  安得猛士兮守四方！
</template>
```

## 定义颜色

使用 `color` 属性，定义线条颜色。

<div class="examples">
  大风歌
  <vi-divider color="blue" />
  大风起兮云飞扬， 威加海内兮归故乡， 安得猛士兮守四方！
  <vi-divider color="violet" />
</div>

```vue
<template>
  大风歌
  <vi-divider color="blue" />
  大风起兮云飞扬， 威加海内兮归故乡， 安得猛士兮守四方！
  <vi-divider color="violet" />
</template>
```

## 定义线条样式

使用 `border-style` 属性，定义线条样式。它的值与 CSS `border-style` 接受的值完全相同！

::: tip

因为它完全等于 CSS `border-style`，所以，完整取值请参见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style)。

:::

<div class="examples">
  大风歌
  <vi-divider position="end" border-style="dotted" thick="4px">圆点虚线</vi-divider>
  大风起兮云飞扬， 威加海内兮归故乡， 安得猛士兮守四方！
  <vi-divider position="end" border-style="dashed" thick="4px">方形虚线</vi-divider>
</div>

```vue
<template>
  大风歌
  <vi-divider position="end" border-style="dotted" thick="4px">圆点虚线</vi-divider>
  大风起兮云飞扬， 威加海内兮归故乡， 安得猛士兮守四方！
  <vi-divider position="end" border-style="dashed" thick="4px">方形虚线</vi-divider>
</template>
```

## APIs

### 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| margin | 边距 | `string` | `'18px'` |
| thick | 厚度 | `string` | `'1px'` |
| color | 颜色 | `string` | —— |
| border-style | 样式 | `string` | `'solid'` |
| position | 标注内容的位置 | `'start' \| 'center' \| 'end'` | `'start'` |
| direction | 方向 | `'horizontal' \| 'vertival'` | `'horizontal'` |