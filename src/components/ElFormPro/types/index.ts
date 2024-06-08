import type { IOption } from '@/types/root-types';

export type ITableFormProColumnType = 'input' | 'select' | 'daterange';

export interface ITableFormProColumn {
    label: string;
    prop: string;
    type: ITableFormProColumnType;
    options?: IOption<any, any>;
}

export interface ITableFormProProps {
    columns: ITableFormProColumn[];
}

export interface ITableFormProEmits {
    (event: 'search'): void;
}

export interface IFormProInstance {}
