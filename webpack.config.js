var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var srcDir = path.resolve(process.cwd(), 'src');

//获取多页面的每个入口文件，用于配置中的entry
function getEntry() {
    var jsPath = path.resolve(srcDir, 'js');
    var dirs = fs.readdirSync(jsPath);//获取js目录下的全部js
    var matchs = [], files = {};
    dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        if (matchs) {
            files[matchs[1]] = path.resolve(srcDir, 'js', item);
        }
    });
    console.log(JSON.stringify(files));
    return files;
}

module.exports = {
    cache: true,
    devtool: "#source-map",
    entry: getEntry(),
    output: {
        path: path.join(__dirname, "dist/js/"),
        publicPath: "js/",
        filename: "[name].js",
        chunkFilename: "ensurejs/[chunkhash].js"
    },
    module: {
        // postLoaders: [
        //     {
        //         test: /\.js$/,
        //         loaders: ['es3ify-loader']
        //     }
        // ],
        loaders: [
            // {
            //     test: /.js$/,
            //     enforce: 'post', // post-loader处理
            //     loader: 'es3ify-loader'
            // },
            {
                test: /\.css$/,
                loader: "style!css"
            },

            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.(html)$/,
                loader: 'html?attrs=img:src img:data-src'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.less'],
        alias: {
            jquery: srcDir + "/js/lib/jquery.min.js",
            core: srcDir + "/js/core",
            ui: srcDir + "/js/ui"
        }
    },
    plugins: [
        new CommonsChunkPlugin('common.js'),
        new uglifyJsPlugin({
            compress: {
                properties: false,
                warnings: false
            },
            // output: {
            //     beautify: true
            // },
            // sourceMap: false
        })
    ]
};