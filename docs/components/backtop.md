# Backtop 返回顶部

快速返回顶部。

## 基础用法

通过 `show-height` 属性，控制显示高度。当滚动条滚动到此值时，则显示。

::: tip

使用 `normal` 属性, 可以取消 `Backtop` 的定位。您可以使用这个属性将它放在任意位置。

:::

::: demo

Backtop/Basic

:::

## 圆形

通过 `round` 属性，控制是否为圆形。

::: demo

Backtop/Circle

:::

## 自定义内容

将自定义内容直接放入标签体内即可。

::: demo

Backtop/CustomContent

:::

## APIs

### 属性

| 属性名 | 说明 | 类型 | 默认值 | 是必需项 |
| :---: | :---: | :---: | :---: | :---: |
| show-height | 显示高度(到达此高度则显示) | `number` | `500` | `false` |
| hide-width | 隐藏宽度(小于等于此宽度则隐藏) | `number` | `-Infinity` | `false` |
| right | 距离右侧距离 | `number` | `50` | `false` |
| bottom | 距离底部距离 | `number` | `50` | `false` |
| z-index | 同原生 CSS `z-index` | `number` | `99` | `false` |
| round | 是否为圆角 | `boolean` | `fasle` | `false` |

### 插槽

| 插槽名 | 说明 |
| :---: | :---: |
| default | 定义默认内容 |