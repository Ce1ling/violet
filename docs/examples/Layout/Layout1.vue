<template>
  <vi-flex class="vi-flex-demo" direction="column">
    <vi-header>header</vi-header>
    <vi-main>main</vi-main>
  </vi-flex>
</template>

<style lang="scss">
.vi-flex-demo {
  .vi-header,
  .vi-footer { 
    background-color: var(--doc-example-footer-bg-color);
  }
  .vi-main { 
    padding: 100px 0;
    background-color: var(--doc-example-main-bg-color); 
  }
  .vi-aside { 
    padding: 100px 18px;
    background-color: var(--doc-example-aside-bg-color);
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