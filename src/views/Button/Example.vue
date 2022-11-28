<script setup lang="ts">
import { ref } from 'vue'

type Props = {
  anchor: string
  code: string
}
const props = withDefaults(defineProps<Props>(), {
})

const isExample = ref(true)

</script>

<template>
  <section class="example-wrap">
    <h1 class="title">
      <a :href="`#${anchor}`" :id="anchor">{{ anchor }}</a>
    </h1>
    <p class="desc">
      <slot name="desc"></slot>
    </p>
    <div class="example-container">
      <div class="tabs-wrap">
        <div 
          class="tab-item" 
          :class="{ active: isExample }" 
          @click="isExample = true">
          示例
        </div>
        <div 
          class="tab-item" 
          :class="{ active: !isExample }" 
          @click="isExample = false">
          代码
        </div>
      </div>
      <div class="example" v-show="isExample">
        <slot name="example"></slot>
      </div>
      <div class="code" v-show="!isExample">
        <pre>{{ code }}</pre>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.active {
  background-color: var(--primary-color) !important;
  color: #fff !important;
}

.example-wrap {
  .title {
    margin-top: 50px;
    > a {
      color: #666;
      font-size: 28px;
      position: relative;
      &:hover {
        color: #000;
        &::before {
          content: '#';
          position: absolute;
          top: 0;
          left: -20px;
        }
      }
    }
  }
  .desc {
    line-height: 28px;
  }
  .example-container {
    border: 1px solid #ddd;
    border-radius: 5px;
    .tabs-wrap {
      display: flex;
      justify-content: center;
      gap: 5px;
      padding: 4px 0;
      background-color: #eeeeee;
      .tab-item {
        cursor: pointer;
        border-radius: 5px;
        padding: 5px 10px;
      }
    }
    .example {
      padding: 20px;
    }
    .code {
      padding: 20px;
      background-color: #fcf8ff;
    }
  }
}
</style>