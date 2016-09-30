const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};
const common = {
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.s?css$/,
      loaders: ['style', 'css', 'sass'],
      include: PATHS.app
    }, {
      test: /\.jsx?$/,
      loaders: ['babel?cacheDirectory'],
      include: PATHS.app
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      loader: 'url',
      include: PATHS.app
    }, {
      test: /\.(eot|ttf|wav|mp3)$/,
      loader: 'file',
      include: PATHS.app
    }]
  }
};

if (TARGET === 'dev' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      host: process.env.HOST,
      port: process.env.PORT
    },
    devtool: 'eval-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true
      })
    ]
  });
}
if (TARGET === 'build') {
  module.exports = merge(common, {});
}
