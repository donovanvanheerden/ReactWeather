module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Navigation.jsx',
      Weather: 'app/components/Weather.jsx',
      Examples: 'app/components/Examples.jsx',
      WeatherResult: 'app/components/WeatherResult.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      About: 'app/components/About.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader', query: { presets: ['react', 'es2015', 'stage-0'] }, test: /\.jsx?$/, exclude:/(node_modules|bower_components)/}
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
