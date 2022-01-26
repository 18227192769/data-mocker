/**
 * 生成随机数
 * @param start 
 * @param range 
 * @returns 
 */
export default function random(start = 0, range = 1) {
    return Math.round(Math.random() * range) + start;
}