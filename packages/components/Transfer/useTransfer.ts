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
   * @param to 目标列表
   * @param data 数据
   */
  function setList(to: TransferActionType, data: TransferItem[]) {
    const reverseType = to === 'left' ? 'right' : 'left'

    dataList[to].value = [
      ...dataList[to].value,
      ...data
    ]

    dataList[reverseType].value = dataList[reverseType].value.filter(item => !data.includes(item))

    dataList[to].value.sort((a, b) => a[TRANSFER_SORT_KEY] - b[TRANSFER_SORT_KEY])
    dataList[to].value.forEach(item => item.checked = false)
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
    setList,
    checkItem,
    checkAll
  }
}