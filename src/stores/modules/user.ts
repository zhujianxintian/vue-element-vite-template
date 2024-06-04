import { ref } from 'vue';
import { defineStore } from 'pinia';

const useUserStore = defineStore('user', () => {
    const token = ref('');

    const userInfo = ref(null);

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
