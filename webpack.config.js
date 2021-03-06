// libs
const path = require('path');
const webpack = require('webpack');
// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// 构建路径
let srcPath = path.join(__dirname, 'src');
let buildPath = path.join(__dirname, 'dist');
let env = process.env.NODE_ENV === 'development' ?
  'development' : 'production';
let prdConfig = {};

// 不同环境（development，meta，production）的配置
if (env === 'production'){
  buildPath = path.join(__dirname, 'static');
  prdConfig = {
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // 提取公共库文件,适用于multiple entry point,webpack会打包对应的文件，externals外部包，webpack不处理
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: ['react'],
      //   minChunks: Infinity
      // }),
      // 代码压缩
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.ProvidePlugin({

      }),
      new webpack.DefinePlugin({
        'process.ENV': {
          'ENV': JSON.stringify(env)
        }
      }),
      new ExtractTextWebpackPlugin({
        filename: 'index.[contenthash].css'
      }),
      new CleanWebpackPlugin('static', {
        root: __dirname,
        verbose: true,
        dry: false
      }),
      new HtmlWebpackPlugin({
        title: 'monkey demos',
        template: 'src/index.html'
      })
    ],
  }
}
config = {
  entry: {
    index: path.join(__dirname, 'src/index.jsx')
  },
  output: {
    filename: '[name].js',
    chunkFilename: 'modules/[id].[name].chunk.js',
    path: buildPath
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        include: [srcPath],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react'],
            plugins: ['syntax-dynamic-import',
              'transform-class-properties',
              'transform-runtime',
              'transform-object-rest-spread']
          }
        }]
      },
      {
        test: /\.less$/,
        include: [srcPath],
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                root: '.',
                modules: true,
                importLoaders: 1,
                minimize: true,
                camelCase: true
              }
            },
            'less-loader'
          ]
        })
      },
      {
        test: /\.(png|jpeg|jpg|gif)/,
        include: [srcPath],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'res/images/[name]-[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css', '.json'],
    modules: ['node_modules']
  },
  target: 'web',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: '0.0.0.0',
    port: 8080,
    watchContentBase: true,
    hot: true,
    noInfo: true,
    proxy: {
      '/v1': "http://localhost:9000"
    }
  },
  plugins: [
    new webpack.ProvidePlugin({

    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.ENV': {
        'ENV': JSON.stringify(env)
      }
    }),
    new ExtractTextWebpackPlugin({
      filename: 'index.[contenthash].css'
    }),
    new CleanWebpackPlugin('dist', {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      title: 'monkey demos',
      template: 'src/index.html'
    }),
    new BundleAnalyzerPlugin({
      analyzerPort: 8889
    })
  ]
}

config = {...config, ...prdConfig}
module.exports = config;