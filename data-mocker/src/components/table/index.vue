<template>
    <div class="mocker__table">
        <a-table :dataSource="dataSource" :columns="columns" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        props: [
            'dataSource',
            'columns'
        ],
        setup() {
            
        }
    })
</script>

<style lang="less" scoped>
    .mocker__table {
        width: 100%;
        height: 100%;
    }
</style>