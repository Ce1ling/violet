<template>
  <vi-flex direction="column" gap="18px">
    <vi-row>
      <vi-button type="primary" loading> 加载状态1 </vi-button>
      <vi-button type="success" loading :is-prefix="false"> 加载状态2 </vi-button>
      <vi-button type="warning" loading> 
        加载状态3 
        <template #prefix>
          <vi-icon name="Close" size="16px" cursor="wait" loading />
        </template>
      </vi-button>
      <vi-button type="danger" loading :is-prefix="false">
        加载状态4 
        <template #suffix>
          <vi-icon name="Close" size="16px" cursor="wait" loading />
        </template>
      </vi-button>
    </vi-row>
    <vi-row>
      <vi-button type="primary" loading plain> 加载状态1 </vi-button>
      <vi-button type="success" loading :is-prefix="false" plain> 加载状态2 </vi-button>
      <vi-button type="warning" loading plain> 
        加载状态3 
        <template #prefix>
          <vi-icon name="Close" size="16px" cursor="wait" loading />
        </template>
      </vi-button>
      <vi-button type="danger" loading :is-prefix="false" plain>
        加载状态4 
        <template #suffix>
          <vi-icon name="Close" size="16px" cursor="wait" loading />
        </template>
      </vi-button>
    </vi-row>
  </vi-flex>
</template>