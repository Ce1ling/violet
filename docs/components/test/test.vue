<script setup lang="ts">

</script>

<template>
  <div class="test">
    <span>基础：</span>
    <vi-alert> 123 </vi-alert>
    <span>深色：</span>
    <vi-alert dark> 123 </vi-alert>
    <span>可关闭：</span>
    <vi-alert closable> 123 </vi-alert>
    <span>带图标：</span>
    <vi-alert pre-icon closable> 123 </vi-alert>
    <span>文字居中：</span>
    <vi-alert pre-icon center="text"> 123 </vi-alert>
    <span>全部居中：</span>
    <vi-alert pre-icon closable center="all"> 123 </vi-alert>
    <span>自定图标：</span>
    <vi-alert pre-icon closable :custom-pre-icon="{ 'primary': 'Check' }"> 123 </vi-alert>
  </div>
</template>

<style lang="scss">
.test {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>