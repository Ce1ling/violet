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
    background-color: #e0cbf9;
  }
  .vi-main { 
    padding: 100px 0;
    background-color: #cba7f8; 
  }
  .vi-aside { 
    padding: 100px 18px;
    background-color: #d6c1ef;
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