// import Vue from 'vue'
import Vue from '../node_modules/vue/dist/vue.js'

// var login = {
//     template: '<h1>login component</h1>'
// }

import login from './login.vue'

var vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    },
    // components: {
    //     login
    // },
    // 在webpack中想要通过vue把一个组件放到页面中区展示
    
    // render会直接把组件替换掉原页面
    render(h) {
        return h(login)
    },
})


// 用export暴露的成员用{} 按需导入
import m1, { title as title1, content } from './test.js'

console.log(m1);

console.log(title1 + ' --- ' + content);