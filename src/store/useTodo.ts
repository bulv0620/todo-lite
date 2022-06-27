import { defineStore, getActivePinia } from "pinia";
import { IMenuItem, ITodoItem } from '../types'
import * as api from '../api'

export const useTodo = defineStore('todo', {
    state: () => {
        return {
            menuList: [] as IMenuItem[],
            todoList: [] as ITodoItem[],
            activeMenuIndex: 0 as number,
        }
    },

    getters: {
        activeMenuId: (state) => state.menuList[state.activeMenuIndex].id || '',
        activeMenuItem: (state) => state.menuList[state.activeMenuIndex] || {}
    },

    actions: {
        // changeLockStatus(): void {

        // },

        // 获取集合列表
        async getMenuList() {
            const res = await api.reqGetMenuList();
            if (res.code === 0) {
                this.menuList = res.data || [];
                console.log(res.message, res.data);
            }
        },

        // 设置活跃的集合
        setActiveMenuIndex(index: number) {
            this.activeMenuIndex = index;
            this.getTodoList();
        },

        // 添加集合
        async addMenuItem(title: string) {
            const res = await api.reqAddMenuItem({ title });
            if (res.code === 0) {
                console.log(res.message);
            }
        },

        // 删除集合
        async removeMenuItem(id: string) {
            const res = await api.reqRemoveMenuItem({ id });
            if (res.code === 0) {
                console.log(res.message);
                this.activeMenuIndex = 0;
            }
            else {
                return Promise.reject(res.message);
            }
        },

        // 修改集合的名字
        async editMenuItem(id: string, title: string) {
            const res = await api.reqEditMenuItem({ id, title });
            if (res.code === 0) {
                console.log(res.message);
            }
        },

        // 获取集合的待办事项列表
        async getTodoList() {
            const res = await api.reqGetTodoList({ belongTo: this.activeMenuId });
            if (res.code === 0) {
                this.todoList = res.data || [];
            }
        },

        // 添加待办事项
        async addTodoItem(text: string) {
            const res = await api.reqAddTodoItem({ text, belongTo: this.activeMenuId });
            if (res.code === 0) {
                console.log(res.message);
            }
        },

        // 修改待办事项内容
        async editTodoItem(text: string, id: string) {
            const res = await api.reqEditTodoItem({ text, id });
            if (res.code === 0) {
                console.log(res.message);
            }
        },

        // 删除待办事项
        async removeTodoItem(id: string) {
            const res = await api.reqRemoveTodoItem({ id });
            if (res.code === 0) {
                console.log(res.message);
            }
        },

        // 修改完成状态
        async doneTodoItem(id: string) {
            const res = await api.reqDoneTodoItem({ id });
            if (res.code === 0) {
                console.log(res.message);
            }
        }


    }
})