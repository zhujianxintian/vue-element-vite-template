<script lang="ts" setup>
import { type RouteRecordRaw } from 'vue-router';
import { iconMap } from '@/plugins/icons';
import { resolvePath } from '@/utils/path';

interface IProps {
    navigation: RouteRecordRaw;
}

const props = defineProps<IProps>();

const hasOnlyChild = (route: RouteRecordRaw) => {
    return route.children?.length === 0 || route.children?.length === 1;
};
</script>

<template>
    <template v-if="!props.navigation.meta?.hidden">
        <el-menu-item
            v-if="hasOnlyChild(props.navigation)"
            :index="resolvePath(props.navigation.path, props.navigation.children?.[0].path ?? '')"
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
            <el-menu-item
                v-for="subNavigation in props.navigation.children"
                :key="subNavigation.path"
                :index="resolvePath(navigation.path, subNavigation.path)"
            >
                <template #title>
                    <el-icon v-if="subNavigation.meta?.icon">
                        <component :is="iconMap[subNavigation.meta.icon as string]" />
                    </el-icon>
                    <span>{{ subNavigation.meta?.title }}</span>
                </template>
            </el-menu-item>
        </el-sub-menu>
    </template>
</template>

<style lang="scss"></style>
