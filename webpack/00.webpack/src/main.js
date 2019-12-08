// ES6导入模块方式
import $ from 'jquery'

// 使用import语法导入css样式表
// webpack只能默认打包js类型文件,如需处理非js文件,需手动安装第三方loader
// 1. cnpm i style-loader css-loader -D
// 2. webpack.config中 新增配置节点module对象, 其中的rules属性数组中存放了所有第三方文件的匹配和处理规则; 
import './css/index.css'

import './css/index.less'

import './css/index.scss'

$(function(){
    $('li:odd').css('backgroundColor', 'blue')
    $('li:even').css('backgroundColor', function(){
        return '#' + 'D97634'
    })
})