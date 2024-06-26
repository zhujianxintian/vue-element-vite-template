import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { IUserInfo } from '@/types/modules/user';

const useUserStore = defineStore('user', () => {
    const token = ref('');

    const userInfo = ref<IUserInfo | null>(null);

    const signIn = async () => {
        userInfo.value = null;
    };

    const getUserInfo = async () => {
        userInfo.value = null;
    };

    const logout = async () => {
        userInfo.value = null;
    };

    return { token, userInfo, signIn, getUserInfo, logout };
});

export default useUserStore;
