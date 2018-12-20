const path        = require('path');
const webpack     = require('webpack');
const middleware  = require('webpack-dev-middleware');
const express     = require('express');
const consolidate = require('consolidate');
const webpackConf = require('./webpack.config.js');
const compiler    = webpack(webpackConf);
const app         = express();


app.engine('html', consolidate.lodash);
app.set('views', '/__www/');
app.set('view engine', 'html');

const gx = middleware(compiler, {
    watchOptions : 500,
    quiet        : true,
});

app.use(gx);

// app.use(hotMiddleware);

app.get([ '/', '/*' ], (req, res) => {
    res.render('index');
});


app.listen(3000, () => console.log('❤️ 启动成功！端口：3000!'));
