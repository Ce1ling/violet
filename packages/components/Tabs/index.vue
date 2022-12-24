<script setup lang="ts">
import { ref, useSlots, h, watch} from 'vue'
import type { VNode, VNodeArrayChildren } from 'vue'

type Props = {
  active: string
  activeBgColor?: string
  bgColor?: string
  ifMode?: boolean
}
type RenderVNode = VNodeArrayChildren | undefined

const props = withDefaults(defineProps<Props>(), {
  active: '',
  activeBgColor: 'var(--primary-color)',
  bgColor: '#eeeeee',
  ifMode: false
})
const emit = defineEmits(['tab-click'])
const slots = useSlots()

const defaultActive = ref<string>(props.active)

watch(() => props.active, val => {
  if (val) { defaultActive.value = val }
})

const checkDOMType = (key: string) => {
  /**
   * 此方法用于检查 DOM 类型，共以下几种：
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
const hRenderTabHeader = (node: string, vNode: VNode) => {
  /**
   * 此方法是对 Vue h函数 的封装，但仅用于渲染 Tab 的头部
   */

   return h(node, {
    class: ['vi-tabs__header__item', {
      'vi-tabs__active': defaultActive.value === vNode.props?.name
    }],
    innerHTML: vNode.props?.label,
    onClick: (e: MouseEvent) => {
      defaultActive.value = vNode.props?.name
      emit('tab-click', vNode.props?.name, e)
    }
  })
}
const RenderTabHeader = (): RenderVNode => {
  /**
   * 此方法用于筛选并渲染 Tab 头部
   */

  return slots.default && slots.default().map(vNode => {
    const type = checkDOMType(vNode.type.toString())
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
const hRenderTabContent = (vNode: VNode) => {
  /**
   * 此方法是对 Vue h函数 的封装，但仅用于渲染 Tab 的内容
   */

  return h(vNode, { style: { 
    display: defaultActive.value === vNode.props?.name ? 'block' : 'none' 
  }})
}
const RenderTabContent = (): RenderVNode => {
  /**
   * 此方法用于筛选并渲染 Tab 内容体
   */

  if (!slots.default) { return }

  return props.ifMode 
    ? slots.default().map(vNode => {
        const type = checkDOMType(vNode.type.toString())
        if (type === 'normal') {
          return slots.default!().find(normalVNode => normalVNode.props?.name === defaultActive.value)
        } 
        if (type === 'fragment') {
          return (vNode.children as VNodeArrayChildren)?.find(childNode => {
            return (childNode as VNode).props?.name === defaultActive.value
          })
        }
      })
    : slots.default().map(vNode => {
        const type = checkDOMType(vNode.type.toString())
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
.vi-tabs__active {
  color: #fff;
  background-color: v-bind(activeBgColor);
}

.vi-tabs {
  .vi-tabs__header {
    display: flex;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    user-select: none;
    background-color: v-bind(bgColor);
    position: relative;
    z-index: 1;
    // overflow: hidden;
    &__item {
      flex-shrink: 0;
      padding: 8px 18px;
      border-radius: var(--border-radius) var(--border-radius) 0 0;
      cursor: pointer;
      text-align: center;
      transition: background-color .3s;
    }
  }
}
</style>
