<script lang="ts" setup generic="T extends TransferItem[]">
import { computed, provide } from 'vue'
import { useTransfer } from './useTransfer'
import TransferContainer from './TransferContainer.vue'

import type {
  TransferActionType,
  TransferItem,
  TransferProps,
  TransferPropsDefaults,
  TransferEmits,
} from './transfer'
import type { UseTransfer } from './useTransfer'

const props = withDefaults<TransferProps<T>, TransferPropsDefaults<T>>(
  defineProps<TransferProps<T>>(),
  {
    showTotal: false,
    titles: () => ['List 1', 'List 2'],
    draggable: false,
  }
)

const emit = defineEmits<TransferEmits>()

const useTransferMethods = useTransfer(props.list)
const { leftList, rightList, setList } = useTransferMethods

provide<TransferProps<T>>('transferProps', props)
provide<TransferEmits>('transferEmits', emit)
provide<ReturnType<UseTransfer>>('useTransfer', useTransferMethods)

const listCheckedLen = (list: TransferItem[]) => {
  return computed(() => list.filter(item => item.checked).length)
}

const setListData = (to: TransferActionType, list: TransferItem[]) => {
  const checkedData = list.filter(item => item.checked)
  setList(to, checkedData)
  emit('change', to, checkedData)
}
</script>

<template>
  <div class="vi-transfer">
    <TransferContainer
      type="left"
      :title="titles[0]"
      :list="leftList"
      :class="props.leftClass"
    />
    <div class="vi-transfer__buttons">
      <vi-button
        @click="setListData('left', rightList)"
        :disabled="!listCheckedLen(rightList).value"
      >
        <vi-icon name="Left" size="22px" cursor="inheirt" />
      </vi-button>
      <vi-button
        @click="setListData('right', leftList)"
        :disabled="!listCheckedLen(leftList).value"
      >
        <vi-icon name="Right" size="22px" cursor="inheirt" />
      </vi-button>
    </div>
    <TransferContainer
      type="right"
      :title="titles[1]"
      :list="rightList"
      :class="props.rightClass"
    />
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
