<script lang="ts" setup generic="T extends TransferItem[]">
import { computed, inject, ref, watch } from 'vue'

import type {
  TransferItem,
  TransferProps,
  TransferContainerProps,
  TransferEmits,
} from './transfer'
import type { UseTransfer } from './useTransfer'

const props = defineProps<TransferContainerProps<T>>()

const transferProps = inject<TransferProps<T>>('transferProps')!
const transferEmits = inject<TransferEmits>('transferEmits')!

const { setList, checkItem, checkAll } =
  inject<ReturnType<UseTransfer>>('useTransfer')!

const isDragging = ref(false)

const checkedAndTotal = computed(() => {
  const total = props.list.length
  const checkedLen = props.list.filter(item => item.checked).length

  return `${checkedLen}/${total}`
})

const getItemClass = (item: TransferItem) => ({
  'is-disabled': item.disabled,
  'is-checked': item.checked,
  'is-dragging': isDragging.value,
})

const handleCheckChange = (list: TransferItem[]) => {
  transferEmits('check-change', props.type, list)
}

const handleItemClick = (item: TransferItem) => {
  checkItem(item, !item.checked)
  handleCheckChange([item])
}

const dragStart = (e: DragEvent, item: TransferItem) => {
  e.dataTransfer?.setData('item_id', item.id)
  e.dataTransfer?.setData('origin', props.type)
  isDragging.value = true
}

const handleDrop = (e: DragEvent) => {
  if (!transferProps.draggable) {
    return
  }

  const id = e.dataTransfer?.getData('item_id')
  const dropTarget = e.dataTransfer?.getData('origin')
  const targetItem = transferProps.list.find(item => item.id === id)

  if (dropTarget === props.type || !targetItem) {
    return
  }

  setList(props.type, [targetItem])
  transferEmits('change', props.type, [targetItem])
}
</script>

<template>
  <div class="vi-transfer__container">
    <h2 class="vi-transfer__title">
      <vi-checkbox
        v-model="checkAll(type).value"
        @change="handleCheckChange(list as TransferItem[])"
      />
      <span class="vi-transfer__title-inner">{{ title }}</span>
      <span class="vi-transfer-total" v-if="transferProps.showTotal">
        {{ checkedAndTotal }}
      </span>
    </h2>
    <ul class="vi-transfer__list" @dragover.prevent="void" @drop="handleDrop">
      <li
        class="vi-transfer__item"
        :class="getItemClass(item)"
        v-for="item in <TransferItem[]>list"
        :key="item.id"
        :draggable="transferProps.draggable && !item.disabled"
        @click="handleItemClick(item)"
        @dragstart="dragStart($event, item)"
        @dragend="isDragging = false"
      >
        <vi-checkbox
          v-model="item.checked"
          :disabled="item.disabled"
          @click.prevent="void"
        />
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.vi-transfer {
  & &__container {
    border: 1px solid var(--vi-color-gray);
    width: var(--vi-transfer-width);
    border-radius: var(--vi-base-radius);
    overflow: hidden;
  }

  & &__title {
    margin: 0;
    padding: var(--vi-transfer-title-padding);
    border-bottom: 1px solid var(--vi-color-gray);
    display: flex;
    align-items: center;
    background-color: var(--vi-color-info-weak);
    user-select: none;
    cursor: pointer;

    &-inner {
      display: inline-block;
      font-size: var(--vi-font-size-xl);
      flex-grow: 1;
      overflow: hidden;
    }
  }

  & &-total {
    font-weight: normal;
    font-size: var(--vi-font-size-small);
  }

  & &__list {
    margin: 0;
    padding: var(--vi-transfer-list-padding);
    height: var(--vi-transfer-height);
    overflow-y: auto;
  }

  & &__item {
    list-style: none;
    margin: 0;
    padding: var(--vi-transfer-item-padding);
    user-select: none;
    display: flex;
    align-items: center;
    transition: opacity var(--vi-animation-duration);

    &:hover {
      cursor: pointer;
      background-color: var(--vi-color-primary-weak);
    }
    &.is-checked {
      color: var(--vi-color-primary);
    }
    &.is-disabled {
      color: var(--vi-color-info);
      &:hover {
        cursor: not-allowed;
        background-color: inherit;
      }
    }
    &.is-dragging {
      opacity: var(--vi-opacity-half);
    }
  }
}
</style>
