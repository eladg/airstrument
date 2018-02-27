var Path = require('path');
var Webpack = require('webpack');

let babelOptions = {
  'presets': 'es2015'
};

module.exports = {
  entry: './src/entry.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build'
  },

  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: [
          /node_modules/,
          /build/
        ],
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions
          }
        ]
      },
      { 
        test: /\.js$/, 
        exclude: [
          /node_modules/,
          /build/
        ],
        use: {
          loader: 'babel-loader',
          options: babelOptions
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      'three/OrbitControls': Path.join(__dirname, 'node_modules/three/examples/js/controls/OrbitControls.js')
    }
  },
  plugins: [
    new Webpack.ProvidePlugin({
      'THREE': 'three'
    }),
  ]
};