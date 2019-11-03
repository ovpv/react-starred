const path = require("path");

module.exports = [
	{
		entry: {
			"react-starred": "./src/index.js"
		},
		mode: "development",
		output: {
			path: path.resolve(__dirname, "public"),
			filename: "[name].js"
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
		}
	}
];
