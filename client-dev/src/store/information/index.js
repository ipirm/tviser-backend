import apiRequest from '../../utils/apiRequest'

export default {
    namespaced: true,

    state: {
        information: {},

    },

    mutations: {
        SET_USERS: (state, payload) => {
            state.information = payload
        },
        DELETE_USER:(state, payload) => state.users = state.users.filter(i => i._id !== payload),
        SET_USER: (state, payload) => {
            state.user = payload
        },
        UPDATED_USER: (state) => {
            state.updated = true
        }
    },

    actions: {
        async getInformation({commit}) {
            const data = await apiRequest.get(`information`)
            commit('SET_USERS', data.data)
        },
        async deleteUser({commit}, id) {
            await apiRequest.delete(`users/${id}`)
            commit('DELETE_USER', id)
        },
        async getUser({commit}, id) {
            const data = await apiRequest.get(`users/${id}`)
            commit('SET_USER', data.data)
        },
        async updatePageDto({commit},body) {
            await apiRequest.patch(`information/update`,JSON.stringify(body))
            commit('UPDATED_USER')
        }
    }
}