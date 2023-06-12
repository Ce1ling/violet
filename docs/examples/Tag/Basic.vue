<script lang="ts" setup>
import { ref } from 'vue'

const tags = ref([
  { type: 'primary', content: '子弹' },
  { type: 'success', content: '炸弹' },
  { type: 'info', content: '炮弹' },
  { type: 'warning', content: '导弹' },
  { type: 'danger', content: '核弹' },
])
</script>

<template>
  <vi-flex direction="column" gap="8px">
    <span>默认</span>
    <vi-row>
      <vi-tag v-for="{ type, content } in tags" :type="type">
        {{ content }}
      </vi-tag>
    </vi-row>
    
    <span>带边框</span>
    <vi-row>
      <vi-tag v-for="{ type, content } in tags" :type="type" border>
        {{ content }}
      </vi-tag>
    </vi-row>

    <span>圆角</span>
    <vi-row>
      <vi-tag v-for="{ type, content } in tags" :type="type" border round>
        {{ content }}
      </vi-tag>
    </vi-row>
  </vi-flex>
</template>

<style scoped>
</style>