<script setup lang="ts">
import LayoutVue from './layout/Layout.vue';
import { useTheme } from './store';
import { storeToRefs } from 'pinia';

const {mode} = storeToRefs(useTheme())
</script>

<template>
    <div class="container" :class="mode">
        <layout-vue></layout-vue>
    </div>
</template>

<style lang="less">
.container {
    width: 100%;
    height: 100vh;
    color: #fff;
    background: linear-gradient(180deg, #658fc6, #b8b7b2);
    transition: all .3s;

    &.dark {
        background: #1a1a1a;
    }
}
</style>
