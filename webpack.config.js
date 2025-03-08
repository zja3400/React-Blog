const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    resolve: {
        extensions: ['.ts', '.js'],
    },
    mode: "development",

    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "./build/"),
        filename: "index.bundle.js",
        clean: {
            keep: filename => {
                return filename === 'main.php'
            }
        },
        publicPath: '/',  // '/'로 설정하여 절대 경로로 사용
    },

    devServer: {
        port: 3000,
        liveReload: true,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: "babel-loader",
                },
            },
			{
				test: /\.css$/,
				use: [{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
			},
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", 'sass-loader'],
                exclude: /nodeModules/
            },            
			{
				test: /\.(woff|woff2|ttf|eot|png|jpg|svg|gif)$/i,
				type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                },
			},
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            // 필요한 경우 여기에 publicPath 등을 명시할 수 있습니다.
        }),
    ],
};
