import store from '../store'

import VueRouter from 'vue-router'
import Vue from 'vue'
import SlidesPage from "../pages/pages/page/slides/SlidesPage";
import SlideUpdatePage from "../pages/pages/page/slides/slide/SlideUpdatePage";
import SlideAddPage from "../pages/pages/page/slides/slide/SlideAddPage";
import InformationPage from "../pages/pages/information/InformationPage";
import UpdateInformation from "../pages/pages/information/update/UpdateInformation";

const LoginPage = () => import(/* webpackChunkName: "login" */ '../pages/auth/LoginPage')
const UserPage = () => import(/* webpackChunkName: "user" */ '../pages/users/UserPage')
const ScreenPage = () => import(/* webpackChunkName: "ScreenPage" */ '../pages/pages/ScreenPage')
const PageUpdate = () => import(/* webpackChunkName: "PageUpdate" */ '../pages/pages/page/PageUpdate')
const UserUpdate = () => import(/* webpackChunkName: "userUpdate" */ '../pages/users/user/UserUpdate')


Vue.use(VueRouter)
const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters['auth/isAuthenticated']) {
        next()
        return
    }
    next('/users')
}

const ifAuthenticated = (to, from, next) => {
    if (store.getters['auth/isAuthenticated']) {
        next()
        return
    }
    next('/login')
}
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: LoginPage,
            beforeEnter: ifNotAuthenticated,
        },
        {
            path: '/users',
            component: UserPage,
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/users/:id',
            component: UserUpdate,
            beforeEnter: ifAuthenticated,
        },

        {
            path: '/pages',
            component:ScreenPage,
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/pages/:id',
            component:PageUpdate,
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/pages/:id/slides',
            component: SlidesPage,
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/pages/:id/slides/:slide_id',
            component: SlideUpdatePage,
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/pages/:id/update/:slide_id',
            component: SlideAddPage,
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/information',
            component: InformationPage,
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/information/:id',
            component: UpdateInformation,
            beforeEnter: ifAuthenticated,
        },
    ]
})



export default router