import { Lang } from "../../../types/lang.d"

const i18n = {
    zh_cn: [
        '男', '女'
    ]
}

export default function sex(index: number, lang = Lang.zh_cn) {
    return i18n[lang][Number(Math.random() > 0.5)]
}