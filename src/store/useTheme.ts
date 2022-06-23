import { defineStore } from "pinia";

export const useTheme = defineStore('theme', {
    state: () => {
        return {
            mode: 'light'
        }
    },

    actions: {
        changeMode() {
            this.mode = this.mode === 'light' ? 'dark' : 'light';
        }
    }
})