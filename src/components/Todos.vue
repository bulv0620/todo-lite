<script setup lang="ts">
import { reactive, toRefs, ref } from 'vue';
import { useTodo } from '../store';
import { useTheme } from '../store';

import { storeToRefs } from 'pinia';
import MenuVue from './Menu.vue';

const todoState = useTodo();

const showCollapseMenu = ref(false);

const { id, title, isLocked, todosNum, todoList } = storeToRefs(todoState);

const {mode} = storeToRefs(useTheme());

</script>

<template>
    <div class="todo-list-main" :class="mode">
        <div class="main-header" :class="mode">
            <div class="todo-title" :class="mode">
                <div class="txt">
                    <span class="icon-span iconfont icon-liebiao" @click="showCollapseMenu = !showCollapseMenu"></span>
                    <span class="title-span">{{ title }}</span>
                    <span class="num-span">{{ todosNum }}</span>
                </div>
                <div class="options">
                    <span @click="todoState.changeLockStatus">
                        <span v-if="isLocked" class="iconfont icon-suoding"></span>
                        <span v-else class="iconfont icon-jiesuo"></span>
                    </span>
                    <span class="iconfont icon-shanchu"></span>
                </div>
            </div>
            <div class="collapse-menu" :class="{ show: showCollapseMenu }">
                <menu-vue></menu-vue>
            </div>
            <div class="add-todo">
                <input class="add-todo-input" type="text" placeholder="请输入">
            </div>
        </div>
        <div class="main-content">

        </div>
    </div>
</template>

<style scoped lang="less">
.todo-list-main {
    width: 100%;
    height: 100%;
    background: #fff;
    transition: all .3s;

    &.dark {
        background: #262626;
    }

    .main-header {
        // height: 80px;
        background: linear-gradient(180deg, #d0edf5, #e1e5f0);
        transition: all .3s;

        &.dark{
            background: #3b3b3b;
        }

        .todo-title {
            padding: 0 18px;
            height: 45px;
            font-size: 18px;
            display: flex;
            justify-content: space-between;
            line-height: 45px;
            color: #1c3f53;
            transition: all .3s;

            &.dark{
                color: #fff;
            }

            .txt {
                font-weight: bold;

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
            height: 0;
            transition: all .3s;
            overflow: auto;

        }

        @media screen and (max-width: 768px) {
            .collapse-menu {
                &.show {
                    height: 360px;
                }
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

    .main-content {}


}
</style>
