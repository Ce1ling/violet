<script setup lang="ts">
import { Message } from '../../../packages/components/Message'

const handleClick = (type: string, position: string) => {
  Message({
    type,
    position,
    content: `${type} Message 提示`,
  })
}
</script>

<template>
  <vi-row>
    <vi-button @click="handleClick('primary', 't-m')">默认</vi-button>
    <vi-button type="success" @click="handleClick('success', 't-l')">左上</vi-button>
    <vi-button type="success" @click="handleClick('success', 't-r')">右上</vi-button>
    <vi-button type="warning" @click="handleClick('warning', 'b-l')">左下</vi-button>
    <vi-button type="danger" @click="handleClick('danger', 'b-m')">中下</vi-button>
    <vi-button type="danger" @click="handleClick('danger', 'b-r')">右下</vi-button>
  </vi-row>
</template>