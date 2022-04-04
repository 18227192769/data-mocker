import { defineStore } from 'pinia';
import { getDefaultField } from '../pages/Params/constant';
import dataBuilder from '../tools/dataBuilder';

export const useStore = defineStore('mocker', {
    state: () => ({
        currentTab: ['json'],
        params: new Array(6).fill(0).map(() => getDefaultField()),
        num: 10
    }),
    getters: {
        dataSource(state): any {
            return state.params;
        },
        json(state) {
            return dataBuilder({
                fields: state.params,
                num: state.num
            })
        }
    },
    actions: {
        updateParams(type: string, payload: any) {
            switch(type) {
                case 'add':
                    this.params.push(payload);
                    break;
                case 'delete':
                    const list = this.params.filter((item) => item.name !== payload);
                    this.params = [...list]
                    break;
            }
        }
    }
})