import _ from 'lodash';
import { JSON } from '../../geoJson/china';

/**
 * 省
 */
const provinceMap = (function () {

    return Object.keys(JSON).map((code) => _.get(JSON, `${code}.name`));

} ())

export default function province(index: number) {
    index = index % provinceMap.length;

    return provinceMap[index];
}