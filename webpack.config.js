const path  = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './portablog/projects/static/js/app.js', // Asegúrate de que esta ruta sea correcta
  },
  output: {
    path: path.resolve(__dirname, 'portablog/projects/static/'),
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Esto es necesario para archivos .sass y no .scss
              sassOptions: {
                indentedSyntax: true
              },
            },
          },
        ],
      },
      // ... puedes agregar más reglas para otros tipos de archivos si es necesario
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm-bundler.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
};

