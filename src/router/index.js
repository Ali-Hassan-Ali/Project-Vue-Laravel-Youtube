import Vue from 'vue'
import VueRouter from 'vue-router'
// import AppLayout from "../layouts/App.vue";
// import PublicLayout from "../layouts/Public.vue";
import Dashboard from "../layouts/Dashboard.vue";

import Login from "../layouts/Login.vue";
import LoginPage from "../views/Login.vue";
// import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Welcome from "../views/Welcome.vue";
// import test from "../views/test.vue";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login,
        children: [{
            path: '/',
            component: LoginPage
        }]
    },
    {
        path: '/dashboard',
        component: Dashboard,
        children: [{
                path: '',
                component: Welcome
            },
            {
                path: 'aa',
                component: Welcome
            }
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router