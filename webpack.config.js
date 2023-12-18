const path = require('node:path');
const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: './portablog/projects/static/js/app.js', // Asegúrate de que esta ruta sea correcta
	},
	output: {
		path: path.resolve(__dirname, 'portablog/projects/static/'),
		filename: 'js/[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.(png|jpe?g|gif|svg|webp)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'img',
							name: '[name].[ext]',
						},
					},
				],
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
	],
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.esm-bundler.js',
		},
		extensions: ['.*', '.js', '.vue', '.json'],
	},
};
