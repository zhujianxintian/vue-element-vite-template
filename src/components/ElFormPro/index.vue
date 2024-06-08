<script lang="ts" setup>
import type { FormInstance } from 'element-plus';
import { Search, Refresh } from '@element-plus/icons-vue';
import type { ITableFormProProps, ITableFormProEmits, IFormProInstance } from './types';
import { columnsToFormData } from './utils';

const props = withDefaults(defineProps<ITableFormProProps>(), {});

const emits = defineEmits<ITableFormProEmits>();

const formRef = ref<FormInstance>();

const formData = reactive<Record<string, any>>(columnsToFormData(props.columns));

const handleSearch = () => {
    // currentPage.value = 1;
    emits('search');
};

const handleReset = () => {
    formRef.value?.resetFields();
    handleSearch();
};

defineExpose<IFormProInstance>({});
</script>

<template>
    <el-form ref="formRef" :model="formData" inline>
        <el-form-item v-for="(column, index) in props.columns" :key="index" :label="column.label" :prop="column.prop">
            <el-input v-if="column.type === 'input'" v-model="formData[column.prop]"></el-input>
            <el-select v-if="column.type === 'select'" v-model="formData[column.prop]">
                <el-option
                    v-for="option in column.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                />
            </el-select>
        </el-form-item>
        <el-form-item>
            <slot name="action">
                <el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
                <el-button :icon="Refresh" @click="handleReset">Reset</el-button>
            </slot>
        </el-form-item>
    </el-form>
</template>

<style lang="scss" scoped></style>
