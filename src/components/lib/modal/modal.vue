<script setup lang="ts">
</script>

<template>
    <teleport to="body">
        <div class="modal-panel">
            <div class="modal-header"></div>
            <div class="modal-content"></div>
            <div class="modal-footer"></div>
        </div>
    </teleport>
</template>

<style scoped lang="less">
.modal-panel{
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, .6);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
}
</style>
