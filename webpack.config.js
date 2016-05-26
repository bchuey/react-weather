var webpack = require('webpack');

module.exports = {

	// tells webpack where it should start processing code
	entry: [

		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'

	],
	externals: {
		// key:value => moduleName:variableNameToUse
		jquery: 'jQuery'
	},
	plugins: [

		new webpack.ProvidePlugin({
			// object that specifies key:value
			// key => variable name to watch
			// value => what module to use
			'$': 'jquery',
			'jQuery': 'jquery',
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js',
	},
	resolve: {
		// tell where it all needs to happen
		// path => /React
		root: __dirname,
		// set names for components
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			Weather: 'app/components/Weather.jsx',
			About: 'app/components/About.jsx',
			Examples: 'app/components/Examples.jsx',
			WeatherForm: 'app/components/WeatherForm.jsx',
			WeatherMessage: 'app/components/WeatherMessage.jsx',
			openWeatherMap: 'app/api/openWeatherMap.jsx',
			ErrorModal: 'app/components/ErrorModal.jsx',
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react','es2015','stage-0']
				},
				// match reg express with files ending in .jsx
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'

};