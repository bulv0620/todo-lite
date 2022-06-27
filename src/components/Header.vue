<script setup lang="ts">
import { ref } from 'vue';
import { useTodo } from '../store';
import { storeToRefs } from 'pinia';
import MenuVue from './Menu.vue';

const props = defineProps({
    mode: {
        type: String,
        default: 'light'
    }
})

// 隐藏折叠菜单
const showCollapseMenu = ref(false);

// todo状态信息
const todoStore = useTodo();

// 解构
const { activeMenuItem, todoList } = storeToRefs(todoStore);

// 修改标题
async function editTitle() {
    let newTitle: (string | null) = prompt('输入新的标题');
    if (newTitle !== null && newTitle !== "") {
        await todoStore.editMenuItem(<string>activeMenuItem.value.id, newTitle);
        await todoStore.getMenuList();
    }
}

// 添加新的代办
const newTodoText = ref('')
async function addTodoItem() {
    await todoStore.addTodoItem(newTodoText.value);
    await todoStore.getTodoList();
    newTodoText.value = ''
}

// 删除集合
async function removeMenuItem() {
    if (confirm('是否删除?')) {
        try {
            await todoStore.removeMenuItem(<string>activeMenuItem.value.id);
            await todoStore.getMenuList();
            await todoStore.getTodoList();
        } catch (error) {
            alert(error)
        }
    }
}
</script>

<template>
    <div class="todo-header" :class="mode">
        <div class="todo-title">
            <div class="txt">
                <span class="icon-span iconfont icon-liebiao" @click="showCollapseMenu = !showCollapseMenu"></span>
                <span class="title-span" @click="editTitle">{{ activeMenuItem.title }}</span>
                <span class="num-span">{{ todoList.length }}</span>
            </div>
            <div class="options">
                <!-- <span @click="todoState.changeLockStatus">
                    <span v-if="activeItem.isLocked" class="iconfont icon-suoding"></span>
                    <span v-else class="iconfont icon-jiesuo"></span>
                </span> -->
                <span class="iconfont icon-shanchu" @click="removeMenuItem()"></span>
            </div>
        </div>

        <div class="collapse-menu" :class="{ show: showCollapseMenu }">
            <menu-vue @click="showCollapseMenu = !showCollapseMenu"></menu-vue>
        </div>

        <div class="add-todo">
            <input class="add-todo-input" type="text" v-model="newTodoText" @keyup.enter="addTodoItem"
                placeholder="请输入">
        </div>
    </div>
</template>

<style scoped lang="less">
.todo-header.dark {
    background: #3b3b3b;

    .todo-title {
        color: #fff;

        .txt {
            .title-input {
                color: #fff;
            }
        }
    }

    .add-todo {
        .add-todo-input {
            color: #fff;
        }
    }
}

.todo-header {
    // height: 80px;
    background: linear-gradient(180deg, #6cdafb, #a9ccfa);
    transition: all .4s ease;


    .todo-title {
        padding: 0 18px;
        height: 45px;
        font-size: 18px;
        display: flex;
        justify-content: space-between;
        line-height: 45px;
        color: #1c3f53;
        transition: all .3s;

        .txt {
            font-weight: bold;

            .title-span {
                cursor: default;
            }

            // .title-input {
            //     // background: rgba(255, 255, 255, .1);
            //     background: none;
            //     // padding: 5px;
            //     border: none;
            //     outline: none;
            //     font-size: 18px;

            //     margin-right: 10px;
            // }

            .icon-span {
                display: none;
                margin-right: 14px;
            }

            @media screen and (max-width: 768px) {
                .icon-span {
                    display: inline;
                }
            }

            .num-span {
                // margin-left: 8px;
                color: #fff;
                float: right;
                display: block;
                background: #2cc5e2;
                margin-top: 14px;
                height: 20px;
                width: 20px;
                line-height: 20px;
                text-align: center;
                border-radius: 100%;
                font-size: 12px;
            }

            span {
                margin-right: 4px;
            }
        }

        .options {

            span {
                margin-left: 8px;
                cursor: pointer;
            }
        }
    }

    .collapse-menu {
        overflow: auto;
        transition: all .4s ease;
        height: 0;
        opacity: 0;

        &.show {
            height: calc(100vh - 108px);
            opacity: 1;
        }
    }

    .add-todo {
        height: 35px;
        display: flex;
        padding: 0 10px;

        .add-todo-input {
            outline: none;
            border: none;
            width: 100%;
            height: 100%;
            background: none;
            font-size: 14px;
            padding: 0 10px;
        }
    }
}
</style>
