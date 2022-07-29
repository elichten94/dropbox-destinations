const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/dropbox_destinations.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '*']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.png$/, use: [ 'file-loader'] }

        ]
    },
    devtool: 'source-map'
};