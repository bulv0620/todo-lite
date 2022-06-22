<script setup lang="ts">
import { reactive, toRefs } from 'vue'

const todoState = reactive({
    id: 0,
    title: 'Sunday',
    isLocked: false,
    todosNum: 2
})
const { id, title, isLocked, todosNum } = toRefs(todoState)

const changeLockState: () => void = () => {
    isLocked.value = !isLocked.value
}

</script>

<template>
    <div class="todo-list-main">
        <div class="main-header">
            <div class="todo-title">
                <div class="txt">
                    <span class="icon-span">📃</span>
                    <span class="title-span">{{ title }}</span>
                    <span class="num-span">{{ todosNum }}</span>
                </div>
                <div class="options">
                    <span @click="changeLockState">
                        <span v-if="isLocked">🔒</span>
                        <span v-else>🔓</span>
                    </span>
                    <span>🚮</span>
                </div>
            </div>
            <div class="add-todo">
                <!-- <span class="icon-span">+</span> -->
                <input class="add-todo-input" type="text" placeholder="请输入">
            </div>
        </div>
        <div class="main-content"></div>
    </div>
</template>

<style scoped lang="less">
.todo-list-main {
    width: 100%;
    height: 100%;
    background: #fff;

    .main-header {
        height: 80px;
        background: linear-gradient(180deg, #d0edf5, #e1e5f0);

        .todo-title {
            padding: 0 18px;
            height: 45px;
            font-size: 18px;
            display: flex;
            justify-content: space-between;
            line-height: 45px;

            .txt {
                font-weight: bold;
                color: #1c3f53;

                .icon-span {
                    display: none;
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
                    margin-left: 4px;
                    cursor: pointer;
                }
            }
        }

        .add-todo {
            height: 35px;
            display: flex;
            padding: 0 10px;

            .icon-span {
                font-size: 12px;
                font-weight: bold;
                color: #9a9a9a;
                text-align: center;
                height: 12px;
                width: 12px;
                margin-left: 20px;
                margin-top: 9px;
                line-height: 9px;
                border: #9a9a9a 2px solid;
                border-radius: 100%;
            }

            .add-todo-input {
                outline: none;
                border: none;
                width: 100%;
                height: 100%;
                background: none;
                font-size: 14px;
                color: #1c3f53;
                padding: 0 10px;
            }
        }
    }
}
</style>
