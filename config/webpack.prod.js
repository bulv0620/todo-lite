const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const resolvePath = require('./resolvePath')

module.exports = {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: resolvePath('public'),
                    globOptions: {
                        ignore: '**/index.html'
                    }
                }
            ]
        })
    ]
}