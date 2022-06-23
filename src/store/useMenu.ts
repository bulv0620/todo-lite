import { defineStore } from "pinia";

export const useMenu = defineStore('menu', {
    state: () => {
        return {
            menuList: [
                {
                    id: 0,
                    title: 'Sunday',
                    isLocked: false,
                    todosNum: 2
                },
                {
                    id: 1,
                    title: 'Monday',
                    isLocked: false,
                    todosNum: 3
                },
                {
                    id: 2,
                    title: 'Tuesday',
                    isLocked: true,
                    todosNum: 2
                },
                {
                    id: 3,
                    title: 'Wednesday',
                    isLocked: true,
                    todosNum: 5
                },
                {
                    id: 4,
                    title: 'Thursday',
                    isLocked: false,
                    todosNum: 2
                },
                {
                    id: 5,
                    title: 'Friday',
                    isLocked: false,
                    todosNum: 1
                },
                {
                    id: 6,
                    title: 'Saturday',
                    isLocked: false,
                    todosNum: 2
                },
            ],
            activeItemId: 0
        }
    },

    getters: {

    },

    actions: {
        setActiveItemId(id: number):void {
            this.activeItemId = id
        }
    }
})