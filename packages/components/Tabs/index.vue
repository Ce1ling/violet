<script setup lang="ts">
import { ref, useSlots, h, watch } from 'vue'
import type { VNode, VNodeArrayChildren } from 'vue'

interface Props {
  active: string
  activeBgColor?: string
  bgColor?: string
  ifMode?: boolean
}
interface Emits {
  (e: 'tab-click', name: string, event: MouseEvent): void
}
type RenderVNode = VNodeArrayChildren | undefined

const props = withDefaults(defineProps<Props>(), {
  activeBgColor: 'var(--primary-color)',
  bgColor: 'var(--tabs-header-bg-color)',
  ifMode: false
})
const emit = defineEmits<Emits>()
const slots = useSlots()

const defaultActive = ref<typeof props.active>(props.active)

watch(() => props.active, val => defaultActive.value = val || '')

const checkNodeType = (key: string) => {
  /**
   * 用于检查 DOM 类型，共以下几种：
   *  1. normal: 正常节点
   *  2. fragment: v-for 产生的一个父节点片段
   *  3. comment: 注释节点
   */
  
  switch (key) {
    case 'Symbol(Comment)':
      return 'comment'
    case 'Symbol(Fragment)':
      return 'fragment'
    default:
      return 'normal'
  }
}
/** 对 Vue h函数 的封装，仅用于渲染 Tab header */
const hRenderTabHeader = (type: string, vNode: VNode) => h(type, {
  class: ['vi-tabs__header-item', {
    'vi-tab-active': defaultActive.value === vNode.props?.name
  }],
  innerText: vNode.props?.label,
  onClick: (e: MouseEvent) => {
    defaultActive.value = vNode.props?.name
    emit('tab-click', vNode.props?.name, e)
  }
})
/** 对 Vue h函数 的封装，仅用于渲染 Tab content */
const hRenderTabContent = (vNode: VNode) => h(vNode, { style: { 
  display: defaultActive.value === vNode.props?.name ? 'block' : 'none' 
}})
/** 筛选并渲染 Tab header */
const RenderTabHeader = (): RenderVNode => {
  return slots.default && slots.default().map(vNode => {
    const type = checkNodeType(vNode.type.toString())
    if (type === 'normal') {
      return hRenderTabHeader('div', vNode)
    }
    if (type === 'fragment') {
      return vNode.children && (vNode.children as VNodeArrayChildren).map(child => {
        return hRenderTabHeader('div', child as VNode)
      })
    }
  })
}
/** 筛选并渲染 Tab content */
const RenderTabContent = (): RenderVNode => {

  if (!slots.default) { return }

  return props.ifMode 
    ? slots.default().map(vNode => {
        const type = checkNodeType(vNode.type.toString())
        if (type === 'normal') {
          return vNode.props?.name === defaultActive.value 
            ? slots.default!().find(normalVNode => normalVNode.props?.name === defaultActive.value)
            : null
        } 
        if (type === 'fragment') {
          return (vNode.children as VNodeArrayChildren)?.find(childNode => {
            return (childNode as VNode).props?.name === defaultActive.value
          })
        }
      })
    : slots.default().map(vNode => {
        const type = checkNodeType(vNode.type.toString())
        if (type === 'normal') { return hRenderTabContent(vNode) }
        if (type === 'fragment') {
          return (vNode.children as VNodeArrayChildren).map(childNode => {
            return hRenderTabContent(childNode as VNode)
          })
        }
      })
}
</script>

<template>
  <div class="vi-tabs">
    <div class="vi-tabs__header">
      <RenderTabHeader />
    </div>
    <div class="vi-tabs__content">
      <RenderTabContent />
    </div>
  </div>
</template>

<style lang="scss">
.vi-tabs {
  .vi-tabs__header {
    display: flex;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    background-color: v-bind(bgColor);
    position: relative;
    border: 1px solid var(--border-color);
    border-bottom: none;
    &-item {
      flex-shrink: 0;
      padding: 8px 18px;
      border-radius: var(--border-radius) var(--border-radius) 0 0;
      cursor: pointer;
      text-align: center;
      transition: background-color .3s;
      &.vi-tab-active {
        color: #fff;
        background-color: v-bind(activeBgColor);
      }
    }
  }
}
</style>
