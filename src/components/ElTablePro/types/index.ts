import type { ElTableColumn } from 'element-plus';

type TableColumn = InstanceType<typeof ElTableColumn>;

// type PageKey = '123';

// type SizeKey = string;

// type IPageable<P extends string, S extends string> = {
//     [`${PageKey}`]: number;
//     [`${SizeKey}`]: number;
// };

export interface IPageable {
    page: number;
    size: number;
}

export interface ITableProProps<IValue> {
    request: (pageable: IPageable) => Promise<IValue>;
    columns: ITableColumn[];
    actionLabel?: string;
    actionWidth?: number;
    actionHeaderAlign?: string;
    actionAlign?: string;
    pageKey?: string;
    sizeKey?: string;
    defaultPage?: number;
    defaultSize?: number;
    pageSizes?: number[];
}

export interface ITableColumn extends Partial<TableColumn> {
    label: string;
    prop: string;
    showToolTip?: boolean;
    width?: number;
    maxRows?: number;
}

export interface ITableProInstance {
    setPage(page: number): void;
    setSize(size: number): void;
    request: () => Promise<any>;
}

export interface ITableData<T> {
    content: T[];
    total: number;
}
