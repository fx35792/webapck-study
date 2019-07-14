var path = require('path');

module.exports = {
	mode: 'development',//development
	// entry: "./src/index.js",
	entry: {
		main: "./src/index.js"
	},
	module: {
		rules: [
			{
				test:/\.(png|jeg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options:{
							name: '[path][name]_[hash].[ext]',
							outputPath: 'images/',
						}
					}
				]
			}
		]
	},
	output: {
		filename: 'build.js',
		path: path.resolve(__dirname,'build')
	}
}