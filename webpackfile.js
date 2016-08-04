const path = require('path');

module.exports = () => {
	return {
		entry: './app/index.js',
		output: {
			publicPath: '/dist/',
			path: 'dist/',
			filename: 'bundle.js'
		},
		module: {
			loaders: [
				{
					test: /\.js$/,
					loaders: ['babel'],
					exclude: /node_modules/
				},
				{
					test: /\.scss$/,
					loaders: 'style-loader!css-loader!sass-loader'
				}
			]
		}
	}
}