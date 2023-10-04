<script setup lang="ts">
import { ref } from 'vue'

import { Message } from '../../../packages/components/Message/index'

const selectValue1 = ref('')
const selectValue2 = ref(['Vue', 'React'])
const options = [
  { label: 'Vue', value: 'Vue' },
  { label: 'React', value: 'React' },
  { label: 'Svelte', value: 'Svelte' },
]

const inputValue = ref('一个输入框')

const checkboxVue = ref(true)
const checkboxReact = ref(false)
const checkboxSvelte = ref(false)

const switchValue1 = ref(true)
const switchValue2 = ref(true)

const transferValue = ref([])
const transferList = ref([
  { id: '0', label: 'Vue', checked: true, disabled: false },
  { id: '1', label: 'React', checked: true, disabled: false },
  { id: '2', label: 'Svelte', checked: false, disabled: false },
  { id: '3', label: 'Node.js', checked: false, disabled: false },
  { id: '4', label: 'Python', checked: false, disabled: true },
  { id: '5', label: 'Golang', checked: false, disabled: true },
  { id: '6', label: 'Next.js', checked: true, disabled: false },
  { id: '7', label: 'Nuxt.js', checked: false, disabled: false },
  { id: '8', label: 'Material Design', checked: false, disabled: false },
  { id: '9', label: 'Ant Design', checked: false, disabled: false },
])

const tabsValue = ref('Vue')

const drawerValue = ref(false)
</script>

<template>
  <div
    class="homepage"
    :class="{ rotate3d: switchValue2, 'rotate3d-hover': switchValue1 }"
  >
    <vi-alert title="Hi，欢迎您！">这里是 Violet 的组件概览</vi-alert>

    <vi-row align="center">
      <vi-button>一个按钮</vi-button>
      <vi-button type="warning" @click="drawerValue = true">
        打开一个弹窗
      </vi-button>
      <vi-dialog
        v-model="drawerValue"
        title="我是一个弹窗"
        :mask="false"
        movable
      >
        <p class="mt-1">一个可拖拽、无广告的弹窗</p>
      </vi-dialog>
      <vi-checkbox v-model="checkboxVue" label="Vue" />
      <vi-checkbox v-model="checkboxReact" label="React" />
      <vi-checkbox v-model="checkboxSvelte" label="Svelte" />
      <vi-switch
        v-model="switchValue1"
        on-text="移入"
        off-text="固定"
        is-inside
        :before-change="
          () => {
            if (!switchValue2) {
              Message.danger('锁定正面的情况下无需调节此开关')
            }
            return switchValue2
          }
        "
      />
      <vi-switch
        v-model="switchValue2"
        on-text="倾斜"
        off-text="正面"
        is-inside
      />
      <vi-tag closable type="danger" prefix="Left">
        {{ switchValue2 ? '锁定' : '解锁' }}此面板
      </vi-tag>
    </vi-row>

    <vi-input v-model="inputValue" clearable />

    <vi-row>
      <vi-select v-model="selectValue1" :options="options" class="grow-1" />
      <vi-select
        class="grow-1"
        v-model="selectValue2"
        :options="JSON.parse(JSON.stringify(options))"
        multiple
      />
    </vi-row>

    <vi-tabs v-model="tabsValue" :show-bar="false" center>
      <vi-tab name="Vue" label="Vue">Vue.js</vi-tab>
      <vi-tab name="React" label="React">React.js</vi-tab>
      <vi-tab name="Svelte" label="Svelte">Svelte.js</vi-tab>
    </vi-tabs>

    <vi-alert center="text"> 你正在学习什么？(可拖拽) </vi-alert>
    <vi-transfer
      class="transfer"
      v-model="transferValue"
      :list="transferList"
      :titles="['正在学习', '已经学会']"
      draggable
    />
  </div>
</template>

<style scoped lang="scss">
.homepage {
  position: fixed;
  right: 8px;
  top: 80px;
  padding: 10px;
  background-color: var(--doc-bg-color);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.3s;
  opacity: 0.66667;

  &:hover {
    opacity: 1;
    box-shadow: 0 0 18px 0 var(--doc-color-info);
  }

  .transfer > :deep(*) {
    flex-grow: 1;
  }
}

.rotate3d {
  transform: perspective(600px) rotate3d(0, -1, 0, 35deg) translateX(-30px);
}

.rotate3d-hover:hover {
  transform: none;
}

/* fake Tailwind */
.self-center {
  align-self: center;
}

.grow-1 {
  flex-grow: 1;
}

.font-bold {
  font-weight: bold;
}

.mt-1 {
  margin-top: 1rem;
}
</style>
