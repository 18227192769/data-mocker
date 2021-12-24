<template>
    <div
        :class="getRootClassName()"
        @mouseleave="() => toggleVisible(false)"
    >
        <div class="mocker__operate-box">
            <div class="mocker__operate-preview">
                <send-outlined class="mocker__operate-icon" />
                <span @click="preview">预览</span>
            </div>
            <div class="mocker__operate-export">
                <export-outlined class="mocker__operate-icon" />
                <span>导出</span>
            </div>
        </div>
        <div
            :class="getShowButtonClassName()"
            @mouseenter="() => toggleVisible(true)"
        >
            <api-outlined />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import { ApiOutlined, ExportOutlined, SendOutlined } from '@ant-design/icons-vue';
import { useStore } from '../../store';

    export default defineComponent({
        components: {
            ApiOutlined,
            ExportOutlined,
            SendOutlined
        },
        methods: {
            preview() {
                const store = useStore();
                console.log(store);
            },
            getRootClassName() {
                const payload = this.visible ? '' : 'hide';
                return `mocker__operate ${payload}`;
            },
            getShowButtonClassName() {
                const payload = this.visible ? 'hide' : '';
                return `mocker__operate-show-button ${payload}`;
            },
            toggleVisible(state = !this.visible) {
                if (this.lock) {
                    return
                }

                this.lock = setTimeout(() => this.lock = null, 200);
                this.visible = state;
            }
        },
        setup() {
            const visible = ref(false);
            const lock = ref(null);
            return {
                visible,
                lock
            }
        }
    })
</script>

<style lang="less" scoped>
    .mocker__operate {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);

        width: 500px;
        height: 70px;
        border-radius: 4px;

        transition: top .2s linear;

        &.hide {
            top: -40px;
        }

        &-show-button {
            position: absolute;
            bottom: 0px;
            left: calc(50% - 15px);
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background-color: #fff;
            border-radius: 50%;
            color: #000;

            cursor: pointer;

            transition: opacity .2s linear;

            &.hide {
                opacity: 0;
                pointer-events: none;
            }
        }

        &-box {
            display: flex;
            justify-content: space-around;
            align-items: center;

            height: 40px;
            border-radius: 6px;
            border: 1px solid rgb(53, 75, 80);
        }

        &-icon {
            color: turquoise;
            margin-right: 6px;;
        }

        &-preview,
        &-export {
            padding: 2px 16px;
            border-radius: 4px;
            background-color: rgb(70, 70, 70);
            transition: background-color .2s linear;

            cursor: pointer;

            &:hover {
                background-color: rgb(93, 93, 93);
            }
        }
    }
</style>