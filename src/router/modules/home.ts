import type { RouteRecordRaw } from 'vue-router';
import Layouts from '@/layouts/Layouts/index.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Layouts,
        children: [
            {
                path: '/',
                name: 'home',
                meta: {
                    title: 'Home',
                },
                component: () => import('@/views/Home/index.vue'),
            },
        ],
    },
];

export default routes;
