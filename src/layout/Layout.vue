<script setup lang="ts">
import TodosVue from '../components/Todos.vue';
import MenuVue from '../components/Menu.vue';

import { useTheme } from '../store';

const themeState = useTheme();

</script>

<template>
    <button @click="themeState.changeMode">change</button>
    <div class="layout">
        <div class="menu h">
            <menu-vue :showNum="true"></menu-vue>
        </div>
        <div class="main h">
            <todos-vue></todos-vue>
        </div>
    </div>
</template>

<style scoped lang="less">
.layout {
    padding: 14px 10%;
    display: grid;
    grid-template-columns: 1fr 3fr;

    .h{
        height: calc(100vh - 28px);
        overflow: auto;
    }

    // .menu {
    //     background: #fff;
    // }

    .menu-top{
        display: none;
    }

    // .main{
    //     background: #fff;
    // }
}

@media screen and (max-width: 768px){
    .layout{
        grid-template-columns: none;
        padding: 14px;
        .menu{
            display: none;
        }

        .menu-top{
            display: block;
            background: #ffffff30;
        }
    }
}

@media screen and (max-width: 992px){
    .layout{
        padding: 14px;
    }
}

</style>
