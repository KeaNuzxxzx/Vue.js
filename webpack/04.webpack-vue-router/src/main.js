import Vue from 'vue'

import app from './App.vue'
import VueRouter from 'vue-router'

// 安装路由
Vue.use(VueRouter)

import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

var router = new VueRouter({
    routes: [
        { path: '/account', component: account },
        { path: '/goodslist', component: goodslist }
    ]
})


var vm = new Vue({
    el: '#app',
    router,
    render(h){
        return h(app)
    }
})

// app组件通过vm实例的render函数渲染出来, render函数渲染出来的组件只能放到el所指定的元素中,
// Account和Goodslist组件是通过路由匹配监听到的, 所以只能放到router-view元素里面