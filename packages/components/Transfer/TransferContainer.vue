<script lang="ts" setup generic="T extends TransferItem[]">
import { computed, inject, ref } from 'vue'

import type { TransferItem, TransferProps, TransferContainerProps } from './transfer'
import type { TransferCheck } from './useTransfer'


const props = defineProps<TransferContainerProps<T>>()

const transferProps = inject<TransferProps<T>>('transferProps')!
const [checkItem, checkAll] = inject<TransferCheck>('transferCheck')!

const checkedAndTotal = computed(() => {
  const total = props.list.length
  const checkedLen = props.list.filter(item => item.checked).length

  return `${checkedLen}/${total}`
})

const getItemClass = (item: TransferItem) => ({
  'is-disabled': item.disabled,
  'is-checked': item.checked
})
</script>

<template>
  <div class="vi-transfer__container">
    <h2 class="vi-transfer__title">
      <vi-checkbox v-model="checkAll(type).value" />
      <span class="vi-transfer__title-inner">{{ title }}</span>
      <span class="vi-transfer-total" v-if="transferProps.showTotal">
        {{ checkedAndTotal }}
      </span>
    </h2>
    <ul class="vi-transfer__list">
      <li 
        class="vi-transfer__item" 
        :class="getItemClass(item)"
        v-for="item in <TransferItem[]>list" 
        :key="item.id"
        @click="checkItem(item, !item.checked)"
      >
        <vi-checkbox 
          v-model="item.checked" 
          :disabled="item.disabled" 
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
      font-size: var(--vi-font-size-large);
      flex-grow: 1;
      overflow: hidden;
    }
  }
  & &-total {
    font-weight: var(--vi-font-weight-normal);
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
  }
}
</style>