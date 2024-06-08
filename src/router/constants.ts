import type { RouteRecordRaw } from 'vue-router';

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

export default constantsRoutes;
