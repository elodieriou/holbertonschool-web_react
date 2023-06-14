const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    devtool: "inline-source-map",
    devServer: {
        static: path.resolve(__dirname, "../dist"),
        port: 8564,
        hot: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: 'asset/resource',
                loader: 'image-webpack-loader',
            },
            {
                test: /\.(jsx?)$/i,
                exclude: /nodes_modules/,
                loader: "babel-loader"
            },
        ],
    },
}
