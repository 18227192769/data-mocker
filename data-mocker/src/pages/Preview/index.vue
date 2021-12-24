<template>
    <div class="mocker__preview">
        <div class="mocker__preview-nav">
            <a-menu
                v-model:selectedKeys="status.currentTab"
                mode="horizontal"
            >
                <a-menu-item key="json">
                    <template #icon>
                        <compress-outlined />
                    </template>
                    JSON
                </a-menu-item>
                <a-menu-item key="table">
                    <template #icon>
                        <file-excel-outlined />
                    </template>
                    表格
                </a-menu-item>
            </a-menu>
        </div>
        <div class="mocker__preview-area">
            <editor 
                v-show="status.currentTab[0] === 'json'"
                :value="status.dataSource"
            />
            <table
                v-show="status.currentTab[0] === 'table'" 
                :dataSource="status.dataSource"
                :columns="1"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, ref } from 'vue';
    import Editor from '../../components/editor/index.vue';
    import Table from '../../components/table/index.vue';
    import { CompressOutlined, FileExcelOutlined } from '@ant-design/icons-vue';
    import { useStore } from '../../store';

    export default defineComponent({
        components: {
            Editor,
            Table,
            CompressOutlined,
            FileExcelOutlined
        },
        setup() {
            const globalStore = useStore();
            const status = reactive({
                currentTab: ['json'],
                dataSource: globalStore.dataSource,
            })

            globalStore.$onAction(({ store }) => {
                console.log(store.dataSource);
                status.dataSource = { ...store.dataSource }
            })

            return {
                status
            }
        }
    })
</script>

<style lang="less">
    .mocker__preview {
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: all .2s linear;

        @media screen {
            @media (max-width: 1530px) {
                width: 100%;
                height: 50%;
            }
        }

        &-area {
            height: calc(100% - 46px);
        }
    }
</style>