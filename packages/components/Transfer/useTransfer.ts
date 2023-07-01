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

const TRANSFER_SORT_KEY = '__sort_key__'

export const useTransfer: UseTransfer = (list) => {
  const dataList = {
    left: ref<TransferItem[]>(sortable(list)),
    right: ref<TransferItem[]>([])
  }

  /**
   * `transfer` 内部方法，仅用于排序
   * @param {TransferItem[]} data 数据
   * @param {String} key 用于排序的 `key`
   * @returns 返回带 `key` 的 `data`
   */
  function sortable(data: TransferItem[], key: string = TRANSFER_SORT_KEY) {
    return data.map((item, i) => {
      item[key] = i
      return item
    })
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

    // 取消选中并排序, 这个操作必须在 dataList[type].value 赋值之后
    dataList[reverseType].value.sort((item1, item2) => {
      item1.checked = false
      item2.checked = false
      return item1[TRANSFER_SORT_KEY] - item2[TRANSFER_SORT_KEY]
    })
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