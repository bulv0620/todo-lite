<script setup lang="ts">
import { reactive, toRefs } from 'vue';
import { useTodo } from '../store';
import { storeToRefs } from 'pinia';
import { watch } from 'fs';

const props = defineProps({
    txtColor: {
        type: String,
        default: 'hsla(0, 0%, 100%, .4)'
    },
    txtActiveColor: {
        type: String,
        default: '#fff'
    },
    showNum: {
        type: Boolean,
        default: false
    }
});

const todoStore = useTodo();

const { activeMenuIndex, menuList, todoList } = storeToRefs(todoStore);

// 添加集合
async function addMenuItem() {
    let menuTitle: (string | null) = prompt('输入新的分类的标题');
    if (menuTitle !== null && menuTitle !== "") {
        await todoStore.addMenuItem(menuTitle);
        await todoStore.getMenuList();
    }
}
</script>

<template>
    <div class="todo-list-menu">
        <ul class="menu-list">
            <li class="menu-item" @click="addMenuItem">
                <span class="new-menu">+ 新建集合</span>
            </li>
            <li class="menu-item" :class="{ active: activeMenuIndex === index }" v-for="(menuItem, index) in menuList"
                :key="menuItem.id" @click="todoStore.setActiveMenuIndex(index)">
                <span class="icon-span iconfont icon-suoding" :class="{ show: menuItem.isLocked }"></span> {{
                        menuItem.title
                }}
                <span v-if="showNum" class="num-span" :class="{ active: activeMenuIndex === index }">{{
                        menuItem.todoItemNum
                }}</span>
            </li>

        </ul>
    </div>
</template>

<style scoped lang="less">
.todo-list-menu {
    // padding-left: 50px;
    // padding-bottom: 10px;
    height: 100%;

    .menu-list {
        list-style: none;
        font-size: 16px;

        .menu-item {
            height: 48px;
            line-height: 48px;
            box-shadow: 0 1px 0 0 hsla(0, 0%, 100%, .15);
            color: v-bind(txtColor);
            cursor: pointer;
            padding: 0 20px;

            .num-span {
                float: right;
                display: block;
                background: hsla(0, 0%, 100%, .1);
                margin-top: 14px;
                height: 20px;
                width: 20px;
                line-height: 20px;
                text-align: center;
                border-radius: 100%;
                font-size: 12px;
                // color: #fff;

                &.active {
                    background: #2cc5e2;
                }

            }

            .icon-span {
                width: 30px;
                opacity: 0;

                &.show {
                    opacity: 1;
                }
            }

            .new-menu {
                padding-left: 6px;
                color: #fff;
            }

            &.active {
                color: v-bind(txtActiveColor);
            }
        }
    }

}
</style>
