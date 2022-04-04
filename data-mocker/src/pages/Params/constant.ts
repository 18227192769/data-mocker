import {
    CommonlyUsedNumberType,
    CommonlyUsedStringType,
    FieldType,
    RuleType,
    FieldConfig
} from "./index.d"

// 字段默认名称
export const DEFAULT_NAME = 'default';

// 字段类型
export const Fields = [
    {
        label: '字符串',
        value: FieldType.string
    },
    {
        label: '数字',
        value: FieldType.number
    }
]

// 规则类型
export const Rules = [
    {
        label: '常用',
        value: RuleType.commonlyUsed
    },
    {
        label: '自定义',
        value: RuleType.custom
    }
]

// 常用字段类型
export const CommonlyUsedString = [
    {
        label: '姓名',
        value: CommonlyUsedStringType.name
    },
    {
        label: '姓别',
        value: CommonlyUsedStringType.sex
    },
    {
        label: '省区划',
        value: CommonlyUsedStringType.province
    },
    {
        label: '市区划',
        value: CommonlyUsedStringType.city
    }
]

// 常用数字类型
export const CommonlyUsedNumber = [
    {
        label: '序号',
        value: CommonlyUsedNumberType.index
    },
    {
        label: '身份证',
        value: CommonlyUsedNumberType.id
    },
    {
        label: '斐波那契数列',
        value: CommonlyUsedNumberType.fibonacci
    }
]

/**
 * 获取默认字段配置
 * @returns 
 */
export const getDefaultField = (): FieldConfig => ({
    name: DEFAULT_NAME + (Math.random() * 10000000).toFixed(),
    type: FieldType.string,
    ruleType: RuleType.commonlyUsed,
    ruleConfig: {
        type: CommonlyUsedStringType.name
    }
})