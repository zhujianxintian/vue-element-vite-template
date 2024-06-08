import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import constantsRoutes from './constants';

interface RouteModule {
    default: RouteRecordRaw[];
}

const routeModules: Record<string, RouteModule> = import.meta.glob('./modules/*.ts', { eager: true });

const routes = Object.values(routeModules).flatMap((module) => module.default, 1);

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...constantsRoutes, ...routes],
});

export default router;
