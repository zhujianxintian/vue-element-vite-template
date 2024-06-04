<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MenuItem from './components/MenuItem/index.vue';

const route = useRoute();

const routes: any[] = [];

const activeMenu = computed(() => {
    const { meta, path } = route;
    // if set path, the sidebar will highlight the path you set
    if (meta.activeMenu) {
        return meta.activeMenu as string;
    }
    return path;
});
</script>

<template>
    <el-scrollbar view-class="aside-scroll-view">
        <el-menu class="aside-menu" router :default-active="activeMenu">
            <template v-for="navigation in routes" :key="navigation.path">
                <MenuItem :navigation="navigation"></MenuItem>
            </template>
        </el-menu>
    </el-scrollbar>
</template>

<style lang="scss">
.aside-scroll-view {
    width: auto;
    height: 100%;
}

.aside-menu {
    --el-menu-bg-color: rgb(48, 65, 86);
    --el-menu-bg-color: rgb(48, 65, 86);
    --el-menu-hover-bg-color: rgba(0, 0, 0, 0.06);
    --el-menu-text-color: white;
    --el-menu-active-text-color: var(--el-color-primary);
    // width: var(--el-aside-width);
    height: 100%;
}
</style>
