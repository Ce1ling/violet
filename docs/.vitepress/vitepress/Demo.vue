<script lang="ts" setup>
import { ref } from 'vue'
import { Example, SourceCode } from './components/index'
import { Tabs as ViTabs } from '../../../packages/components/index'

import { useExamples } from './composables/useExamples'

interface Props {
  title: string
  path: string
  code: string
  rawCode: string
}
const props = defineProps<Props>()

const examples = useExamples()

const active = ref('example')
</script>

<template>
  <vi-tabs class="demo-tabs" v-model="active">
    <vi-tab name="example" label="示例">
      <Example :path="path" :example="examples[path]" />
    </vi-tab>
    <vi-tab name="source" label="代码">
      <SourceCode :code="code" :raw-code="props.rawCode" />
    </vi-tab>
  </vi-tabs>
</template>

<style scoped lang="scss">
.demo-tabs :deep() {
  > .vi-tabs__header {
    justify-content: center;
    user-select: none;
    background-color: var(--doc-example-header-bg-color) !important;
    border-color: var(--doc-example-border-color) !important;
  }
  > .vi-tabs__content > .vi-tab-plane {
    padding: 0;
    border-color: var(--doc-example-border-color) !important;
  }
}
</style>
