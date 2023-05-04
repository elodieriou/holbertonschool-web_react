const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
      all: ['./modules/header/header.js', './modules/body/body.js', './modules/footer/footer.js']
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, './public')
    },
    devServer: {
        contentBase: './public',
        port: 8564,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
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
