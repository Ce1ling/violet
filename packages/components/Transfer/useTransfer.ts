import { computed, ref } from 'vue'
 
import type { Ref, WritableComputedRef } from 'vue'
import type { TransferItem, TransferActionType } from './transfer'


export interface UseTransfer {
  (list: TransferItem[]): ({
    leftList: Ref<TransferItem[]>
    rightList: Ref<TransferItem[]>
    setList: (type: TransferActionType, list: TransferItem[]) => void
    checkItem: (item: TransferItem, value: boolean) => void
    checkAll: (type: TransferActionType) => WritableComputedRef<boolean>
  })
}

export const useTransfer: UseTransfer = (list) => {
  const rightList = ref<TransferItem[]>([])
  const leftList = computed<TransferItem[]>(() => {
    return list.filter(item => !rightList.value.includes(item))
  })

  function addRightList(data: TransferItem[]) {
    const mergeData = [
      ...rightList.value,
      ...data
    ]
    // 为了数据的顺序，所以筛选 list 的数据
    rightList.value = list.filter(item => mergeData.includes(item))
  }

  function removeRightList(data: TransferItem[]) {
    rightList.value = rightList.value.filter(item => !data.includes(item))
  }

  function setList(to: TransferActionType, data: TransferItem[]) {
    data.forEach(item => item.checked = false)
    to === 'left' ? removeRightList(data) : addRightList(data)
  }

  function checkItem(item: TransferItem, value: boolean) {
    if (!item.disabled) {
      item.checked = value
    }
  }

  function checkAll(type: TransferActionType) {
    const isCheckedAll = (data: TransferItem[]) => computed({
      get() {
        const checkedLen = data.filter(item => item.checked).length
        const availableLen = data.filter(item => !item.disabled).length

        return (checkedLen >= availableLen) && availableLen !== 0
      },
      set(value) {
        data.forEach(item => checkItem(item, value))
      }
    })

    return isCheckedAll(type === 'left' ? leftList.value : rightList.value)
  }

  return {
    leftList,
    rightList,
    setList,
    checkItem,
    checkAll
  }
}