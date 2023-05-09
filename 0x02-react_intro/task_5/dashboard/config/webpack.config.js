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
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            bypassOnDebug: true,
                        },
                    }
                ]
            },
            {
                test: /\.(jsx?)$/i,
                exclude: /nodes_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
}