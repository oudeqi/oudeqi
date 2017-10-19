const path = require('path');
const Glob = require('Glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const NODE_ENV = require('../config').NODE_ENV;
const PUBLIC_PATH = require('../config').PUBLIC_PATH;
const SERVICE_URL = require('../config').SERVICE_URL;
const CDN = require('../config').CDN;

const minify = {
    removeComments: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true
};

const getJsEntry = function(globPath) {
    let entries = {};
    Glob.sync(globPath).forEach(function (entry) {
        if(!!entry.match(/\.\/app\/pages\//)){
            let basename = path.basename(entry, path.extname(entry));
            let pathname = path.dirname(entry);
            entries[basename] = entry;
        } else {
            throw new Error('只能在“./app/pages/”目录下面找入口');
        }
    });
    return entries;
};

const getHtmlEntry = function(globPath) {
    let entries = [];
    Glob.sync(globPath).forEach(function (entry) {
        if(!!entry.match(/\.\/app\/pages\//)){
            let config = {};
            let basename = path.basename(entry, path.extname(entry));
            let pathname = path.dirname(entry);
            config['filename'] = basename + path.extname(entry);
            config['template'] = 'html-withimg-loader!' + entry;
            config['chunks'] = ['manifest', 'vendor', 'common'].concat(basename);
            config['minify'] = NODE_ENV === 'production' ? minify : false,
            config['chunksSortMode'] = 'dependency';
            entries.push(config);
        } else {
            throw new Error('只能在“./app/pages/”目录下面找页面模板');
        }
    });
    return entries;
};

module.exports = {
    devtool: 'source-map',
    // context: path.resolve(__dirname, 'app'), //基本目录，一个绝对路径，用于从配置中解析入口点和装载器。
	entry: Object.assign({}, getJsEntry('./app/pages/**/*.js'), {
        common: './app/assets/styles/common.css',
        vendor: ['jquery', 'bootstrap', 'bootstrap/dist/css/bootstrap.css']
    }),
    // entry: {
    //     index: './app/pages/index/index.js',
    //     contact: './app/pages/contact/contact.js',
    //     resume: './app/pages/resume/resume.js',
    //     photos: './app/pages/photos/photos.js',
    //     common: './app/assets/styles/common.css',
    //     vendor: ['jquery', 'bootstrap', 'bootstrap/dist/css/bootstrap.css']
    // },
	output: {
		path: path.join(__dirname, '..', 'dist'),
        filename: 'assets/scripts/[name].[chunkhash:8].js',
        publicPath: CDN ? CDN : PUBLIC_PATH,
        // 会影响到html里 img标签的src属性
        // 不会影响到css里对图片、字体的引用
        pathinfo: NODE_ENV === 'development'
	},
	module: {
		rules: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    publicPath: CDN ? CDN : '../../',
                    // 则这里的 publicPath 作用于css里面的图片的对外路径，和css里面字体的对外路径
                    // 不作用于link标签的href属性
                    // 如果设置 图片loader的publicPath，则会覆盖css里面 图片的对外路径
                    // 如果设置 字体loader的publicPath，则会覆盖css里面 字体的对外路径
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: false
                        }
                    }, {
                        loader: "postcss-loader",
                        options: {
                            config: {
                                path: 'postcss.config.js',
                                ctx: {
                                    autoprefixer: {browsers: ['> 1%']}
                                }
                            }
                        }
                    }],
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'url-loader',
                options: {
                    name: 'assets/images/[name].[hash:8].[ext]',
                    // publicPath: PUBLIC_PATH, 
                    // 一般不设置，如果使用cdn 沿用output配置里的publicPath就足够了
                    // 会覆盖 css里面的 图片的对外路径
                    // 会影响 html里面 img标签的src属性
                    // 会覆盖 output配置里的 publicPath
                    // 单独设置图片资源的publicPath，其他文件保留output配置里的publicPath
                    limit: 1024 * 3
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-withimg-loader",
                        options: {
                            // exclude: /image/,//排除image目录
                            min: false,//默认会去除html中的换行符，配置min=false可不去除
                            deep: false,//将关闭include语法嵌套子页面的功能
                        }
                    },
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ['img:data-src'],
                            interpolate: true,//为 ES6 模板字符串启用插值语法
                            minimize: false,
                            removeComments: false,
                            collapseWhitespace: false
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/fonts/[name].[hash:8].[ext]',
                    publicPath: CDN ? CDN : '../../',
                    // 会覆盖css里面的字体的对外路径，所以不设置
                    // 或者和css里字体的对外路径设置成一样
                }
            }
        ]
    },
	plugins: [
		new CleanWebpackPlugin(['dist'], {
			root: path.join(__dirname, '..')
		}),
		new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(NODE_ENV),
                'PUBLIC_PATH': JSON.stringify(CDN || PUBLIC_PATH),
                'SERVICE_URL': JSON.stringify(SERVICE_URL)
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor'],
            minChunks: Infinity,
            filename: 'assets/scripts/[name].[chunkhash:8].js',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        new ExtractTextPlugin({
            filename: 'assets/styles/[name].[contenthash:8].css',
            allChunks: false
        }),
        ...getHtmlEntry('./app/pages/**/*.html').map((item, index) => {
            return new HtmlWebpackPlugin(item)
        })
	]
}