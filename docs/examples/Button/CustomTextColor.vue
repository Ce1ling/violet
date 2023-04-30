<script lang="ts" setup>
</script>

<template>
  <div class="examples">
    <vi-flex direction="column" gap="18px">
      <vi-row>
        <vi-button type="primary" text color="orange"> 自定义1 </vi-button>
        <vi-button type="success" text color="skyblue"> 自定义2 </vi-button>
        <vi-button type="warning" color="green"> 自定义3 </vi-button>
        <vi-button type="danger" color="blue"> 自定义4 </vi-button>
      </vi-row>
      <vi-row>
        <vi-button type="primary" color="orange" plain> 自定义1 </vi-button>
        <vi-button type="success" color="skyblue" plain> 自定义2 </vi-button>
        <vi-button type="warning" color="green" plain> 自定义3 </vi-button>
        <vi-button type="danger" color="blue" plain> 自定义4 </vi-button>
      </vi-row>
    </vi-flex>
  </div>
</template>

<style scoped>
</style>