import apiRequest from '../../utils/apiRequest'

export default {
    namespaced: true,

    state: {
        users: [],
        pages: null,
        total: null,
        user: null
    },

    mutations: {
        SET_USERS: (state, payload) => {
            state.users = payload.items
            state.pages = payload.meta.totalPages
            state.total = payload.meta.totalItems
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
        async getUsers({commit},page) {
            const data = await apiRequest.get(`users?page=${page}&limit=10`)
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
        async updateUserDto({commit},body) {
           await apiRequest.patch(`users/update`,JSON.stringify(body))
            commit('UPDATED_USER')
        }
    }
}