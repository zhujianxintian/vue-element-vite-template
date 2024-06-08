import type { SelectOptionProxy } from 'element-plus';

export interface IResponseResult<T> {
    readonly code: number;
    readonly message: string;
    readonly data: T;
}

type DefaultOptionLabel = string | number | Record<string, string>;

type DefaultOptionValue = string | number;

export type IOption<V extends DefaultOptionValue, L extends DefaultOptionLabel> = Partial<SelectOptionProxy> & {
    label: V;
    value: L;
};

export interface ISortResult {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface IPageResult<T> {
    content: T[];
    totalElements: number;
    totalPages: number;
    numberOfElements: number;
    number: number;
    size: number;
    first: boolean;
    last: boolean;
    empty: boolean;
    sort: ISortResult;
    pageable: {
        paged: boolean;
        unpaged: boolean;
        pageNumber: number;
        pageSize: number;
        offset: number;
        sort: ISortResult;
    };
}
