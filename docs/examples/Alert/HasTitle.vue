<template>
  <vi-flex direction="column" gap="18px">
    <vi-alert closable title="这是标题"> 这是内容 </vi-alert>
    <vi-alert type="success" closable pre-icon title="携带图标"> 图标会被放大 </vi-alert>
    <vi-alert type="info" closable pre-icon title="仅包含标题" />
    <vi-alert type="warning" closable pre-icon title="自闭合" content="使用 content 定义内容" />
  </vi-flex>
</template>