<script name="MenuItem" lang="ts" setup>
import { type RouteRecordRaw } from 'vue-router';
import { iconMap } from '@/plugins/icons';
import { resolvePath } from '@/utils/path';

interface IProps {
    parentPath?: string;
    navigation: RouteRecordRaw;
}

const props = defineProps<IProps>();

const hasOnlyChild = (route: RouteRecordRaw) => {
    return !route.children || route.children?.length === 0 || route.children?.length === 1;
};
</script>

<template>
    <template v-if="!props.navigation.meta?.hidden">
        <el-menu-item
            v-if="hasOnlyChild(props.navigation)"
            :index="resolvePath(props.parentPath ?? '', props.navigation.path)"
        >
            <template #title>
                <el-icon v-if="props.navigation.meta?.icon">
                    <component :is="iconMap[props.navigation.meta.icon as string]" />
                </el-icon>
                <span>{{ props.navigation.meta?.title }}</span>
            </template>
        </el-menu-item>
        <el-sub-menu v-else :index="props.navigation.path">
            <template #title>
                <el-icon v-if="props.navigation.meta?.icon">
                    <component :is="iconMap[props.navigation.meta.icon as string]" />
                </el-icon>
                <span>{{ props.navigation.meta?.title }}</span>
            </template>
            <MenuItem
                v-for="subNavigation in props.navigation.children"
                :key="subNavigation.path"
                :parent-path="resolvePath(props.parentPath ?? '', props.navigation.path)"
                :navigation="subNavigation"
            />
        </el-sub-menu>
    </template>
</template>

<style lang="scss"></style>

<script lang="ts">
export default {
    name: 'MenuItem',
};
</script>

<style lang="scss" scoped>
.root {
    --el-menu-item-font-size: 18px;
}
</style>
