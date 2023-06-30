import { computed, ref } from 'vue'
 
import type { Ref, WritableComputedRef } from 'vue'
import type { TransferItem, TransferActionType } from './transfer'


export type TransferCheckItem = (item: TransferItem, value: boolean) => void

export type TransferCheckAll = (type: TransferActionType) => WritableComputedRef<boolean>

export type TransferCheck = [TransferCheckItem, TransferCheckAll]

interface UseTransfer {
  (list: TransferItem[]): ({
    leftList: Ref<TransferItem[]>
    rightList: Ref<TransferItem[]>
    toRight(): void
    toLeft(): void
    checkItem: TransferCheckItem
    checkAll: TransferCheckAll
  })
}

export const useTransfer: UseTransfer = (list) => {
  const dataList = {
    left: ref<TransferItem[]>(list),
    right: ref<TransferItem[]>([])
  }

  /**
   * 设置列表数据
   * @param {TransferActionType} type 待设置的列表，分为左、右
   */
  function setList(type: TransferActionType) {
    const reverseType = type === 'left' ? 'right' : 'left'
    const checkedList = dataList[type].value.filter(item => item.checked)

    dataList[reverseType].value = [
      ...dataList[reverseType].value, 
      ...checkedList
    ]
    dataList[type].value = dataList[type].value.filter(item => !item.checked)

    checkedList.forEach(item => item.checked = false)
  }

  function checkItem(item: TransferItem, value: boolean) {
    if (!item.disabled) {
      item.checked = value
    }
  }

  /**
   * 选中本列表所有项
   * @param type 待选中的列表，分为左、右
   * @returns {WritableComputedRef<boolean>} 是否已全选
   */
  function checkAll(type: TransferActionType) {
    return computed({
      get() {
        const checkedLen = dataList[type].value.filter(item => item.checked).length
        const availableLen = dataList[type].value.filter(item => !item.disabled).length
        return (checkedLen >= availableLen) && availableLen !== 0
      },
      set(value) {
        dataList[type].value.forEach(item => checkItem(item, value))
      }
    })
  }

  return {
    leftList: dataList.left,
    rightList: dataList.right,
    toRight: () => setList('left'),
    toLeft: () => setList('right'),
    checkItem,
    checkAll
  }
}