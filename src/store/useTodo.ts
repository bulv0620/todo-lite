import { defineStore } from "pinia";

export interface IMenuItem {
    id: number,
    title: string,
    isLocked: boolean,
    todoList: Array<ITodoItem>
}

export interface ITodoItem {
    id: number,
    text: string,
    isDone: boolean
}

export const useTodo = defineStore('todo', {
    state: () => {
        return {
            menuList: JSON.parse(<string>localStorage.getItem('menuList')) || [
                {
                    id: 0,
                    title: '新建的分类',
                    isLocked: false,
                    todoList: [
                        {
                            id: 0,
                            text: '新建的待办事项',
                            isDone: false
                        }
                    ]
                }
            ],
            activeItemIndex: 0,
            
        }
    },

    getters: {
        activeItem: (state) => state.menuList[state.activeItemIndex],
    },

    actions: {
        changeLockStatus(): void {
            this.activeItem.isLocked = !this.activeItem.isLocked;
        },

        setActiveItemIndex(index: number): void {
            this.activeItemIndex = index
        },

        addTodoItem(text: string): void {
            const id = this.activeItem.todoList.length;
            const isDone = false;
            this.activeItem.todoList.push({
                id,
                isDone,
                text
            });
            this.save();
        },

        addMenuItem(title: string): void {
            const id = this.menuList.length;
            const isLocked = false;
            const todoList = [];
            this.menuList.push({
                id,
                isLocked,
                todoList,
                title
            });
            this.save()
        },

        removeTodoItem(index: number): void {
            this.activeItem.todoList.splice(index, 1);
            this.save()
        },

        removeMenuItem(): boolean {
            if(this.menuList.length < 2){
                return false;
            }
            this.menuList.splice(this.menuList.findIndex((e) => e === this.activeItem), 1);
            this.activeItemIndex = 0; 
            this.save();
            return true;
        },

        save(): void {
            localStorage.setItem('menuList', JSON.stringify(this.menuList))
        }
    }
})