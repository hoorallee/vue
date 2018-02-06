// 第一步:新建一个webpack的配置文件webpack.config.js
// 第二步:完成webpack.config.js文件的配置
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 入口文件配置
    entry: "./src/main.js",
    // 出口文件配置
    output: {
        path: path.join(__dirname, 'dist'),
        // 静态资源在服务器上运行时的访问路径，可以直接http://localhost:8080/dist/bundle.js访问到服务器中的bundle.js文件
        // publicPath: '/dist',
        filename: "bundle.js"
    },
    // loader加载器
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }] },
            { test: /\.scss$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }] },
            { test: /\.(png|jpg|gif|ttf|woff)/, use: [{ loader: 'url-loader', options: { limit: 50000 } }] },
            { test: /\.vue$/, loader: 'vue-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',//要处理的html文件
            filename: 'index.html',//处理后的新文件名称
            title: '我是标题'
        })
    ]
}
// 第三步:运行命令webpack