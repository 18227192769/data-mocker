<template>
    <div id="mocker__params">
        <a-form 
            :class="getClassName('mocker__field-form', mouseIn())"
            @mouseenter="updateStatus('mouseIn', true)"
            @mouseleave="updateStatus('mouseIn', false)"
        >
            <div class="mocker__field-list">
                <!-- 字段配置列表 -->
                <div v-for="(item, index) in params" :key="index">
                    <field :field="item" />
                </div>
            </div>
        </a-form>
        <div class="mocker__add-field">
            <a-button
                class="mocker__add-field_btn"
                type="primary"
                shape="round"
                @click="addField"
            >
                + 添加
            </a-button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import $ from 'jquery';
import { mapActions } from 'pinia';
import { getDefaultField } from "./constant";
// import { PlusCircleOutlined } from '@ant-design/icons-vue'
import field from "./Field.vue";
import { useStore } from '../../store'

export default defineComponent({
    components: {
        field,
        // PlusCircleOutlined
    },
    setup() {
        const store = useStore();
        const status = reactive({
            mouseIn: false    
        });
        return {
            params: store.params,
            status
        };
    },
    methods: {
        ...mapActions(useStore, ['updateParams']),
        addField() {
            this.updateParams('add', getDefaultField());

            const $target = $('.mocker__field-form');
            const scrollHeight = $target.prop('scrollHeight');
            // 控制滚动条滚到最底部
            $target.animate({scrollTop: scrollHeight}, 500);
        },
        updateStatus(key, value) {
            this.status[key] = value;
        },
        getClassName(className, payload) {
            return `${className} ${payload}`;
        },
        mouseIn() {
            return this.status.mouseIn ? 'mouseIn' : ''
        }
    },
});
</script>

<style lang="less" scoped>
    #mocker__params {
        width: 50%;
        height: 100%;
        border: 1px solid black;
        margin: auto;
        transition: all .2s linear;

        .mocker__add-field {
            display: flex;
            justify-content: center;

            &_btn {
                width: 50%;
            }
        }

        .ant-form {
            max-height: 830px;
            margin-bottom: 10px;
            overflow: auto;

            &.mouseIn::-webkit-scrollbar {
                width: 4px;
            }

            &::-webkit-scrollbar {
                width: 0px;
            }
            &::-webkit-scrollbar-track {
                background-color: #00000000;
            }
            &::-webkit-scrollbar-thumb {
                background-color: #2d89c7;
                border-radius: 6px;
            }
            &::-webkit-scrollbar-thumb:hover {
                background-color: #589fcf;
            }
            &::-webkit-scrollbar-thumb:active {
                background-color: #77b4dd;
            }
        }
    }

    @media screen and (max-width: 1530px) {
        #mocker__params {
            width: 100%;
            height: auto;

            .ant-form {
                max-height: 430px;
            }
        }
    }
</style>