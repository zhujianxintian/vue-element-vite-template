import axios from 'axios';
import domain from './domain';
import { ElMessage } from 'element-plus';
import Token from '@/constants/token';

const instance = axios.create({
    baseURL: domain,
    timeout: 10000,
});

instance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem(Token.AccessToken);
        if (accessToken) {
            config.headers && (config.headers[Token.AccessToken] = accessToken);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (response) => {
        if (response.status >= 500) {
            ElMessage({ type: 'error', message: '服务器繁忙，请稍后再试' });
            return Promise.reject(response);
        }

        if (response.status >= 400) {
            ElMessage({ type: 'error', message: '参数异常' });
            return Promise.reject(response);
        }

        return response;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default instance;
