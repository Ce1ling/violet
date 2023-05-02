<template>
  <vi-row gap="28px">
    <vi-link type="success" href="#"> 
      <template #prefix>
        <vi-icon name="Plus" />
      </template>
      violet
    </vi-link>
    <vi-link type="danger" href="#"> 
      violet
      <template #suffix>
        <vi-icon name="Minus" />
      </template>
    </vi-link>
    <vi-link type="success" href="#"  disabled> 
      <template #prefix>
        <vi-icon name="Plus" cursor="inherit" />
      </template>
      violet
    </vi-link>
    <vi-link type="danger" href="#"  disabled> 
      violet
      <template #suffix>
        <vi-icon name="Minus" cursor="inherit" />
      </template>
    </vi-link>
  </vi-row>
</template>