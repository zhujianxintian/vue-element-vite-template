import request from '@/api/request';
import type { ISignInBody, ISignInVo, ISignUpBody, ISignUpVo } from './types';
import type { IResponseResult } from '@/types/root-types';

export const signUp = (data: ISignInBody) => {
    return request<IResponseResult<ISignInVo>>({
        url: '',
        method: 'POST',
        data,
    });
};

export const signIn = (data: ISignUpBody) => {
    return request<IResponseResult<ISignUpVo>>({
        url: '',
        method: 'POST',
        data,
    });
};
