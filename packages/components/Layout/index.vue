<script setup lang="ts">
</script>

<template>
  <div class="layout-container">
    <div>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-container {
  > div {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: 100px 100px;
    p {
      border: 1px solid blue;
    }
  }
}
</style>