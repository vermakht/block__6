const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {ProgressPlugin} = require('webpack');

// Отслеживание сборки проекта
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';

// Проверка браузера, в котором открыли сайт
const target = devMode ? 'web' : 'browserslist';

// Карты исходных файлов
const devtool = devMode ? 'eval-cheap-module-source-map' : undefined;

module.exports = {
  // Динамическое обнровление старницы при внесении изменений
  mode,
  target,
  devtool,
  devServer: {
    // Каталог, откуда будет раздаваться статика
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 4000,
    hot: true,
  },
  // Входной файл
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // Выходной файл собранного проекта
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  plugins: [
    // При сборке этот плагин будет отображать прогресс в консоли:
    new ProgressPlugin(),
    // Очищает от ненужных файлом и оставляет только актуальные
    new CleanWebpackPlugin(),
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      minify: {
        // Удаление комментариеы в режиме production
        removeComments: mode,
        // Удаление пробелов в режиме production
        collapseWhitespace: mode,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          'group-css-media-queries-loader',
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      // Подключаем картинки из css
      {
        test: /\.(jpe?g|png|webp|svg)$/i,
        use: devMode ?
          [] :
          [
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75,
                },
              },
            },
          ],
        type: 'asset/resource',
      },
      /** Добавляем инстурмент для изменения js под старые браузере с
       * использование пресета.
       * Транспилируем js с babel.
       */
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
