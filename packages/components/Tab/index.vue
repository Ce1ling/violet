<script setup lang="ts">
import { inject, onMounted, ref, watch } from 'vue'

type Props = {
  label: string | number
}
const props = withDefaults(defineProps<Props>(), {
})


type Active = {
  [key: string]: string | number
}

const active: Active = inject('active', { value: 0 })
const show = ref(false)

watch(active, () => {
  // console.log('changed', active.value);
  show.value = active.value === props.label ? true : false;
}, { immediate: true })

onMounted(() => {
  console.log('tab label', props.label);
  console.log('parent', parent);
})
</script>

<template>
  <div v-show="show">
    <slot></slot>
    {{ label }}
  </div>
</template>

<style scoped>
</style>