const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './app/js/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    plugins: [
        // Copy our app's index.html to the build folder.
        new CopyWebpackPlugin([
            { from: './app/index.html', to: "index.html" }
        ]),
        new CopyWebpackPlugin([
            { from: './app/verify.html', to: 'verify.html' }
        ]),
        new CopyWebpackPlugin([
            { from: './app/statement.html', to: 'statement.html' }
        ])
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }],
        loaders: [
            { test: /\.json$/, use: 'json-loader' },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    }
}