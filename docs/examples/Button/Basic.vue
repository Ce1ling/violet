<template>
  <vi-flex direction="column" gap="18px">
    <vi-row>
      <vi-button> 主要按钮 </vi-button>
      <vi-button type="success"> 成功按钮 </vi-button>
      <vi-button type="info"> 信息按钮 </vi-button>
      <vi-button type="warning"> 警告按钮 </vi-button>
      <vi-button type="danger"> 危险按钮 </vi-button>
    </vi-row>
    <vi-row>
      <vi-button plain> 主要按钮 </vi-button>
      <vi-button type="success" plain> 成功按钮 </vi-button>
      <vi-button type="info" plain> 信息按钮 </vi-button>
      <vi-button type="warning" plain> 警告按钮 </vi-button>
      <vi-button type="danger" plain> 危险按钮 </vi-button>
    </vi-row>
    <vi-row>
      <vi-button round> 主要按钮 </vi-button>
      <vi-button type="success" round> 成功按钮 </vi-button>
      <vi-button type="info" round> 信息按钮 </vi-button>
      <vi-button type="warning" round> 警告按钮 </vi-button>
      <vi-button type="danger" round> 危险按钮 </vi-button>
    </vi-row>
    <vi-row>
      <vi-button circle>
        <vi-icon name="Home" size="18px" />
      </vi-button>
      <vi-button type="success" circle>
        <vi-icon name="Check" size="18px" />
      </vi-button>
      <vi-button type="info" circle>
        <vi-icon name="Link" size="18px" />
      </vi-button>
      <vi-button type="warning" circle>
        <vi-icon name="WarningCircle" size="18px" />
      </vi-button>
      <vi-button type="danger" circle>
        <vi-icon name="Delete" size="18px" />
      </vi-button>
    </vi-row>
  </vi-flex>
</template>
