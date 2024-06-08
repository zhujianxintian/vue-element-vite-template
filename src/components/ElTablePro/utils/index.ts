import type { ITableFormProColumn } from '@/components/ElFormPro/types';

const defaultColumnValue: Required<ITableFormProColumn> = {
    label: '',
    prop: '',
    type: 'input',
    options: [] as any,
};

export const getColumnValue = (column: ITableFormProColumn): ITableFormProColumn => {
    return {
        label: column.label ?? defaultColumnValue.label,
        prop: column.prop ?? defaultColumnValue.label,
        type: column.type ?? defaultColumnValue.type,
    };
};
