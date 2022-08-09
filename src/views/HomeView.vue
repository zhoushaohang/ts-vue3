<template>
  <HelloWorld></HelloWorld>
  <div style="display: flex">
    <a-menu
      id="dddddd"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 256px;margin-top: 30px;
}"
      mode="inline"
    >
      <a-sub-menu key="sub1">
        <template #icon> </template>
        <template #title>新闻管理中心</template>
        <a-menu-item-group key="g1">
          <template #icon> </template>
          <a-menu-item key="1"
            ><router-link to="/JanKang">栏目</router-link></a-menu-item
          >
          <a-menu-item key="2"
            ><router-link to="/NewsGuanli">内容</router-link></a-menu-item
          >
          <a-menu-item key="3"
            ><router-link to="/XinWen">新闻管理中心</router-link>
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon> </template>
        <template #title>表单管理</template>
        <a-menu-item key="5">
          <router-link to="/NeiRong"> 表单内容管理</router-link></a-menu-item
        >
        <a-menu-item key="6">表单详情管理</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <template #icon> </template>
        <template #title>用户管理</template>
        <a-menu-item key="9">
          <router-link to="/GuanLi">管理员权限</router-link>
        </a-menu-item>
        <a-menu-item key="10">用户权限</a-menu-item>
      </a-sub-menu>
    </a-menu>
    <div class="ide"><router-view></router-view></div>
  </div>
</template>
<script lang="ts" setup>
import HelloWorld from "../components/HelloWorld.vue";
import { ref } from "vue";

const selectedKeys = ref<string[]>(["1"]);
const openKeys = ref<string[]>(["sub1"]);
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
.ide {
  margin-top: 30px;
  margin-left: 20px;
}
</style>
