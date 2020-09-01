import Vue from 'vue'
import Vuex from 'vuex'

import user from "./user"
import auth from './auth'
import pages from './pages'
import slides from './slides'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {user, auth, pages, slides}
})