<script lang="ts" setup generic="T extends TransferItem[]">
import { computed, provide } from 'vue'
import { TransferItem, TransferProps } from './transfer'
import { useTransfer } from './useTransfer'
import TransferContainer from './TransferContainer.vue'

import type { TransferCheck } from './useTransfer'


const props = defineProps<TransferProps<T>>()

const { 
  leftList, 
  rightList,
  toRight,
  toLeft,
  checkItem,
  checkAll
} = useTransfer(props.list)

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
    <TransferContainer title="List111" type="left" :list="leftList" />
    <div class="vi-transfer__buttons">
      <vi-button @click="toLeft" :disabled="!rightListChecked">
        <vi-icon name="Left" size="22px" cursor="inheirt" />
      </vi-button>
      <vi-button @click="toRight" :disabled="!leftListChecked">
        <vi-icon name="Right" size="22px" cursor="inheirt" />
      </vi-button>
    </div>
    <TransferContainer title="List222" type="right" :list="rightList" />
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