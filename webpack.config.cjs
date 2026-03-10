const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const webpack = require('webpack'); // Добавили сам webpack для плагина DefinePlugin

const baseConfig = {
    entry: path.resolve(__dirname, './src/index.ts'), 
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        // Webpack 5 не включает полифилы для node.js переменных автоматически
        fallback: {
            "process": false 
        }
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        // Настраиваем dotenv более детально
        new DotenvWebpackPlugin({
            path: path.resolve(__dirname, './.env'),
            systemvars: true, // Позволяет читать переменные окружения системы
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    
    // Исправлены пути и расширения
    const envConfig = isProductionMode 
        ? require('./webpack.prod.config.cjs') 
        : require('./webpack.dev.config.cjs');

    return merge(baseConfig, envConfig);
};