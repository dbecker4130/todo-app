const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

module.exports = {
    module: {
      rules: [
        // {
        //   test: [/\.bmp$/, /\.gif$/, /\.jpeg$/, /\.png$/],
        //   loader: require.resolve('url-loader'),
        //   options: {
        //     limit: 10000,
        //     name: 'static/media/[name].[hash:8].[ext]',
        //   },
        // },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [htmlPlugin]
  };