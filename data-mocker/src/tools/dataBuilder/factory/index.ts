import { RuleConfigType } from "../../../pages/Params";
import name from './name';
import sex from './sex';
import id from './id';

const factorys = {
    // string
    name,
    sex,
    // number
    id,
    fibonacci() {return 'fibonacci'}
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