import { defineStore } from 'pinia';
import { getDefaultField } from '../pages/Params/constant';

export const useStore = defineStore('mocker', {
    state: () => ({
        params: new Array(18).fill(0).map(() => getDefaultField()),
    }),
    getters: {
        dataSource(): any {
            return this.params;
        }
    },
    actions: {
        updateParams(type: string, payload: any) {
            switch(type) {
                case 'add':
                    this.params.push(payload)
            }
        }
    }
})