const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'redfinch.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: "rf",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        ],
    }
};