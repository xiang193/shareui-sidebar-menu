/**
 * Created by liaoyf on 2017/3/6 0006.
 */
const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackChunkHash = require("webpack-chunk-hash");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const es3ifyPlugin = require('es3ify-webpack-plugin');
const commonConfig = require('./base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const componentInfo = require('../package.json');

//====================配置开始============================
//上下文路径
const context = './';
//编译到哪个目录
const distPath = path.join(__dirname, '../dist');
//eos服务地址
const eosRemoteRoot = '';
//====================配置结束============================
let option = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: distPath,
        publicPath: context,
        libraryTarget: "umd",
        library: "ShareuiSidebarMenu"
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: 'css/' + componentInfo.name + '.css',
            allChunks: true
        }),
        new webpack.BannerPlugin('version：' + componentInfo.version)
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader?sourceMap'
                        },
                        {
                            loader: 'resolve-url-loader'
                        },
                        {
                            loader: 'sass-loader?sourceMap'
                        }
                    ]
                })
            }
        ]
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'bootstrap': 'bootstrap',
        'jquery': 'jquery'
    }
};

module.exports = function(env){
    if(env.env === 'prodmin'){
        option.output.filename = componentInfo.name + '.min.js';
        option.output.sourceMapFilename = componentInfo.name + ".min.js.map";
        option.plugins.push(new UglifyJsPlugin({
            mangle: {
                // Skip mangling these
                except: ['$super', '$', 'exports', 'require']
            },
            sourceMap: true
        }));
    }else{
        option.output.filename = componentInfo.name + '.js';
        option.output.sourceMapFilename = componentInfo.name + ".js.map";
    }
    return webpackMerge(commonConfig(), option);
};