<template>
    <div
        class="params__field"
        draggable="true"
        @dragstart="onDragStart"
        @drag="onDrag"
        @dragend="onDragEnd"
    >
        <div
            v-show="status.dragging"
            class="params__field-mask">
        </div>
        <a-form-item label="字段名称">
            <a-input
                draggable="true"
                v-model:value="field.name"
                @dragstart="offDrag"
            />
        </a-form-item>
        <a-form-item label="字段类型">
            <a-select
                v-model:value="field.type"
                :options="fields"
                @change="resetRuleOptions"
            >
            </a-select>
        </a-form-item>
        <a-form-item label="生成规则">
            <a-radio-group
                class="params__field-rule-type"
                v-model:value="field.ruleType"
                option-type="button"
                :options="rules"
            >
            </a-radio-group>
        </a-form-item>
        <a-form-item
            v-show="isCommonlyUsed()"    
        >
            <a-select
                v-model:value="field.ruleConfig.type"
                :options="getCommonlyUsedOptions()"
            />
        </a-form-item>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { CommonlyUsedNumber, CommonlyUsedString, Fields, Rules, getDefaultField }  from './constant';
import { CommonlyUsedNumberType, CommonlyUsedStringType, FieldType, RuleType } from './index.d';
// import src from '../../assets/logo.png';

import canDrag from './utils/canDrag';

export default defineComponent({
    props: [
        'field',
        'toggleTrashVisible'
    ],
    methods: {
        // event
        onDragStart(e) {
            if (!canDrag(e)) return;

            this.status.dragging = true;

            e.dataTransfer.setData('fieldName', this.field.name);

            this.toggleTrashVisible();
        },
        onDrag(e) {},
        onDragEnd(e) {
            this.status.dragging = false;
            this.toggleTrashVisible();
        },

        /**
         * 阻止子元素响应拖拽
         */
        offDrag(e) {
            e.preventDefault();
            e.stopPropagation();
        },

        /**
         * 判断当前规则是否是 常用
         */
        isCommonlyUsed() {
            return this.field.ruleType === RuleType.commonlyUsed
        },
        /**
         * 获取 常用类型 的选项 (字符串和数字的不同)
         */
        getCommonlyUsedOptions(type = this.field.type) {
            return type === FieldType.string ? CommonlyUsedString : CommonlyUsedNumber
        },
        /**
         * 重置生成规则选项
         */
        resetRuleOptions(value) {
            this.field.ruleType = RuleType.commonlyUsed;

            const map = {
                [FieldType.string]: CommonlyUsedStringType.name,
                [FieldType.number]: CommonlyUsedNumberType.id
            }

            this.field.ruleConfig.type = map[value];
        }
    },
    setup(props) {
        const status = reactive({
            dragging: false
        })

        return {
            fields: Fields,
            rules: Rules,
            status
        };
    }
})
</script>

<style lang="less">
    .params__field {
        position: relative;
        display: flex;
        justify-content: space-evenly;

        &-mask {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 10;

            background-color: rgba(63, 243, 204, 0.445);
        }

        &-rule-type {
            display: flex !important;
            width: -webkit-fill-available;

            label {
                flex-grow: 1;
                text-align: center;
            }
        }

        // reset
        .ant-form-item {
            flex-grow: 1;
            margin-right: 20px;
        }

        .ant-form-item-label {
            & > label {
                color: #fff;
            }
        }
    }
</style>