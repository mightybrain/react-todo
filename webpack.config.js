const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = {}) => {
    
    const { mode = "development"} = env;

    const isProd = mode === "production";
    const isDev = mode === "development";

    const getStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : "style-loader", "css-loader"
        ]
    }

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                title: "To-do",
                buildTime: new Date().toISOString(),
                template: "public/index.html",
                inject: "body"
            }),
        ]
        if (isProd) {
            plugins.push(
                new MiniCssExtractPlugin({
                    filename: "main-[hash:8].css"
                })
            )
        }

        return plugins;
    }

    return{
        mode: isProd ? "production": isDev && "development",
        target: isProd ? "browserslist" : isDev && "web",

        output: {
            filename: isProd ? "main-[hash:8].js" : undefined
        },
    
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: getStyleLoaders()
                },
                {
                    test: /\.styl$/,
                    use: [ ...getStyleLoaders(), "postcss-loader", "stylus-loader"]
                },
                {
                    test: /\.(png|jpg|jpeg|gif|ico)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "images",
                                name: "[name]-[sha1:hash:7].[ext]"
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff2)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "fonts",
                                name: "[name].[ext]"
                            }
                        }
                    ]
                }
            ]
        },

        plugins: getPlugins(),

        devServer: {
            open: true,
            port: 3000,
            hot: true,
        },

    }
}