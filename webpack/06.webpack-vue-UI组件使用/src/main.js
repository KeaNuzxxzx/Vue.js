import Vue from 'vue'
import app from './App.vue'


import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

import router from './router.js'

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

// 按需导入Mint-UI组件
import { Button } from 'mint-ui'

// Vue.component('mybtn', Button)
// console.log(Button.name);
Vue.component(Button.name, Button)

// 导入mui样式
import './lib/mui/css/mui.css';

import 'open-iconic/font/css/open-iconic-bootstrap.css'

import './css/app.css'


var vm = new Vue({
    el: '#app',
    router,
    render(h){
        return h(app)
    }
})

// app组件通过vm实例的render函数渲染出来, render函数渲染出来的组件只能放到el所指定的元素中,
// Account和Goodslist组件是通过路由匹配监听到的, 所以只能放到router-view元素里面