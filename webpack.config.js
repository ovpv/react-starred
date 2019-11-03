const path = require("path");

module.exports = [
	{
		entry: {
			"react-starred": "./src/index.js"
		},
		mode: "production",
		output: {
			path: path.resolve(__dirname, "public"),
			filename: "[name].js",
			libraryTarget: "commonjs2"
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env", "@babel/preset-react"]
						}
					}
				}
			]
		},
		externals: {
			react: "commonjs react" // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
		}
	}
];
