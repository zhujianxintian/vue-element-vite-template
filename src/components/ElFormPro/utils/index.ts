import type { ITableFormProColumn, ITableFormProColumnType } from '../types';

const typeMap: Record<ITableFormProColumnType, any> = {
    input: '',
    select: '',
    daterange: ['', ''],
};

export const getDefaultValue = (type: ITableFormProColumnType) => {
    const defaultValue = typeMap[type];

    if (!defaultValue) {
        throw new Error(`The type '${type}' is not defaultValue`);
    }

    return defaultValue;
};

export const columnsToFormData = (columns: ITableFormProColumn[]) => {
    return columns.reduce<Record<string, any>>((formData, column) => {
        formData[column.prop] = getDefaultValue(column.type);
        return formData;
    }, {});
};
