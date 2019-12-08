import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import './lib/mui/css/mui.css'

import app from './App.vue'

var vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(app)
})
