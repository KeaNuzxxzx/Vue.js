import Vue from 'vue';


// 头部
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';
Vue.component(Header.name, Header);
// 轮播图
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 按钮
Vue.component(Button.name, Button);

// mui样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import VueRouter from 'Vue-router'
Vue.use(VueRouter)

import router from './router.js'

// http://www.liulongbin.top:3005/api/

// vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource)

Vue.http.options.root = 'http://www.liulongbin.top:3005/'

import moment from 'moment';
// 全局过滤器
Vue.filter('dateFormat', function(dataStr, pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})

import app from './App.vue'

var vm = new Vue({
    el: '#app',
    router,
    render: c => c(app)
    
})
