<script setup lang="ts">
import TodosVue from '../components/Todos.vue';
import MenuVue from '../components/Menu.vue';
import HeaderVue from '../components/Header.vue';

import { useTheme, useTodo } from '../store';
import { storeToRefs } from 'pinia';
import { onBeforeMount, onMounted } from 'vue';

const themeStore = useTheme();
const { mode } = storeToRefs(themeStore);

const todoStore = useTodo();

onBeforeMount(async () => {
    await todoStore.getMenuList();
    await todoStore.getTodoList();
})
</script>

<template>
    <div class="container" :class="mode">
        <div class="layout">
            <button class="mode-btn" @click="themeStore.changeMode">
                <span class="sun iconfont icon-taiyang" :class="{ active: mode === 'light' }"></span>
                <span class="moon iconfont icon-yueliang" :class="{ active: mode === 'dark' }"></span>
            </button>
            <div class="menu h">
                <menu-vue :showNum="true"></menu-vue>
            </div>
            <div class="main h">
                <div class="header">
                    <header-vue :mode="mode"></header-vue>
                </div>
                <div class="content">
                    <todos-vue :mode="mode"></todos-vue>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.container.dark {
    background: #1a1a1a;

    .layout {
        // .mode-btn {
        //     background: #262626;
        // }

        .main {
            background: #262626;
        }
    }
}

.container {
    width: 100%;
    height: 100vh;
    color: #fff;
    background: linear-gradient(180deg, #658fc6, #b8b7b2);
    transition: all .4s ease;

    .layout {
        padding: 14px 10%;
        display: grid;
        grid-template-columns: 1fr 3fr;

        .mode-btn {
            position: absolute;
            bottom: 24px;
            right: 24px;
            width: 46px;
            height: 46px;
            z-index: 98;
            border: none;
            outline: none;
            background: none;
            transition: all .4s ease;
            overflow: hidden;

            span {
                font-size: 36px;
                position: absolute;
                transition: all .4s ease;

                &.moon {
                    color: yellow;
                    top: 92px;
                    left: 6px;
                    opacity: 0;
                }

                &.sun {
                    color: rgb(232, 203, 149);
                    top: 92px;
                    left: 6px;
                    opacity: 0;
                }

                &.active {
                    top: 0;
                    opacity: 1;
                }

            }
        }

        .h {
            height: calc(100vh - 28px);
            overflow: auto;
        }

        // .menu {
        //     background: #fff;
        // }

        .main {
            background: #fff;
            position: relative;
            transition: all .4s ease;

            .header {
                height: 80px;
                width: 100%;
                position: sticky;
                top: 0;
                z-index: 99;
            }

            .content {
                height: auto;
                // margin-top: 80px;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .container {

        .layout {
            grid-template-columns: none;
            padding: 14px;

            .menu {
                display: none;
            }

            .menu-top {
                display: block;
                background: #ffffff30;
            }
        }
    }
}

@media screen and (max-width: 992px) {
    .container {
        .layout {
            padding: 14px;
        }
    }
}
</style>
