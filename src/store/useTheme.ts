import { defineStore } from "pinia";

export const useTheme = defineStore('theme', {
    state: () => {
        return {
            mode: localStorage.getItem('theme') || 'light'
        }
    },

    actions: {
        changeMode() {
            this.mode = this.mode === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', this.mode)
        }
    }
})