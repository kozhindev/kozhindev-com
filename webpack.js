require('yii-steroids/webpack')
    .config({
        port: 8074,
        //host: '192.168.0.3',
        baseUrl: '',
        staticPath: '',
        outputPath: __dirname + '/dist',
        sourcePath: __dirname + '/src',
        useHash: true,
        devServer: {
            historyApiFallback: true,
            proxy: {
                '**': null,
            },
        }
    })
    .base('./src/index.js');
