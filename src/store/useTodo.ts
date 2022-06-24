import { defineStore } from "pinia";

interface menuItem {
    id: number,
    title: string,
    isLocked: boolean,
    todoList: Array<todoItem>
}

interface todoItem {
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
            activeItemId: 0
        }
    },

    getters: {
        activeItem: (state) => state.menuList[state.activeItemId],
    },

    actions: {
        changeLockStatus(): void {
            this.menuList[this.activeItemId].isLocked = !this.menuList[this.activeItemId].isLocked;
        },

        setActiveItemId(id: number): void {
            this.activeItemId = id
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

        removeMenuItem(): void {
            this.menuList.splice(this.menuList.findIndex((e) => e === this.activeItem), 1);
            this.activeItemId = 0; 
            this.save();
        },

        save(): void {
            localStorage.setItem('menuList', JSON.stringify(this.menuList))
        }
    }
})