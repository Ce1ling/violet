<script setup lang="ts">
import { useSlots, h, watch, computed } from 'vue'
import { Icon as ViIcon } from '../index'

import type { VNode, VNodeArrayChildren } from 'vue'
import type { TabsProps, TabsEmits } from './tabs'


const props = withDefaults(defineProps<TabsProps>(), {
  activeBgColor: 'var(--vi-color-primary)',
  bgColor: 'var(--vi-tabs-header-bg-color)',
  ifMode: false,
  removable: false
})
const emit = defineEmits<TabsEmits>()

const slots = useSlots()

const getHeaderStyles = computed(() => ({
  backgroundColor: props.bgColor
}))

const onBeforeChange = (fn: TabsProps['beforeChange'], name: string) => {
  if (!fn) {
    emit('update:modelValue', name)
    return
  }
  if (fn(name)) {
    emit('update:modelValue', name)
  }
}
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
const renderRemoveIcon = (vNode: VNode) => {
  if (!props.removable) { return }

  return h(ViIcon, { 
    name: 'Close', 
    class: 'vi-tabs__close-icon',
    onClick: (e: MouseEvent) => {
      e.stopPropagation()
      emit('tab-remove', vNode.props?.name, e)
    }
  })
}
/** 渲染 Tab header */
const hRenderTabHeader = (type: string, vNode: VNode) => {
  const isActive = props.modelValue === vNode.props?.name

  return h(type, {
    ...vNode.props,
    class: ['vi-tabs__header-item', {
      'is-active': isActive
    }],
    style: {
      backgroundColor: isActive ? props.activeBgColor : ''
    },
    onClick: (e: MouseEvent) => {
      const { name } = vNode.props ?? {}
      emit('tab-click', name, e)
      // 改变前判断是否允许改变
      onBeforeChange(props.beforeChange, name)
    },
  }, [
    h('span', vNode.props?.label), 
    renderRemoveIcon(vNode)
  ])
}
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
    ? slots.default().map((vNode: VNode) => {
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

watch(() => props.modelValue, (val, oVal) => emit('change', val, oVal))
</script>

<template>
  <div class="vi-tabs">
    <div class="vi-tabs__header" :style="getHeaderStyles">
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
    position: relative;
    border: 1px solid var(--vi-tabs-border-color);
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
      }
    }
  }
}
</style>
