const path = require('path');

module.exports= {
    name: 'wordrelay-setting',
    mode: 'development', //실서비스 : production
    devtool: 'eval',
    resolve: {
        extensions: ['.js','.jsx']
    },

    // 중요
    entry: { //입력
        //합칠 jsx파일(tip : 이미 불러오고 있는 것은 적을 필요 없다)
        //wordRelay.jsx는 client.jsx가 불러와 사용하고 있으니 없어도됨
        app: ['./client'],
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets:['@babel/preset-env', '@babel/preset-react'],
            }
        }],
    },

    output: { //출력
        path: path.join(__dirname, 'dist'), //경로지정
        filename: 'app.js'
    }
}