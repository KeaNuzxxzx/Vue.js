const path = require('path');

const webpack = require('webpack');

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 手动指定入口和出口
    mode: 'development',
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        port: 3000,
        hot: true,
    },
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin()
    // ]

    plugins: [
        new htmlWebpackPlugin({ // 创建一个在内存中生成html页面的插件
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],

    module: { // 这个节点, 用于配置所有第三方模块加载器
        rules: [
            {
                // 配置处理.css文件的第三方loader规则
                test: /\.css$/, 
                use: [
                    {loader: 'style-loader'}, 
                    {loader: 'css-loader'}
                ] 
            },
            {
                // 配置处理.less文件的第三方loader规则
                test: /.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
                
        ]
    }
};