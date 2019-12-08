import Vue from 'vue'

import app from './App.vue'
import VueRouter from 'vue-router'
import router from './router.js'

// 安装路由
Vue.use(VueRouter)


var vm = new Vue({
    el: '#app',
    router,
    render(h){
        return h(app)
    }
})

// app组件通过vm实例的render函数渲染出来, render函数渲染出来的组件只能放到el所指定的元素中,
// Account和Goodslist组件是通过路由匹配监听到的, 所以只能放到router-view元素里面