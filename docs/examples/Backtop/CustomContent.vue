<template>
  <span>请下滑查看效果（右下角第三个）</span>
  <vi-backtop 
    class="vi-backtop-demo-custome" 
    :show-height="50" 
    :right="160" 
    :bottom="100">
    TOP
  </vi-backtop>
</template>

<style lang="scss">
.vi-backtop-demo-custome {
  padding: 10px;
  font-weight: bolder;
  color: var(--vi-color-primary);
  &:hover { color: var(--vi-color-white); }
}
</style>