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

| 属性名 | 属性说明 | 属性类型 | 属性默认值 |
| :---: | :---: | :---: | :---: |
| show-height | 显示高度(滚动到达此高度则显示) | `number` | `500` |
| hide-width | 隐藏宽度(小于等于此宽度则彻底隐藏) | `number` | `-Infinity` |
| right | `Backtop` 离右侧距离 | `number` | `50` |
| bottom | `Backtop` 离底部距离 | `number` | `50` |
| z-index | 同原生 CSS `z-index` | `number` | `99` |
| round | 是否为圆角 | `boolean` | `fasle` |
