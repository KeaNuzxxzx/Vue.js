import Vue from 'vue';


// 头部
import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
// 轮播图
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// mui样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import VueRouter from 'Vue-router'
Vue.use(VueRouter)

import router from './router.js'

// vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource)

import app from './App.vue'

var vm = new Vue({
    el: '#app',
    router,
    render: c => c(app)
    
})
