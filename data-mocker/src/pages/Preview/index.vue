<template>
    <div class="mocker__preview">
        <div class="mocker__preview-nav">
            <a-menu
                v-model:selectedKeys="globalStore.currentTab"
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
            <a-input-number
                v-model:value="globalStore.num"
            >
                <template #addonAfter>条</template>
            </a-input-number>
        </div>
        <div class="mocker__preview-area">
            <editor 
                v-show="globalStore.currentTab[0] === 'json'"
                :value="globalStore.json"
            />
            <table
                v-show="globalStore.currentTab[0] === 'table'" 
                :dataSource="globalStore.dataSource"
                :columns="1"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, reactive, ref, watch, watchEffect } from 'vue';
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

            return {
                globalStore
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

        &-nav {
            display: flex;

            .ant-menu {
                flex-grow: 1;
            }

            .ant-input-number-input {
                width: 100px;
                height: 46px;
            }
        }

        @media screen {
            @media (max-width: 1570px) {
                width: 100%;
                height: 50%;
            }
        }

        &-area {
            height: calc(100% - 46px);
        }
    }
</style>