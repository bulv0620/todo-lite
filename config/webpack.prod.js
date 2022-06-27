const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const resolvePath = require('./resolvePath')

module.exports = {
    performance: {
        maxEntrypointSize: 1000000,
        maxAssetSize: 200000,
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.js');
        }
    },
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