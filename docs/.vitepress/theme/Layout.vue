<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout />

  <!-- <HeaderNav />
  <main class="main-body">
    <nav class="nav-wrap">
      <ul class="nav-list">
        <li class="nav-item" 
          v-for="(item, i) in list" :key="item.id"
          @click="handleRouterPush(item, i)">
          <p :class="{ 
            active: (active === i) && (item.type !== 'title'),
            [item.type]: item.type
          }">
            {{ item.title }}
          </p>
        </li>
      </ul>
    </nav>
    <section class="doc-content-wrap">
      <Layout />
      <Content />
      <footer class="footer-wrap">
        <ul class="footer-list">
          <h1>链接</h1>
          <li class="footer-item" v-for="item in links" :key="item.id">
            <a :href="item.link" target="_blank">{{ item.title }}</a>
          </li>
        </ul>
      </footer>
    </section>
  </main> -->
</template>

<style scoped lang="scss">
$scorll-wh: 4px;

.active {
  background-color: var(--primary-color) !important;
  color: #fff;
}
.title {
  font-size: 18px !important;
  font-weight: 600 !important;
  padding: 10px 0;
  &:hover { color: var(--primary-color); }
}
.component {
  margin: 5px 0;
  padding: 10px 20px;
  border-radius: var(--border-radius);
  &:hover { background-color: #ddd; }
}

.nav-wrap {
  max-width: 300px;
  color: var(--font-color);
  border-right: 1px solid #ddd;
  .nav-list {
    padding: 20px;
    position: sticky;
    top: var(--header-height);
    height: calc(100vh - var(--header-height));
    overflow: hidden;
    transition: none;
    user-select: none;
    &::-webkit-scrollbar { 
      width: $scorll-wh; 
      height: $scorll-wh; 
    }
    &:hover { 
      overflow-y: auto; 
      padding-right: calc(20px - $scorll-wh);
    }
    .nav-item { 
      cursor: pointer;
      > p { transition: all var(--animation-duration); }
    }
  }
}


.main-body {
  display: flex;
  .doc-content-wrap {
    display: flex;
    flex-direction: column;
    flex: 10;
  }
}
.go-top-wrap {
  user-select: none;
  position: fixed;
  right: 100px;
  bottom: 100px;
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 10px;
  cursor: pointer;
  &:hover { background-color: #ddd; }
}


.footer-wrap {
  padding: 50px;
  background-color: #eee;
  .footer-list {
    h1 { 
      font-size: 16px; 
      margin-bottom: 14px;
    }
    .footer-item {
      margin: 8px 0;
      a { 
        color: var(--font-color);
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
}
</style>