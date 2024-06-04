import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import pinia from '@/stores';
import router from './index';
import Token from '@/constants/token';
import { ElMessage } from 'element-plus';

nProgress.configure({ showSpinner: false });

router.beforeEach(async (to, from, next) => {
    nProgress.start();

    // if (!token) {
    //     if (permissionStore.whiteList.includes(to.path)) {
    //         next();
    //         return;
    //     }

    //     userStore.logout();
    //     next({ path: authorize, query: { redirect: to.fullPath } });
    //     nProgress.done();
    //     return;
    // }

    // if (to.path === authorize) {
    //     // if is logged in, redirect to the home page
    //     next({ path: home });
    //     // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
    //     nProgress.done();
    //     return;
    // }

    // const hasRoles = userStore.userInfo?.roles.length ?? 0 > 0;

    // if (!hasRoles) {
    //     try {
    //         const userInfo = await userStore.getUserInfo();

    //         if (!userInfo) {
    //             await userStore.resetToken();
    //             userStore.logout();
    //             nProgress.done();
    //             return;
    //         }

    //         const roles = userInfo.roles;

    //         console.log('roles', roles);

    //         const accessedRoutes = await permissionStore.generateRoutes(roles, userInfo.permissions);
    //         // accessedRoutes.forEach((route) => router.addRoute(route));
    //         // errorRoutes.forEach((route) => router.addRoute(route));
    //         next({ ...to, replace: true });
    //         return;
    //     } catch (error) {
    //         console.error(error);
    //         ElMessage.error(error || 'Has Error');
    //     }
    // }

    next();
});

router.afterEach((to, from, failure) => {
    nProgress.done();
});
