import {userState} from "@/store/modules/user";
import {ActionContext} from "vuex";
import {loginApi} from "@/api/user";

export interface stockState {
    code: string,
    info:string,
}

const state = (): stockState => ({
    code: '000001',
    info:'000001'
})

// mutations
const mutations = {
    stateChange(state: stockState, code: string) {
        state.code = code
    },
    stateChangetwo(state: stockState, info: string) {
        state.info = info
    }
}

// actions
const actions = {
    stateChange(state: stockState, code: string) {
        state.code = code
    },
    stateChangetwo(state: stockState, info: string) {
        state.info = info
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
