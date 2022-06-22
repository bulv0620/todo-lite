<script setup lang="ts">
import { reactive, toRefs } from 'vue'

const menuState = reactive({
    menuList: [
        {
            id: 0,
            title: 'Sunday',
            isLocked: false,
            todosNum: 2
        },
        {
            id: 1,
            title: 'Monday',
            isLocked: false,
            todosNum: 3
        },
        {
            id: 2,
            title: 'Tuesday',
            isLocked: true,
            todosNum: 2
        },
        {
            id: 3,
            title: 'Wednesday',
            isLocked: true,
            todosNum: 5
        },
        {
            id: 4,
            title: 'Thursday',
            isLocked: false,
            todosNum: 2
        },
        {
            id: 5,
            title: 'Friday',
            isLocked: false,
            todosNum: 1
        },
        {
            id: 6,
            title: 'Saturday',
            isLocked: false,
            todosNum: 2
        },
    ],
    activeItemId: 0
})

const changeActiveItem: (id:number) => void = (id:number) => {
    menuState.activeItemId = id
}

const { menuList, activeItemId } = toRefs(menuState)

</script>

<template>
    <div class="todo-list-menu">
        <ul class="menu-list">
            <li class="menu-item" :class="{ active: activeItemId === menuItem.id }" v-for="menuItem in menuList"
                :key="menuItem.id" @click="changeActiveItem(menuItem.id)"
                >
                <span class="icon-span" :class="{show: menuItem.isLocked}">🔒</span> {{ menuItem.title }}
                <span class="num-span" :class="{active: activeItemId === menuItem.id}">{{menuItem.todosNum}}</span>
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
            color: hsla(0, 0%, 100%, .4);
            cursor: pointer;
            padding: 0 20px;
            
            .num-span{
                float: right;
                display: block;
                background: hsla(0,0%,100%,.1);
                margin-top: 14px;
                height: 20px;
                width: 20px;
                line-height: 20px;
                text-align: center;
                border-radius: 100%;
                font-size: 12px;

                &.active {
                    background: #2cc5e2;
                }

            }

            .icon-span{
                width: 30px;
                opacity: 0;

                &.show{
                    opacity: 1;
                }
            }

            &.active {
                color: #fff;
            }
        }
    }

}
</style>
