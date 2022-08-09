<template>
  <div>{{ mainStore.info }}</div>
  <div>{{ mainStore.count }}</div>
  <div>{{ info }}</div>
  <div>{{ count }}</div>
  <h1>{{ mainStore.count10 }}</h1>

  <button @click="alertData">修改数据</button>
</template>
<script setup>
import { useMainStore } from "../store";
import { storeToRefs } from "pinia";
const mainStore = useMainStore();

const { count, info } = storeToRefs(mainStore);
const alertData = () => {
  mainStore.changeState();
  mainStore.changeStates(10);
};
</script>
<style lang="less" scoped></style>
