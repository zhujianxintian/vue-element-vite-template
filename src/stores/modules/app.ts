import { ref } from 'vue';
import { defineStore } from 'pinia';

const useAppStore = defineStore('app', () => {
    const title = ref('');

    const icon = ref('');

    const renderTitle = () => {
        if (!title.value) {
            console.warn('app title value is not valid');
            return;
        }

        const titleEl = document.head.querySelector<HTMLTitleElement>('title');

        if (!titleEl) {
            console.warn('app title is not found');
            return;
        }

        titleEl.innerText = title.value;
    };

    const renderIcon = () => {
        if (!icon.value) {
            console.warn('app icon value is not valid');
            return;
        }

        const iconEl = document.head.querySelector<HTMLLinkElement>('link[rel]="icon"');

        if (!iconEl) {
            console.warn('app icon is not found');
            return;
        }

        iconEl.href = icon.value;
    };

    const render = () => {
        renderTitle();
        renderIcon();
    };

    return {
        title,
        icon,
        renderTitle,
        renderIcon,
        render,
    };
});

export default useAppStore;
