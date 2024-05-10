import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
    state: () => ({
        sum:0
    })
})