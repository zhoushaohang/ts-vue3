import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      info: "pinia 可以使用",
      count: 10,
    };
  },
  getters: {
    count10(state) {
      return (state.count += 1);
    },
  },
  actions: {
    changeState() {
      this.count += 10;
      this.info = "actions ";
    },
    changeStates(num: number) {
      this.count + num + 1;
      this.info = "actions 修改时数据";
    },
  },
});
