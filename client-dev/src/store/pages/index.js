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
            state.pagesItem = payload.items
            state.pages = payload.meta.totalPages
            state.total = payload.meta.totalItems
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
        async getPages({commit},page) {
            const data = await apiRequest.get(`pages?page=${page}&limit=10`)
            commit('SET_PAGES', data.data)
        },
        async getPage({commit}, id) {
            const data = await apiRequest.get(`pages/${id}`)
            commit('SET_PAGE', data.data)
        },
        async updatePageDto({commit},body) {
            await apiRequest.patch(`pages/update`,JSON.stringify(body))
            commit('UPDATED_USER')
        }
    }
}