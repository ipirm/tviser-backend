import apiRequest from '../../utils/apiRequest'

export default {
    namespaced: true,

    state: {
        pagesItem: [],
        pages: null,
        total: null,
        pageItem: null
    },

    mutations: {
        SET_PAGES: (state, payload) => {
            state.pagesItem = payload
        },
        DELETE_USER:(state, payload) => state.users = state.users.filter(i => i._id !== payload),
        SET_PAGE: (state, payload) => {
            state.pageItem = payload
        },
        UPDATED_USER: (state) => {
            state.updated = true
        }
    },

    actions: {
        async getPages({commit},id) {
            const data = await apiRequest.get(`pages/${id}`)
            commit('SET_PAGES', data.data)
        },
        async getSlide({commit}, id) {
            const data = await apiRequest.get(`pages/${id}/slide`)
            commit('SET_PAGE', data.data)
        },
        async updatePageDto({commit},body) {
            await apiRequest.patch(`slides/update`,JSON.stringify(body))
            commit('UPDATED_USER')
        },
        async savePageDto({commit},body) {
            await apiRequest.post(`pages/create/slide`,JSON.stringify(body))
            commit('UPDATED_USER')
        },
        async removePageDto({commit},id) {
            await apiRequest.delete(`slides/delete/${id}`)
            commit('UPDATED_USER')
        }
    }
}