// const { Module } = require("webpack");
const path = require('path');

module.exports = {
    name: 'word-relay-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    // 중요(입출력)
    entry: {
        app: ['./client'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
};