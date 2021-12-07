const  path = require ('path')
const HTMLWEbpackplugin = require ('html-webpack-plugin')
const {CleanWebpackPlugin} = require ('clean-webpack-plugin')


module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'build.[contenthash].js',
    path: path.resolve (__dirname, 'dist'),
    publicPath : '/'
  },
  
  devServer: {
    historyApiFallback : true
  },
  
  plugins: [new HTMLWEbpackplugin({
    template: './index.html'
  }), 
  new CleanWebpackPlugin()
],
module: {
  rules: [

    {
      test: /\.js$/,
      use : ['babel-loader']
  }, 
  {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  }
  ]
}
};
