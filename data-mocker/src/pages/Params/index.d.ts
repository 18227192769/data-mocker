// 字段类型
export enum FieldType {
    number = 'number',
    string = 'string'
}

// 规则类型
export enum RuleType {
    commonlyUsed = 'commonlyUsed',
    custom = 'custom'
}

// 常用字符串类型
export enum CommonlyUsedStringType {
    // 姓名
    name = 'name',
    // 性别
    sex = 'sex'
}

// 常用数字类型
export enum CommonlyUsedNumberType {
    // 身份证
    id = 'id',
    // 斐波那契数列
    fibonacci = 'fibonacci'
}

export type RuleConfigType = CommonlyUsedStringType | CommonlyUsedNumberType

export interface FieldConfig {
    name: string,
    type: FieldType,
    ruleType: RuleType,
    ruleConfig: {
        type: RuleConfigType
    }
}