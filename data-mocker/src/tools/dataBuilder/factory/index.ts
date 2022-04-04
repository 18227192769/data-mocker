import { RuleConfigType } from "../../../pages/Params";
import name from './name';
import sex from './sex';
import id from './id';
import fibonacci from "./fibonacci";
import province from "./province";
import city from "./city";

const factorys = {
    // string
    name,
    sex,
    province,
    city,
    // number
    id,
    fibonacci,
    index: (index: number) => index + 1,
}

/**
 * 根据规则类型获取对应的数据生成函数
 * @param type
 * @returns
 */
export default function getFactory(type: RuleConfigType) {
    const target = factorys[type];

    if (!target) {
        return () => 'error'
    }

    return target;
}