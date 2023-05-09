const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 3000,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html',
            title: 'Holberton Dashboard',
        }),
        new CleanWebpackPlugin()
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: 'asset/resource',
                loader: 'image-webpack-loader',
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
