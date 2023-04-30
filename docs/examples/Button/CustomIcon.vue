<script lang="ts" setup>

</script>

<template>
  <div class="examples">
    <vi-row>
      <vi-button type="success">
        <template #prefix> 
          <vi-icon name="Plus" size="24px" />
        </template>
        <span>加</span>
      </vi-button>
      <vi-button type="danger">
        <template #suffix> 
          <vi-icon name="Minus" size="24px" />
        </template>
        <span>减</span>
      </vi-button>
    </vi-row>
  </div>
</template>

<style scoped>
</style>