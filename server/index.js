var express = require('express');
var path = require('path');
// var webpack = require('webpack');
// var webpackMiddleware = require('webpack-dev-middleware');
// var webpackHotMiddleware = require('webpack-hot-middleware');
// var webpackConfig = require('../webpack.config.js');

let app = express();
app.use(express.static(path.join(__dirname,'../dist')));
// const compiler = webpack(webpackConfig)
// app.use(webpackMiddleware(compiler, {
//   // hot: true,
//   publicPath: webpackConfig.output.publicPath,
//   noInfo: true
// }));
// app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
})

app.listen(80, () => console.log('Running from localhost on port 80'))