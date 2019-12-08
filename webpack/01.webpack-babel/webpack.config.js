var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

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
        contentBase: "./src"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                // 使用limit参数可以限制多大的图片才需要转换为base64,大于设定的值得图片则不会被转换为base64格式字符串
                // name参数可以设定被引用图片的名字
                use: 'url-loader?limit=7843&name=[hash:8]-[name].[ext]'
            },
            {   // 处理字体文件
                test: /\.(ttf|eot|svg|woff|woff2|otf)$/,
                use: 'url-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader', exclude: /node_modules/
            }
        ]
    }
}