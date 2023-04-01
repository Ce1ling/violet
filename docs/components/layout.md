<style lang="scss">
.vi-flex-demo {
  .vi-header,
  .vi-footer { 
    background-color: #e0cbf9;
  }
  .vi-main { 
    padding: 100px 0;
    background-color: #cba7f8; 
  }
  .vi-aside { 
    padding: 100px 18px;
    background-color: #d6c1ef;
  }
  .vi-header,
  .vi-main,
  .vi-aside,
  .vi-footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

# Layout 布局

布局组件，快速搭建页面主体结构。

## 基础说明

Violet 提供的布局组件包括：
1. `vi-flex`：快速创建 `flex` 布局组件，可自定义 `flex` 的一些属性。 
2. `vi-header`：顶部组件，一般用于页面最顶部。 
3. `vi-main`：主体组件，一般用于页面主要内容区。 
4. `vi-aside`： 侧边栏组件，一般用于需要侧边栏的页面。 
5. `vi-footer`：底部组件，一般用于页面最底部。

## 布局示例

1. 仅有 “顶部” 与 “主体” 的布局。

<div class="examples">
  <vi-flex class="vi-flex-demo" direction="column">
    <vi-header>header</vi-header>
    <vi-main>main</vi-main>
  </vi-flex>
</div>

2. 包含三大主要元素的布局。

<div class="examples">
  <vi-flex class="vi-flex-demo" direction="column">
    <vi-header>header</vi-header>
    <vi-main>main</vi-main>
    <vi-footer>footer</vi-footer>
  </vi-flex>
</div>

3. 包含 “侧边栏”，但没有 “底部” 的布局。

<div class="examples">
  <vi-flex class="vi-flex-demo" direction="column">
    <vi-header>header</vi-header>
    <vi-flex class="vi-flex-demo">
      <vi-aside>aside</vi-aside>
      <vi-main>main</vi-main>
    </vi-flex>
  </vi-flex>
</div>

4. 完整的页面布局。

<div class="examples">
  <vi-flex class="vi-flex-demo" direction="column">
    <vi-header>header</vi-header>
    <vi-flex class="vi-flex-demo">
      <vi-aside>aside</vi-aside>
      <vi-main>main</vi-main>
    </vi-flex>
    <vi-footer>footer</vi-footer>
  </vi-flex>
</div>

5. “侧边栏” 贯穿 “底部” 的布局。

<div class="examples">
  <vi-flex class="vi-flex-demo" direction="column">
    <vi-header>header</vi-header>
    <vi-flex class="vi-flex-demo">
      <vi-aside>aside</vi-aside>
      <vi-flex direction="column">
        <vi-main>main</vi-main>
        <vi-footer>footer</vi-footer>
      </vi-flex>
    </vi-flex>
  </vi-flex>
</div>

6. “侧边栏” 为通栏的布局。

<div class="examples">
  <vi-flex class="vi-flex-demo">
    <vi-aside>aside</vi-aside>
    <vi-flex class="vi-flex-demo" direction="column">
      <vi-header>header</vi-header>
      <vi-flex direction="column">
        <vi-main>main</vi-main>
        <vi-footer>footer</vi-footer>
      </vi-flex>
    </vi-flex>
  </vi-flex>
</div>

以上仅作示例，至于其他更多的布局方式，由您的需求而自由自定。

```vue
<template>
  1. 仅有 “顶部” 与 “主体” 的布局。
  <vi-flex class="vi-flex-demo" direction="column">
    <vi-header>header</vi-header>
    <vi-main>main</vi-main>
  </vi-flex>
  2. 包含三大主要元素的布局。
  <vi-flex class="vi-flex-demo" direction="column">
    <vi-header>header</vi-header>
    <vi-main>main</vi-main>
    <vi-footer>footer</vi-footer>
  </vi-flex>
  3. 包含 “侧边栏”，但没有 “底部” 的布局。
  <vi-flex class="vi-flex-demo" direction="column">
    <vi-header>header</vi-header>
    <vi-flex class="vi-flex-demo">
      <vi-aside>aside</vi-aside>
      <vi-main>main</vi-main>
    </vi-flex>
  </vi-flex>
  4. 完整的页面布局。
  <vi-flex class="vi-flex-demo" direction="column">
    <vi-header>header</vi-header>
    <vi-flex class="vi-flex-demo">
      <vi-aside>aside</vi-aside>
      <vi-main>main</vi-main>
    </vi-flex>
    <vi-footer>footer</vi-footer>
  </vi-flex>
  5. “侧边栏” 贯穿 “底部” 的布局。
  <vi-flex class="vi-flex-demo" direction="column">
    <vi-header>header</vi-header>
    <vi-flex class="vi-flex-demo">
      <vi-aside>aside</vi-aside>
      <vi-flex direction="column">
        <vi-main>main</vi-main>
        <vi-footer>footer</vi-footer>
      </vi-flex>
    </vi-flex>
  </vi-flex>
  6. “侧边栏” 为通栏的布局。
  <vi-flex class="vi-flex-demo">
    <vi-aside>aside</vi-aside>
    <vi-flex class="vi-flex-demo" direction="column">
      <vi-header>header</vi-header>
      <vi-flex direction="column">
        <vi-main>main</vi-main>
        <vi-footer>footer</vi-footer>
      </vi-flex>
    </vi-flex>
  </vi-flex>
</template>

<style lang="scss">
.vi-flex-demo {
  .vi-header,
  .vi-footer { 
    background-color: #e0cbf9;
  }
  .vi-main { 
    padding: 100px 0;
    background-color: #cba7f8; 
  }
  .vi-aside { 
    padding: 100px 18px;
    background-color: #d6c1ef;
  }
  .vi-header,
  .vi-main,
  .vi-aside,
  .vi-footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
```

## APIs

### Flex 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| direction | 同原生 `flex` 布局的 `flex-direction` | `'row'` / `'column'` / `'row-reverse'` / `'column-reverse'` | `'row'` |
| justify | 同原生 `flex` 布局的 `justify-content` | `'start'` / `'center'` / `'end'` / `'space-between'` / `'space-around'` / `'space-evenly'` | —— |
| align | 同原生 `flex` 布局的 `align-items` | `'start'` / `'center'` / `'end'` | —— |
| flex | 同原生 `flex` 布局的 `flex` | `string` | `'1'` |

### Header 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| padding | 内边距 | `string` | `'0 18px'` |
| height | 高度 | `string` | `'80px'` |

### Main 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| padding | 内边距 | `string` | `'18px'` |

### Aside 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| width | 宽度 | `string` | `'300px'` |

### Footer 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| padding | 内边距 | `string` | `'0 18px'` |
| height | 高度 | `string` | `'80px'` |
