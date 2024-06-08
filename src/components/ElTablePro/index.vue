<script lang="ts" setup generic="IValue">
import type { IPageable, ITableColumn, ITableProInstance, ITableProProps } from './types';
import initialPageResult from '@/utils/initial-page-result';
import { getColumnValue } from './utils';

type IValue = any;

const props = withDefaults(defineProps<ITableProProps<IValue>>(), {
    actionLabel: '操作',
    actionWidth: 200,
    actionHeaderAlign: 'center',
    actionAlign: 'center',
    pageKey: 'page',
    sizeKey: 'size',
    defaultPage: 1,
    defaultSize: 10,
    pageSizes: () => [10, 20, 30, 50, 100],
});

const slots = useSlots();

const loading = ref(false);

const error = ref(false);

const columns = computed(() => props.columns.map(getColumnValue));

const tableData = reactive(initialPageResult<IValue>([]));

const pageable = reactive<IPageable>({
    page: props.defaultPage,
    size: props.pageSizes[0] ?? props.defaultSize,
});

const resolveTooltipContentClass = (column: ITableColumn) => {
    return {
        'single-ellipsis': !(column.maxRows && column.maxRows > 1),
        'multiple-ellipsis': column.maxRows && column.maxRows > 1,
    };
};

const resolveTooltipContentStyle = (column: ITableColumn) => {
    return {
        '--line-clamp': column.maxRows,
    };
};

const listTableData = async () => {
    loading.value = true;

    try {
        const { totalCount: count, list } = await props.request({ ...pageable });
        error.value = false;
        tableData.content = list;
        tableData.totalElements = count;
    } catch (e) {
        error.value = true;
        console.error(e);
    }

    loading.value = false;
};

const setPage = (page: number) => {
    pageable.size = page;
};

const setSize = (size: number) => {
    pageable.size = size;
};

const handlePageChange = async (value: number) => {
    pageable.page = value;
    listTableData();
};

const handleSizeChange = async (value: number) => {
    pageable.size = value;
    listTableData();
};

listTableData();

defineExpose<ITableProInstance>({
    setPage,
    setSize,
    request: listTableData,
});
</script>

<template>
    <el-table v-loading="loading" class="w-full mb-[24px]" :data="tableData.content">
        <el-table-column v-for="(column, index) in columns" :key="index" v-bind="column">
            <template #default="scope">
                <slot :name="column.prop" v-bind="scope">
                    <el-tooltip
                        v-if="column.showToolTip !== false || column.width"
                        placement="top"
                        effect="dark"
                        :content="scope.row[column.prop]"
                    >
                        <div :class="resolveTooltipContentClass(column)" :style="resolveTooltipContentStyle(column)">
                            {{ scope.row[column.prop] }}
                        </div>
                    </el-tooltip>
                    <div v-else>
                        {{ scope.row[column.prop] }}
                    </div>
                </slot>
            </template>
        </el-table-column>
        <el-table-column
            v-if="slots.action"
            :label="props.actionLabel"
            :width="props.actionWidth"
            :header-align="props.actionHeaderAlign ?? props.actionAlign"
            :align="props.actionAlign"
        >
            <template #default="scope">
                <slot name="action" v-bind="scope" />
            </template>
        </el-table-column>
    </el-table>
    <el-pagination
        class="flex mt-4 justify-end"
        layout="total, sizes, prev, pager, next, jumper"
        v-model:current-page="pageable.page"
        v-model:page-size="pageable.size"
        :page-sizes="pageSizes"
        :total="tableData.totalElements"
        @size-change="handleSizeChange"
        @current-change="handlePageChange"
    />
</template>

<style lang="scss" scoped>
.single-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.multiple-ellipsis {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: var(--line-clamp);
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}
</style>
