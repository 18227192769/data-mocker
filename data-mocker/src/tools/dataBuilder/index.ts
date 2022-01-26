import { FieldConfig } from "../../pages/Params";
import getDataCreator from "./getDataCreator";

interface Params {
    fields: FieldConfig[],
    num: number
}

/**
 * 数据构造器
 * @param params 
 */
export default function dataBuilder(params: Params) {
    console.log(params);
    const { fields, num } = params;

    if (!fields.length) {
        return [];
    }

    const createData = getDataCreator(fields);

    const result = new Array(num).fill(0).map((item, index) => createData(index));

    return result;
}