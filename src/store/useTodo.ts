import { defineStore } from "pinia";

export const useTodo = defineStore('todo', {
    state: () => {
        return {
            id: 0,
            title: 'Sunday',
            isLocked: false,
            todosNum: 2,
            todoList: []
        }
    },

    getters: {

    },

    actions: {
        changeLockStatus() {
            this.isLocked = !this.isLocked;
        }
    }
})