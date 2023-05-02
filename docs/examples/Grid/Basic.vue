<template>
  <vi-row class="vi-row-demo">
    <vi-col></vi-col>
  </vi-row>

  <vi-row class="vi-row-demo">
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>

  <vi-row class="vi-row-demo">
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>

  <vi-row class="vi-row-demo">
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>

  <vi-row class="vi-row-demo">
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
    <vi-col></vi-col>
  </vi-row>
</template>

<style lang="scss">
.vi-row-demo {
  padding: 8px;
  background-color: var(--doc-shadow-color);
  border-radius: var(--vi-base-radius);
  &:not(:last-child) { margin-bottom: 18px; }
  .vi-col {
    height: 28px;
    border-radius: var(--vi-base-radius);
    background-color: var(--vi-color-primary);
    &:nth-child(even) { background-color: violet; }
    &.justify { flex: 0 0 100px; }
  }
}
</style>