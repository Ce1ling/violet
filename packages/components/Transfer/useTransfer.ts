import { computed, ref } from 'vue'

import type { Ref, WritableComputedRef } from 'vue'
import type { TransferItem, TransferActionType } from './transfer'

export interface UseTransfer {
  (list: TransferItem[]): {
    leftList: Ref<TransferItem[]>
    rightList: Ref<TransferItem[]>
    setList: (type: TransferActionType, list: TransferItem[]) => void
    checkItem: (item: TransferItem, value: boolean) => void
    checkAll: (type: TransferActionType) => WritableComputedRef<boolean>
    isCheckedPart: (type: TransferActionType) => boolean
  }
}

export const useTransfer: UseTransfer = list => {
  const rightList = ref<TransferItem[]>([])
  const leftList = computed<TransferItem[]>(() =>
    list.filter(item => !rightList.value.includes(item))
  )

  function addRightList(data: TransferItem[]) {
    const mergeData = [...rightList.value, ...data]
    // 为了数据的顺序，所以筛选 list 的数据
    rightList.value = list.filter(item => mergeData.includes(item))
  }

  function removeRightList(data: TransferItem[]) {
    rightList.value = rightList.value.filter(item => !data.includes(item))
  }

  function setList(to: TransferActionType, data: TransferItem[]) {
    data.forEach(item => (item.checked = false))
    to === 'left' ? removeRightList(data) : addRightList(data)
  }

  function checkItem(item: TransferItem, value: boolean) {
    if (!item.disabled) {
      item.checked = value
    }
  }

  function checkAll(type: TransferActionType) {
    const list = type === 'left' ? leftList.value : rightList.value

    return computed({
      get() {
        const checkedLen = list.filter(item => item.checked).length
        const availableLen = list.filter(item => !item.disabled).length

        return checkedLen >= availableLen && availableLen !== 0
      },
      // 这是必要的
      set: value => list.forEach(item => checkItem(item, value)),
    })
  }

  function isCheckedPart(type: TransferActionType) {
    const availableList = (
      type === 'left' ? leftList.value : rightList.value
    ).filter(e => !e.disabled)
    const checkedLen = availableList.filter(item => item.checked).length

    return checkedLen !== availableList.length && checkedLen !== 0
  }

  return {
    leftList,
    rightList,
    setList,
    checkItem,
    checkAll,
    isCheckedPart,
  }
}
