<script lang="ts" setup>
import { baseURI } from '../config'
</script>

<template>
  <div class="not-found">
    <code class="error-code">404</code>
    <h2 class="tip">啊哦~~ 页面未找到</h2>
    <p class="desc">
      一般来说，这不是服务器的问题，而是您请求了服务器没有的资源！所以，请检查您的 URL！
    </p>
    <a :href="baseURI" class="backhome">回到首页</a>
  </div>
</template>

<style lang="scss">
#VPContent {
  display: flex;
  align-items: center;
  justify-content: center;
}
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 10px;
  > * {
    font-weight: bolder;
    text-align: center;
  }
  .error-code {
    font-size: 64px;
    line-height: 64px;
  }
  .tip {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 24px;
  }
  .desc {
    color: gray;
    width: 240px;
  }
  .backhome {
    display: inline-block;
    width: 120px;
    border: 1px solid var(--doc-color-primary);
    border-radius: 24px;
    padding: 4px;
    color: var(--doc-color-primary);
    transition: all .3s;
    &:hover {
      color: var(--doc-color-white);
      background-color: var(--doc-color-primary);
    }
  }
}
</style>