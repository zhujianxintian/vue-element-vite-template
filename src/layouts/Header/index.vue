<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { Fold, Expand } from '@element-plus/icons-vue';
import useUserStore from '@/stores/modules/user';

const route = useRoute();

const router = useRouter();

const userStore = useUserStore();

const handleRedirectUserInfo = () => {};

const handleVisibleEditPasswordModal = () => {};

const handleLogout = async () => {
    await userStore.logout();
    router.push({ path: `/sign-in`, query: { redirect: route.fullPath } });
};
</script>

<template>
    <div class="header-container">
        <div class="header-menu">
            <el-dropdown>
                <el-avatar :src="userStore.userInfo?.avatar"></el-avatar>
                <div class="ml-[20px]">{{ userStore.userInfo?.nickname }}</div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handleRedirectUserInfo">用户信息</el-dropdown-item>
                        <el-dropdown-item @click="handleVisibleEditPasswordModal">重置密码</el-dropdown-item>
                        <el-dropdown-item divided @click="handleLogout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<style lang="scss">
// @use '@/styles/variable/shadow.scss' as shadow;

.header-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    // box-shadow: shadow.$shadow-mini;
}

.header-toggle-sidebar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
}

.header-menu {
    margin-left: auto;
    margin-right: 30px;
}
</style>
