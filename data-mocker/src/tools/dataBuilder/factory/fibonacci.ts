/**
 * 斐波那契数列
 * @param index 
 * @returns 
 */
export default function fibonacci(index: number):number {
    if (index < 2) {
        return 1;
    }

    return fibonacci(index - 1) + fibonacci(index - 2);
}