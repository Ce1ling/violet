<script lang="ts" setup>
import { ref } from 'vue'

import { Example, SourceCode } from './components/index'
import { Tabs as ViTabs } from '../../../packages/components/index'
import { useExamples } from './composables/useExamples'
import HomePage from '../../examples/Home/Home.vue'

interface Props {
  title: string
  path: string
  code: string
  rawCode: string
  isHome: boolean
}

const props = defineProps<Props>()
const examples = useExamples()
const active = ref('example')
</script>

<template>
  <!-- 首页示例 -->
  <component v-if="isHome" :is="HomePage" />
  <!-- 组件示例 -->
  <vi-tabs v-else class="demo-tabs" v-model="active" content-padding="0" center>
    <vi-tab name="example" label="示例">
      <Example :path="path" :example="examples[path]" />
    </vi-tab>
    <vi-tab name="source" label="代码">
      <SourceCode :code="code" :raw-code="props.rawCode" />
    </vi-tab>
  </vi-tabs>
</template>
