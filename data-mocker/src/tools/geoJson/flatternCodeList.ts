import { JSON } from './china'

/**
 * 区域代码列表
 */
const flatternCodeList = (function () {
    // 收集器
    function collector(target: any = JSON, result: string[] = []) {
        Object.keys(target).forEach((code) => {
            result.push(code)

            if (typeof target[code] === 'object') {
                collector(target[code].child, result)
            }
        })

        return result;
    }

    return collector();
} ())

export default flatternCodeList;