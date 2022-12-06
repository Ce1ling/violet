## 基础用法

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

```vue
<template>
  <vi-button type="primary" disabled> 主要按钮 </vi-button>
  <vi-button type="success" disabled> 成功按钮 </vi-button>
  <vi-button type="warning" disabled> 警告按钮 </vi-button>
  <vi-button type="danger" disabled> 危险按钮 </vi-button>
</template>
```