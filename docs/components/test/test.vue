<script setup lang="ts">
import { ref } from 'vue'

const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const show5 = ref(false)
const show6 = ref(false)
const show7 = ref(false)
const show8 = ref(false)
const show = ref(false)

const open = (val: boolean) => {
  console.log('open', val)
}
const close = (val: boolean) => {
  console.log('close', val)
}

const beforeClose = (fn: () => void) => {
  show.value = true
  console.log('close fn', fn)
}
const cancel = () => {
  show.value = false
}
const confirm = () => {
  show.value = false
  show7.value = false
}
</script>

<template>
  <div class="test">
    <vi-button @click="show1 = true">左侧</vi-button>
    <vi-button @click="show2 = true">右侧(使用插槽)</vi-button>
    <vi-button @click="show3 = true">顶部(无标题)</vi-button>
    <vi-button @click="show4 = true">底部(遮罩层不可关闭)</vi-button>
    <vi-button @click="show5 = true">嵌套</vi-button>
    <vi-button @click="show7 = true">触发事件</vi-button>
    <vi-button @click="show8 = true">不需要遮罩层</vi-button>
    <vi-drawer v-model="show1" title="Hi title" direction="l-r" :show-close="false">
      从左出来
    </vi-drawer>
    <vi-drawer v-model="show2" title="Hi title">
      <template #header>
        <h4>header title</h4>
      </template>
      从右出来
    </vi-drawer>
    <vi-drawer v-model="show3" direction="t-b">
      从上出来
      <template #footer>
        <vi-button>confirm</vi-button>
        <vi-button type="danger">cancel</vi-button>
      </template>
    </vi-drawer>
    <vi-drawer v-model="show4" title="Hi title" direction="b-t" :click-mask-close="false">
      从下出来
    </vi-drawer>
    <vi-drawer v-model="show5" title="外部" width="50%">
      <vi-button @click="show6 = true">打开嵌套</vi-button>
      <vi-drawer v-model="show6" append-to-body> 内部 </vi-drawer>
    </vi-drawer>
    <vi-drawer v-model="show7" title="Events" @open="open" @close="close" :before-close="beforeClose">
      打开与关闭事件
      <vi-button @click="show7 = false">直接改变 v-model 绑定值关闭</vi-button>
      <vi-dialog v-model="show" append-to-body title="确定关闭?" width="30%">
        Are you sure close the Dialog?
        <template #footer>
          <vi-button type="info" @click="cancel">取消</vi-button>
          <vi-button @click="confirm">确定</vi-button>
        </template>
      </vi-dialog>
    </vi-drawer>
    <vi-drawer v-model="show8" :mask="false">无遮罩层</vi-drawer>
  </div>
</template>

<style lang="scss">
.test {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>