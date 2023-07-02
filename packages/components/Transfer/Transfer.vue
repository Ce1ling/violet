<script lang="ts" setup generic="T extends TransferItem[]">
import { computed, provide } from 'vue'
import { useTransfer } from './useTransfer'
import TransferContainer from './TransferContainer.vue'

import type { TransferItem, TransferProps, TransferPropsDefaults } from './transfer'
import type { TransferCheck } from './useTransfer'


const props = withDefaults<
  TransferProps<T>,
  TransferPropsDefaults<T>
>(defineProps<TransferProps<T>>(), {
  showTotal: false,
  titles: () => ['List 1', 'List 2']
})

const { 
  leftList,
  rightList,
  toRight,
  toLeft,
  checkItem,
  checkAll
} = useTransfer(props.list)

provide<TransferProps<T>>('transferProps', props)
provide<TransferCheck>('transferCheck', [checkItem, checkAll])

const leftListChecked = computed(() => {
  return leftList.value.filter(item => item.checked).length
})

const rightListChecked = computed(() => {
  return rightList.value.filter(item => item.checked).length
})
</script>

<template>
  <div class="vi-transfer">
    <TransferContainer type="left" :title="titles[0]" :list="leftList" />
    <div class="vi-transfer__buttons">
      <vi-button @click="toLeft" :disabled="!rightListChecked">
        <vi-icon name="Left" size="22px" cursor="inheirt" />
      </vi-button>
      <vi-button @click="toRight" :disabled="!leftListChecked">
        <vi-icon name="Right" size="22px" cursor="inheirt" />
      </vi-button>
    </div>
    <TransferContainer type="right" :title="titles[1]" :list="rightList" />
  </div>
</template>

<style lang="scss">
.vi-transfer {
  display: flex;
  align-items: center;
  gap: 18px;

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>