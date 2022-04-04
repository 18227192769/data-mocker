<template>
    <div class="mocker__table">
        <a-table
            :dataSource="dataSource"
            :columns="columns"
            :scroll="scrollConfig"
            :pagination="false"
        />
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent } from 'vue'

    export default defineComponent({
        props: [
            'dataSource'
        ],
        setup(props) {
            const scrollConfig = {
                x: true,
                y: 'calc(100% - 55px)'
            }

            const columns = computed(() => {
                const [template] = (props.dataSource ?? []);

                return Object.keys(template).map((key) => ({
                    title: key,
                    dataIndex: key,
                    name: key
                }))
            })

            const dataSource = computed(() => {
                return (props.dataSource ?? []).map((item: any, index: number) => ({
                    key: index,
                    ...item
                }))
            })

            return {
                dataSource,
                columns,
                scrollConfig
            }
        }
    })
</script>

<style lang="less" scoped>
    .mocker__table {
        width: 100%;
        height: 100%;
    }
</style>

<style lang="less">
    .mocker__table {

        .ant-table-wrapper,
        .ant-spin-nested-loading,
        .ant-spin-container,
        .ant-table,
        .ant-table-container {
            height: 100%;
        }
    }
</style>