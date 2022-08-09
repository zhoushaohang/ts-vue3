<template>
  <div>{{ info }}</div>
  <div>{{ count }}</div>
</template>
<script setup>
import { useMainStore } from "../store";
import { storeToRefs } from "pinia";
const mainStore = useMainStore();
const { count, info } = storeToRefs(mainStore);
</script>
<style lang="less" scoped></style>
