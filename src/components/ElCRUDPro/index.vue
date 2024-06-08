<script lang="ts" setup>
import ElFormPro from '../ElFormPro/index.vue';
import ElTablePro from '../ElTablePro/index.vue';

interface ICRUDProps {}

const props = defineProps<ICRUDProps>();
</script>

<template>
    <el-card>
        <el-form-pro></el-form-pro>
        <el-table-pro></el-table-pro>
    </el-card>
</template>

<style lang="scss" scoped></style>
