import _ from 'lodash';
import { JSON } from '../../geoJson/china';

/**
 * 市
 */
const cityMap = (function () {

    return Object.keys(JSON).reduce((ret, code) => {
        const child = _.get(JSON, `${code}.child`, {});

        ret.push(...Object.values(child).map((item: any) => item.name));

        return ret;
    }, [] as any[]);

} ())

export default function city(index: number) {
    index = index % cityMap.length;

    return cityMap[index];
}