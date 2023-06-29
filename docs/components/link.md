# Link 链接

基础超链接组件，美化超链接。

## 基础用法

使用 `type` 属性，定义链接类别。默认为 `primary`。

::: demo

Link/Basic

:::

## 下划线

使用 `underline` 属性，改变下划线显示状态。

::: demo

Link/Underline

:::

## 禁用状态

使用 `disabled` 属性，来禁用链接。

::: demo

Link/Disabled

:::

## 自定义图标

使用 `prefix` 与 `suffix` 插槽，来定义图标并定义位置。

::: demo

Link/CustomIcon

:::

## APIs

### 属性

| 属性名 | 说明 | 类型 | 默认值 | 是必需项 |
| :---: | :---: | :---: | :---: | :---: |
| type | 定义链接类型 | `'primary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | `false` |
| href | 同原生 `a` 标签 `href` 属性 | `string` | —— | `false` |
| underline | 是否需要下划线 | `boolean` | `true` | `false` |
| disabled | 是否为禁用状态 | `boolean` | `false` | `false` |

### 插槽

| 插槽名 | 插槽说明 |
| :---: | :---: |
| prefix | 定义前置内容 |
| suffix | 定义后置内容 |