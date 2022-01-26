import random from "../random";

const _ox = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

/**
 * 生成基本汉字的 unicode 编码
 * @returns
 */
function getCode() {
    // 4E00-9FA5 - 基本汉字
    return Number(`0x${_ox[random(3, 5)]}${_ox[random(14, 1)]}${_ox[random(0, 10)]}${_ox[random(0, 5)]}`);
}

export default function getChineseCharacters(num = 1) {
    return new Array(num).fill(0).reduce((str) => {
        str += String.fromCodePoint(getCode());
        return str;
    } ,'')
}