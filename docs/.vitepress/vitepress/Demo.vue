<script lang="ts" setup>
import { ref } from 'vue'
import { Example, SourceCode } from './components/index'
import { Tabs as ViTabs } from '../../../packages/components/index'
import { Toast } from '../../../packages/components/Toast'
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

const copy = () => {
  navigator.clipboard.writeText(decodeURIComponent(props.rawCode))
    .then(() => Toast.success('复制成功'), () => Toast.danger('复制失败'))
}
const change = (name: string) => {
  if (name === 'copy') {
    copy()
    return false
  }
  return true
}

</script>

<template>
  <vi-tabs class="demo-tabs" v-model="active" :before-change="change">
    <vi-tab name="example" label="示例">
      <Example :path="path" :example="examples[path]" />
    </vi-tab>
    <vi-tab name="source" label="代码">
      <SourceCode :code="code" />
    </vi-tab>
    <vi-tab name="copy" label="复制" title="复制代码" />
  </vi-tabs>
</template>

<style scoped lang="scss">
.demo-tabs :deep() {
  > .vi-tabs__header {
    justify-content: center;
    user-select: none;
  }
  > .vi-tabs__content > .vi-tab-plane {
    padding: 0;
  }
}
</style>