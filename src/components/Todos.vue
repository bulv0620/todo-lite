<script setup lang="ts">
import { toRefs, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useTodo } from '../store/useTodo';

const props = defineProps({
    mode: {
        type: String,
        default: 'light'
    }
})

const todoStore = useTodo();

const { todoList } = storeToRefs(todoStore);

// 删除待办
async function removeTodoItem(id: string | undefined) {
    if (confirm('是否删除?')) {
        await todoStore.removeTodoItem(<string>id);
        await todoStore.getTodoList();
    }
}

// 修改待办内容
async function editTodo(id: string | undefined) {
    let newText: (string | null) = prompt('输入新的标题');
    if (newText !== null && newText !== "") {
        await todoStore.editTodoItem(newText, <string>id);
        await todoStore.getTodoList();
    }
}

// 修改待办的完成状态
async function doneTodoItem(id: string | undefined) {
    await todoStore.doneTodoItem(<string>id);
    await todoStore.getTodoList();
}
</script>

<template>
    <div class="todo-content" :class="mode">
        <ul>
            <li v-for="(todoItem, index) in todoList" :key="todoItem.id">
                <input type="checkbox" :checked="todoItem.isDone" @click="doneTodoItem(todoItem.id)">
                <span class="item-txt" :class="{ done: todoItem.isDone }" @click="editTodo(todoItem.id)">{{
                        todoItem.text
                }}</span>
                <span class="delete-item iconfont icon-shanchu" @click="removeTodoItem(todoItem.id)"></span>
                <!-- <div class="item-panel" style="height:30px;background: #fff;width: 100%;"></div> -->
            </li>
        </ul>

    </div>
</template>

<style scoped lang="less">
.todo-content.dark {
    background: #262626;

    ul {
        li {
            box-shadow: 0 1px 0 0 #404040;

            &:hover {
                background: #404040;
            }

            span {
                color: #b1b1b1;

                &.done {
                    color: #707070;
                }
            }
        }
    }

}

.todo-content {
    width: 100%;
    height: 100%;
    background: #fff;
    transition: all .4s;

    ul {
        list-style: none;

        li {
            // height: 46px;
            line-height: 46px;
            padding: 0 12px;
            box-shadow: 0 1px 0 0 #f5f5f5;
            transition: all .5s ease;
            position: relative;
            display: flex;

            &:hover {
                background: #f5f5f5;

                .delete-item {
                    display: block;
                }

                .item-txt {
                    word-break: keep-all;
                    white-space: unset;
                    overflow: hidden;
                    text-overflow: unset;
                }
            }



            input[type="checkbox"] {
                margin-right: 6px;
                // margin-top: 18px;
                // width: ;
            }

            .item-txt {
                color: #707070;
                font-size: 16px;
                transition: all .4s ease;
                display: block;
                word-break: keep-all;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                cursor: pointer;
                padding-top: 2px;
                padding-right: 10px;

                &.done {
                    color: #b1b1b1;
                    text-decoration: line-through;
                }
            }

            .delete-item {
                color: #ccc;
                position: absolute;
                right: 10px;
                font-size: 14px;
                padding-top: 1px;
                display: none;
            }
        }
    }
}
</style>
