<script setup lang="ts">
import { useSlots, h } from 'vue'
import type { VNode, VNodeArrayChildren } from 'vue'
import { Icon as ViIcon } from '../index'

interface Props {
  modelValue: string
  activeBgColor?: string
  bgColor?: string
  ifMode?: boolean
  closable?: boolean
}
interface Emits {
  (e: 'update:modelValue', val: string): void
  (e: 'tab-click', name: string, event: MouseEvent): void
  (e: 'tab-remove', name: string, event: MouseEvent): void
}

const props = withDefaults(defineProps<Props>(), {
  activeBgColor: 'var(--vi-color-primary)',
  bgColor: 'var(--vi-color-info-weak)',
  ifMode: false,
  closable: false
})
const emit = defineEmits<Emits>()
const slots = useSlots()

/**
 * 用于检查 DOM 类型，共以下几种：
 *  1. `normal`: 正常节点
 *  2. `fragment`: `v-for` 产生的一个片段节点
 *  3. `comment`: 注释节点
 */
const checkNodeType = (key: string) => {
  switch (key) {
    case 'Symbol(Comment)':
      return 'comment'
    case 'Symbol(Fragment)':
      return 'fragment'
    default:
      return 'normal'
  }
}

/** 渲染 Tab header */
const hRenderTabHeader = (type: string, vNode: VNode) => h(type, {
  class: ['vi-tabs__header-item', {
    'is-active': props.modelValue === vNode.props?.name
  }],
  onClick: (e: MouseEvent) => {
    emit('update:modelValue', vNode.props?.name)
    emit('tab-click', vNode.props?.name, e)
  },
}, [
  h('span', vNode.props?.label), 
  props.closable && h(ViIcon, { 
    name: 'Close', 
    class: 'vi-tabs__close-icon',
    onClick: (e: MouseEvent) => {
      e.stopPropagation()
      emit('tab-remove', vNode.props?.name, e)
      // 当前展示的 Tab 被关闭则更新到下一个 Tab
      if (props.modelValue === vNode.props?.name) {
        emit('update:modelValue', `${Number(props.modelValue) + 1}`)
      }
    }
  })
])

type RenderVNode = VNodeArrayChildren | undefined
/** 筛选并渲染 Tab header */
const RenderTabHeader = (): RenderVNode => {
  return slots.default && slots.default().map(vNode => {
    const type = checkNodeType(vNode.type.toString())
    if (type === 'normal') {
      return hRenderTabHeader('div', vNode)
    }
    if (type === 'fragment') {
      return vNode.children && (vNode.children as VNodeArrayChildren).map(n => {
        return hRenderTabHeader('div', n as VNode)
      })
    }
  })
}

/** 渲染 Tab content */
const hRenderTabContent = (vNode: VNode) => h(vNode, { style: { 
  display: props.modelValue === vNode.props?.name ? 'block' : 'none'
}})

/** 筛选并渲染 Tab content */
const RenderTabContent = (): RenderVNode => {

  if (!slots.default) { return }

  return props.ifMode 
    ? slots.default().map(vNode => {
        const type = checkNodeType(vNode.type.toString())
        if (type === 'normal') {
          return vNode.props?.name === props.modelValue 
            ? slots.default!().find(n => n.props?.name === props.modelValue)
            : null
        } 
        if (type === 'fragment') {
          return (vNode.children as VNodeArrayChildren)?.find(n => {
            return (n as VNode).props?.name === props.modelValue
          })
        }
      })
    : slots.default().map(vNode => {
        const type = checkNodeType(vNode.type.toString())
        if (type === 'normal') { return hRenderTabContent(vNode) }
        if (type === 'fragment') {
          return (vNode.children as VNodeArrayChildren).map(n => {
            return hRenderTabContent(n as VNode)
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
    border-radius: var(--vi-base-radius) var(--vi-base-radius) 0 0;
    background-color: v-bind(bgColor);
    position: relative;
    border: 1px solid var(--vi-color-gray);
    border-bottom: none;
    overflow: hidden;
    &-item {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      padding: 8px var(--vi-base-padding);
      cursor: pointer;
      text-align: center;
      transition: all var(--vi-animation-duration);
      border-radius: var(--vi-base-radius) var(--vi-base-radius) 0 0;
      &:hover {
        color: var(--vi-color-primary);
      }
      .vi-tabs__close-icon {
        border-radius: 50%;
        transition: all var(--vi-animation-duration);
        margin-left: 4px;
        &:hover {
          color: var(--vi-color-white);
          background-color: var(--vi-color-primary);
          user-select: none;
        }
      }
      &.is-active {
        .vi-tabs__close-icon:hover {
          border-radius: 50%;
          color: var(--vi-color-primary);
          background-color: var(--vi-color-primary-weak);
        }
      }
      &.is-active {
        color: var(--vi-color-white);
        background-color: v-bind(activeBgColor);
      }
    }
  }
}
</style>
