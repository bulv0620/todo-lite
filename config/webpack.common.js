const resolvePath = require('./resolvePath');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const prodConfig = require('./webpack.prod.js');
const devConfig = require('./webpack.dev.js');
const { merge } = require('webpack-merge');
const { VueLoaderPlugin } = require('vue-loader');

const commonConfig = {
    entry: './src/main.ts',
    output: {
        path: resolvePath('./dist'),
        filename: 'js/[name][contenthash:8].bundle.js',
        chunkFilename: 'js/[name][contenthash:8].chunk.js',
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.vue'],
        alias: {
    		'@': resolvePath('./src')
    	}
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                syVandors: {
                    test: /[\\/]node_modules[\\/]/,
                    filename: 'js/[name][contenthash:8].vendor.js',
                    priority: -10,
                    maxSize: 50 * 1024
                },
                default: {
                    minChunks: 2,
                    filename: 'js/[name][contenthash:8].bundle.js',
                    priority: -20,
                    maxSize: 50 * 1024
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                type: 'asset',
                generator: {
                    filename: 'img/[name].[hash:8][ext]',
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 50 * 1024
                    }
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'todo-list',
            template: './public/index.html'
        }),
        new DefinePlugin({
            BASE_URL: "'./'"
        }),
    ]
}

module.exports = (env) => {
    const isProduction = env.production;

    process.env.NODE_ENV = isProduction ? 'production' : 'development';

    const config = isProduction ? prodConfig : devConfig;
    return merge(commonConfig, config);
}