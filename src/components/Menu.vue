<script setup lang="ts">
import { reactive, toRefs } from 'vue';
import {useMenu} from '../store';
import { storeToRefs } from 'pinia';

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

const menuState = useMenu();
const {activeItemId, menuList} = storeToRefs(menuState)

</script>

<template>
    <div class="todo-list-menu">
        <ul class="menu-list">
            <li class="menu-item" :class="{ active: activeItemId === menuItem.id }" v-for="menuItem in menuList"
                :key="menuItem.id" @click="menuState.setActiveItemId(menuItem.id)">
                <span class="icon-span iconfont icon-suoding" :class="{ show: menuItem.isLocked }"></span> {{
                        menuItem.title
                }}
                <span v-if="showNum" class="num-span" :class="{ active: activeItemId === menuItem.id }">{{ menuItem.todosNum }}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="less">
.todo-list-menu {
    // padding-left: 50px;

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

            &.active {
                color: v-bind(txtActiveColor);
            }
        }
    }

}
</style>
