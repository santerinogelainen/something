const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: ['./src/index.ts'],

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},

	module: {
		rules: [{
			test: /\.tsx?$/,
			use: [
				{loader: "awesome-typescript-loader"}
			]
		}]
	},

	externals: {
		"jquery": /^(jquery|\$)$/i,
		"three": "THREE"
	},
	devtool: "source-map"
};
