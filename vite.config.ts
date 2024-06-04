import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
import autoImport from 'unplugin-auto-import/vite';
import components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import icons from 'unplugin-icons/vite';
import iconsResolver from 'unplugin-icons/resolver';

const paths = {
    root: fileURLToPath(new URL('./', import.meta.url)),
    src: fileURLToPath(new URL('./src', import.meta.url)),
    types: fileURLToPath(new URL('./src/types', import.meta.url)),
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, paths.root);
    return {
        plugins: [
            vue(),
            vueJsx(),
            vueDevTools(),
            autoImport({
                imports: ['vue', 'vue-router', 'pinia'],
                resolvers: [
                    ElementPlusResolver(),
                    iconsResolver({
                        prefix: 'Icon',
                    }),
                ],
                dts: path.resolve(paths.types, 'auto-imports.d.ts'),
            }),
            components({
                resolvers: [iconsResolver(), ElementPlusResolver()],
                dts: path.resolve(paths.types, 'components.d.ts'),
            }),
            icons({
                autoInstall: true,
            }),
        ],
        resolve: {
            alias: {
                '@': paths.src,
            },
        },
        base: env.VITE_APP_BASE_URL,
    };
});
