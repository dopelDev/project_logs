const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin'); // Para minimizar el JavaScript
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin()],
  },
});

