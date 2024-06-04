import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

interface RouteModule {
    default: RouteRecordRaw[];
}

const routeModules: Record<string, RouteModule> = import.meta.glob('./modules/*.ts', { eager: true });

console.log('routeModules', routeModules);

const routes = Object.values(routeModules).flatMap((module) => module.default, 1);

const constantsRoutes: RouteRecordRaw[] = [
    {
        path: '/sign-in',
        name: 'sign-in',
        meta: {
            title: '登录',
        },
        component: () => import('@/views/Authorization/SignIn/index.vue'),
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        meta: {
            title: '注册',
        },
        component: () => import('@/views/Authorization/SignUp/index.vue'),
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        meta: {
            title: '忘记密码',
        },
        component: () => import('@/views/Authorization/ForgotPassword/index.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...constantsRoutes, ...routes],
});

export default router;
