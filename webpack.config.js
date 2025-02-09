const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { url } = require('inspector');
const { TRUE } = require('sass');

module.exports = (env) => {
    const { production } = env;

    return {
        entry: './src/app.js',
        mode: production ? 'production' : 'development',
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'bundle.js'
        },
        devtool: production ? 'source-map' : 'eval-cheap-source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, 'public')
            },
            historyApiFallback: true,
            compress: true,
            port: 9001,
        },
        plugins: [new MiniCssExtractPlugin({
            filename: 'styles.css'
        })],
        module: {
            rules: [{
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                //use: ['style-loader', 'css-loader', 'sass-loader'],
                test: /\.s?css$/i,
                //use: [MiniCssExtractPlugin.loader, "sass-loader",]
                use: [{
                    loader: "style-loader",
                    options: {
                        //esModule: false
                    }
                }, {
                    loader: 'css-loader',
                    options: {
                        url: true,
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        //   data: '@use "styles/styles.scss";',
                        //   includePaths:[__dirname, 'src']
                    }
                },]
            }]
        }

    }

}