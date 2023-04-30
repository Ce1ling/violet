<script lang="ts" setup>

</script>

<template>
  <div class="examples">
    <vi-flex direction="column" gap="18px">
      <vi-row>
        <vi-button type="primary" disabled> 主要按钮 </vi-button>
        <vi-button type="success" disabled> 成功按钮 </vi-button>
        <vi-button type="info" disabled> 信息按钮 </vi-button>
        <vi-button type="warning" disabled> 警告按钮 </vi-button>
        <vi-button type="danger" disabled> 危险按钮 </vi-button>
      </vi-row>
      <vi-row>
        <vi-button type="primary" disabled plain> 主要按钮 </vi-button>
        <vi-button type="success" disabled plain> 成功按钮 </vi-button>
        <vi-button type="info" disabled plain> 信息按钮 </vi-button>
        <vi-button type="warning" disabled plain> 警告按钮 </vi-button>
        <vi-button type="danger" disabled plain> 危险按钮 </vi-button>
      </vi-row>
    </vi-flex>
  </div>
</template>

<style scoped>
</style>