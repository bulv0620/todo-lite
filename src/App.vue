<script setup lang="ts">
import LayoutVue from './layout/Layout.vue';
</script>

<template>
    <div class="container">
        <layout-vue></layout-vue>
    </div>
</template>

<style lang="less">
.container {
    width: 100%;
    height: 100vh;
    color: #fff;
    // light
    background: linear-gradient(180deg, #658fc6, #b8b7b2);
    // dark
    // background: #1a1a1a;
}
</style>
