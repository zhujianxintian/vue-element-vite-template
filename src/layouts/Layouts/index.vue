<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import HeaderView from '../Header/index.vue';
import AsideView from '../Aside/index.vue';

const route = useRoute();

// TODO: 后期如果时间, 那么可以把菜单栏、tab、通知等等组件自己实现, 或者做个中间兼容层也可以, 后期自己可以替换其他组件库或者替换不了就自己写
// 然后就可以实现基本布局不依赖组件库, 只有页面会依赖组件库
</script>

<template>
    <el-container class="layout-container">
        <el-aside class="'layout-aside'">
            <AsideView />
        </el-aside>
        <el-container class="layout-main-container">
            <el-scrollbar class="layout-main-scrollbar" view-class="layout-main-scrollbar-view">
                <el-header class="layout-main-header">
                    <HeaderView />
                </el-header>
                <el-main class="layout-main-content">
                    <RouterView :key="route.path" #default="view">
                        <transition name="fade-transform" mode="out-in">
                            <component :is="view.Component" />
                        </transition>
                    </RouterView>
                </el-main>
            </el-scrollbar>
        </el-container>
    </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
    --header-height: 60px;
    height: 100%;
}

.layout-aside {
    --el-aside-width: 200px;
    height: 100%;
    transition: width var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);
    // 不能用 collapse, 因为还有别的地方定义了全局的 collapse, 会导致 visibility: collapse !important; 出现
    // 所以使用 collapsed
    // 发现是 tailwind css 里面的
    &.collapsed {
        --el-aside-width: 64px;
    }
}

.layout-main-container {
    width: 100%;
}

.layout-main-scrollbar {
    width: 100%;
}

:deep(.layout-main-scrollbar-view) {
    height: 100%;
}

// 覆写样式
.layout-main-header {
    position: sticky;
    top: 0;
    height: var(--header-height);
    padding: 0;
    // 1. 必须小于 element 的最小 z-index 2000, 否则会显示在弹窗、抽屉、遮罩层上面
    // 2. 必须小于 mavon-editor 全屏模式下的 z-index 1501
    z-index: 1500;
    background: white;
}

.layout-main-content {
    height: calc(100% - var(--header-height));
}
</style>
