const path                 = require('path');
const webpack              = require('webpack');
const express              = require('express');
const consolidate          = require('consolidate');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConf          = require('./webpack.config.js');
const compiler             = webpack(webpackConf);
const app                  = express();


app.engine('html', consolidate.lodash);
app.set('view engine', 'html');

app.use(webpackDevMiddleware(compiler, {
    watchOptions : 500,
    quiet        : true,
    hot          : true,
}));

app.use(webpackHotMiddleware(compiler));

app.get([ '/' ], (req, res) => {
    res.render('admin');
});

// app.get('*', (request, response) => {
//     response.sendFile(path.resolve(defaultConfig.root, 'index.html'));
// });

const port = '3000';
app.listen(port, '0.0.0.0', () => console.log(`❤️ 启动成功！端口：${port}!`));
