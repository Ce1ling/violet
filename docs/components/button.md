# Button 按钮

基础按钮组件

## 基础用法

在 `type` 属性中使用 `primary`、`success`、`warning`、`danger` 来展示不同类型的按钮, 如果按钮是 `primary` 类型， 则你可以省略 `type` 属性，因为它是默认值。

```vue
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
```

## 加载状态

使用 `loading` 属性， 使按钮处于加载状态。

```vue
<vi-button type="primary" :loading="true"> 主要按钮 </vi-button>
<vi-button type="success" :loading="true"> 成功按钮 </vi-button>
<vi-button type="warning" :loading="true"> 警告按钮 </vi-button>
<vi-button type="danger" :loading="true"> 危险按钮 </vi-button>
```