const debug = process.env.NODE_ENV !== 'production'
	, webpack = require('webpack')
	, path = require('path');

module.exports = {
	context: path.join(__dirname, 'app/public'),
	devtool: debug ? 'inline-sourcemap' : false,
	entry: './js/client.js',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
				}
			}
		]
	},
	output: {
		path: __dirname + '/app/build/js',
		filename: 'client.min.js'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	],
};
