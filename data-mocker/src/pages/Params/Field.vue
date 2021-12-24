<template>
    <div class="params__field">
        <a-form-item label="字段名称">
            <a-input
                v-model:value="field.name"
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

export default defineComponent({
    props: ['field'],
    methods: {
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
        return {
            fields: Fields,
            rules: Rules
        };
    }
})
</script>

<style lang="less">
    .params__field {
        display: flex;
        justify-content: space-evenly;

        // reset
        .ant-form-item {
            margin-right: 20px;
        }

        .ant-form-item-label {
            & > label {
                color: #fff;
            }
        }
    }
</style>