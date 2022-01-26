import { flatternCodeList } from "../../../assets/geoJson/china";
import random from "../../random";

/**
 * 获取行政区划代码
 * @returns
 */
const getCode = () => flatternCodeList[random(0, flatternCodeList.length - 1)];

/**
 * 获取生日日期
 * @returns
 */
const getBirthDay = () => {
    const currentYear = new Date().getFullYear();

    const year = random(currentYear - 50, 50);
    const month = String(random(1, 12)).padStart(2, '0');
    const day = String(random(1, 29)).padStart(2, '0');

    return `${year}${month}${day}`
}

/**
 * 获取顺序位 - 3位数
 * @returns
 */
const getOderNumber = () => String(random(0, 999)).padStart(3, '0')

/**
 * 获取校验位
 */
const weight = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
const getCheckBit = (base: string) => {
    if (base.length !== 17) {
        return 0;
    }
    
    const weightedSummation = base.split('').reduce(
        (
            res: number,
            item: string,
            index: number
        ) => {
            res += (+item * weight[index])
            return res;
        },
        0
    )

    return (12 - (weightedSummation % 11)) % 11
}

const idParts = {
    code: getCode,
    birthDay: getBirthDay,
    oderNumber: getOderNumber
}

/**
 * 生成随机id - 身份证算法
 * @param index
 * @returns
 */
export default function id(index: number) {
    const base = Object.values(idParts).map(fn => fn()).join('');
    const checkBit = getCheckBit(base);

    return `${base}${checkBit}`
}