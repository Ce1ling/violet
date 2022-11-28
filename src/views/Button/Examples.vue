<script setup lang="ts">
import { ref } from 'vue'
import Example from './Example.vue'
import ViButton from '../../../packages/components/Button/index.vue'

type Props = {
  anchors: string[]
}
const props = defineProps<Props>()


const basicCode = ref(
`<div>
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
</div>`
)

const loadingCode = ref(
`<vi-button type="primary" :loading="true"> 主要按钮 </vi-button>
<vi-button type="success" :loading="true"> 成功按钮 </vi-button>
<vi-button type="warning" :loading="true"> 警告按钮 </vi-button>
<vi-button type="danger" :loading="true"> 危险按钮 </vi-button>`
)

const disabledCode = ref(
`<vi-button type="primary" disabled> 主要按钮 </vi-button>
<vi-button type="success" disabled> 成功按钮 </vi-button>
<vi-button type="warning" disabled> 警告按钮 </vi-button>
<vi-button type="danger" disabled> 危险按钮 </vi-button>`
)

const textCode = ref(
`<vi-button type="primary" text> 主要按钮 </vi-button>
<vi-button type="success" text> 成功按钮 </vi-button>
<vi-button type="warning" text> 警告按钮 </vi-button>
<vi-button type="danger" text> 危险按钮 </vi-button>`
)

const bgColorCode = ref(
`<vi-button type="primary" bg-color="violet"> 自定义背景色1 </vi-button>
<vi-button type="success" bg-color="skyblue"> 自定义背景色2 </vi-button>
<vi-button type="warning" bg-color="orange"> 自定义背景色3 </vi-button>
<vi-button type="danger" bg-color="green"> 自定义背景色4 </vi-button>`
)

const colorCode = ref(
`<vi-button type="primary" text color="violet"> 自定义文字颜色 </vi-button>
<vi-button type="success" text color="skyblue"> 与 text 一起使用 </vi-button>
<vi-button type="warning" color="black"> 自定义文字颜色 </vi-button>
<vi-button type="danger" color="yellow"> 不与 text 一起使用 </vi-button>`
)
</script>

<template>
  <Example :anchor="anchors[0]" :code="basicCode">
    <template #desc>
      在 <code>type</code> 属性中使用
      <code>primary</code>、<code>success</code>、
      <code>warning</code>、<code>danger</code>
      来展示不同类型的按钮, 如果按钮是 <code>primary</code> 类型，
      则你可以省略 <code>type</code> 属性，因为它是默认值。
    </template>
    <template #example>
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
  </Example>
  <Example :anchor="anchors[1]" :code="loadingCode">
    <template #desc>
      使用 <code>loading</code> 属性，
      使按钮处于加载状态。
    </template>
    <template #example>
      <vi-button type="primary" :loading="true"> 主要按钮 </vi-button>
      <vi-button type="success" :loading="true"> 成功按钮 </vi-button>
      <vi-button type="warning" :loading="true"> 警告按钮 </vi-button>
      <vi-button type="danger" :loading="true"> 危险按钮 </vi-button>
    </template>
  </Example>
  <Example :anchor="anchors[2]" :code="disabledCode">
    <template #desc>
      使用 <code>disabled</code> 属性，
      使按钮不可被点击。
    </template>
    <template #example>
      <vi-button type="primary" disabled> 主要按钮 </vi-button>
      <vi-button type="success" disabled> 成功按钮 </vi-button>
      <vi-button type="warning" disabled> 警告按钮 </vi-button>
      <vi-button type="danger" disabled> 危险按钮 </vi-button>
    </template>
  </Example>
  <Example :anchor="anchors[3]" :code="textCode">
    <template #desc>
      使用 <code>text</code> 属性，定义文字按钮。
    </template>
    <template #example>
      <vi-button type="primary" text> 主要按钮 </vi-button>
      <vi-button type="success" text> 成功按钮 </vi-button>
      <vi-button type="warning" text> 警告按钮 </vi-button>
      <vi-button type="danger" text> 危险按钮 </vi-button>
    </template>
  </Example>
  <Example :anchor="anchors[4]" :code="bgColorCode">
    <template #desc>
      使用 <code>bg-color</code> 属性，自定义按钮的背景颜色，
      <code>hover</code> 与 <code>active</code> 状态我们将会自动为您推测。
      <code>bg-color</code> 的值你可以使用：颜色单词，或是 16进制，亦或是 RBG，只要它是一个字符串即可。
      <div class="tips">
        <h1>TIP:</h1>
        如果您的颜色过于鲜艳，自动推测的 <code>hover</code> 与 <code>active</code> 状态可能会不够明显，这种情况请使用样式穿透自行修改。
      </div>
    </template>
    <template #example>
      <vi-button type="primary" bg-color="violet"> 自定义背景颜色1 </vi-button>
      <vi-button type="success" bg-color="skyblue"> 自定义背景颜色2 </vi-button>
      <vi-button type="warning" bg-color="orange"> 自定义背景颜色3 </vi-button>
      <vi-button type="danger" bg-color="green"> 自定义背景颜色4 </vi-button>
    </template>
  </Example>
  <Example :anchor="anchors[5]" :code="colorCode">
    <template #desc>
      使用 <code>color</code> 属性，自定义按钮的文字颜色，
      你可以与 <code>text</code> 属性的文字按钮一起使用，也可以单独使用。
    </template>
    <template #example>
      <vi-button type="primary" text color="violet"> 自定义文字颜色 </vi-button>
      <vi-button type="success" text color="skyblue"> 与 text 一起使用 </vi-button>
      <vi-button type="warning" color="black"> 自定义文字颜色 </vi-button>
      <vi-button type="danger" color="yellow"> 不与 text 一起使用 </vi-button>
    </template>
  </Example>
</template>

<style scoped lang="scss">
.tips {
  background-color: #eeeeee5a;
  border-left: 5px solid var(--primary-color);
  border-radius: 4px;
  padding: 20px 10px;
  margin: 20px 0;
  h1 {
    margin-bottom: 10px;
  }
}
</style>