const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
      main: path.resolve(__dirname, "./js/dashboard_main.js")
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public')
    },
    module: {
        rules : [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                /* test: /\.(png|svg|jpe?g|gif)$/i,
                type: 'asset/resource',
                loader: 'image-webpack-loader', */
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassingOnDebug: true,
                        },
                    },
                ],
            },
        ],
    },
};
