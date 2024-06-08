import type { IPageResult } from '@/types/root-types';

const defaultPageSort = {
    empty: false,
    sorted: false,
    unsorted: false,
};

const initialPageResult = <T>(initialValue: T[]): IPageResult<T> => {
    return {
        content: initialValue ?? [],
        numberOfElements: 0,
        totalElements: 0,
        totalPages: 0,
        number: 1,
        size: 10,
        first: false,
        last: false,
        empty: true,
        sort: { ...defaultPageSort },
        pageable: {
            paged: false,
            unpaged: false,
            pageNumber: 0,
            pageSize: 0,
            offset: 0,
            sort: { ...defaultPageSort },
        },
    };
};

export default initialPageResult;
