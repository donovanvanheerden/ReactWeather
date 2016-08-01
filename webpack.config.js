var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!materialize-css/dist/js/materialize.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Navigation.jsx',
      Index: 'app/components/Index.jsx',
      About: 'app/components/About.jsx',
      HomeController: 'app/api/HomeController.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { loader: 'babel-loader', query: { presets: ['react', 'es2015', 'stage-0'] }, test: /\.jsx?$/, exclude: /(node_modules|bower_components)/ },
      { loader: 'url-loader?limit=8192name=./images/[name].[ext]', test: /\.(jpg|jpeg|gif|png)$/ },
      //  forced to switch between "name=./fonts/[hash].[ext]" & "name=./public/fonts/[hash].[ext]"
      //  not sure how to configure webpack and express
      //  Rather copy files to public when they are finished building
      { loader: 'url-loader?limit=1024&name=./fonts/[name].[ext]', test: /\.(woff|woff2|eot|ttf|svg)$/ },
    ]
  },
  //devtool: 'cheap-module-eval-source-map'
};
