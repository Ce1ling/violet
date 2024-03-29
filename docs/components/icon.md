---
title: Icon
lang: zh-CN
---

# Icon 图标

基础 Icon 图标组件，内含 Violet 提供的一些基础图标。

## 基础用法

使用 `name` 属性，来定义图标，它是必须的！

::: demo

Icon/Basic

:::

## 加载动画

使用 `loading` 属性，来启用加载动画，这是 Violet 为您提供的一个加载动画。

::: tip

`loading` 属性不一定非要加在 loading 图标上，它可以加在任意一个 `vi-icon` 上，您可以点击“测试”按钮查看效果。

:::

::: demo

Icon/LoadingAnimation

:::

## 自定义加载动画时长

使用 `duration` 属性，定义加载时间，通过下方“加”、“减”按钮查看效果。

::: demo

Icon/CustomLoadingDuration

:::

## 自定义颜色

使用 `color` 属性，定义图标颜色。

::: demo

Icon/CustomColor

:::

## 自定义 hover 状态颜色

使用 `hover-color` 属性，定义图标 `hover` 状态的颜色。

::: demo

Icon/CustomHoverColor

:::

## 自定义鼠标指针

使用 `cursor` 属性，定义鼠标指针状态。此功能完全等同于 CSS 的 `cursor` 属性，考虑到图标大部分时候都是可以被点击的，所以它默认是 `pointer` 状态。

::: demo

Icon/CustomCursor

:::

## 图标集合

点击图标即可复制。

<script lang="ts" setup>
import { ref } from 'vue'
import { iconMaps } from '../../packages/components/Icon/iconMaps'
import { Message } from '../../packages/components/Message/index'

const selfClosing = ref(true)

const copy = (name: string) => {
  const selfClosingTag = `<vi-icon name="${name}" />`
  const completeTag = `<vi-icon name="${name}"></vi-icon>`
  navigator.clipboard.writeText(selfClosing.value ? selfClosingTag : completeTag)
    .then(res => Message.success('复制成功'))
    .catch(err => Message.danger('复制失败'))
}
</script>

<vi-flex>
  <span>复制模式：</span>
  <vi-switch v-model="selfClosing" on-text="自闭合标签" off-text="完整标签" />
</vi-flex>

<ul class="doc-icon-list">
  <li v-for="iconName in Object.keys(iconMaps)" :key="iconName" @click="copy(iconName)">
    <vi-icon :name="iconName" size="28px" />
    <span>{{ iconName }}</span>
  </li>
</ul>

<style scoped lang="scss">
.doc-icon-list {
  padding: 0;
  list-style: none;
  border-left: 1px solid var(--doc-border-color);
  border-top: 1px solid var(--doc-border-color);
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 10px;
    border-right: 1px solid var(--doc-border-color);
    border-bottom: 1px solid var(--doc-border-color);
    span { cursor: pointer }
    &:hover { color: var(--vi-color-primary); }
  }
}
@media screen and (max-width: 1820px) {
  .doc-icon-list { grid-template-columns: repeat(5, 1fr); }
}
</style>

## APIs

### 属性

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| name | 图标名称 | `string` | —— |
| size | 图标大小 | `string` | `'20px'` |
| color | 图标颜色 | `string` | `'inherit'` |
| cursor | 移入时的鼠标指针 | `string` | `'pointer' `|
| hover-color | 鼠标移入时的颜色（CSS `hover` 状态） | `string` | —— |
| loading | 是否需要加载动画 | `boolean` | `false` |
| duration | 加载动画时长 | `number` | `2` |