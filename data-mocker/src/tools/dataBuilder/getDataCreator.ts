import { FieldConfig } from "../../pages/Params";
import { RuleType } from "../../pages/Params/index.d";
import getFactory from "./factory";

/**
 * 获取数据生成器
 * @param fields
 * @returns 
 */
export default function getDataCreator(fields: FieldConfig[]) {
    const rowFactorys = fields.reduce((ret, field, index) => {
        const { name, type, ruleType, ruleConfig } = field;

        let factory;

        switch(ruleType) {
            case RuleType.commonlyUsed:
                factory = getFactory(ruleConfig.type);
                break;
            case RuleType.custom:
                factory = () => ''
                break;
            default:
                break;
        }

        ret[name] = factory;

        return ret;
    }, {} as any);

    return (index: number) => {
        const result = Object.keys(rowFactorys).reduce((row, key) => {
            row[key] = rowFactorys[key](index);
            return row;
        }, {} as any)

        return result;
    }
}