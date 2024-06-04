import type { DefineComponent, Plugin } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

export const iconMap: Record<string, DefineComponent> = {};

interface Options {}

const icons: Plugin<Options[]> = {
    install: (app, ...options) => {
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component);
            (iconMap as any)[key] = component;
        }
    },
};

export default icons;
