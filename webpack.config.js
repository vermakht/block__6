const path = require('path');
// Подключение необходимых плагинов для работы
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

/* Отслеживание реэима сборки проекта*/
const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

// Отлеживаем режим и заменяем названия соответвенно
const filename = (ext) => isDev ? `bundle.${ext}` : `bundle.[hash]${ext}`;

// Редактор определенных форматов
const myEslintOptions = {
  extensions: [`js`, `jsx`, `ts`],
  exclude: [`node_modules`],
};

module.exports = {
  // Расположение основной папки проекта
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './js/index.js'],
  // Выввод собронного проекта с определнным названием и в указанную папку
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js'],
    // Сокращение относительного пути до файла.
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core'),
    },
  },
  // Карты исходных файлов
  devtool: isDev ? 'eval-cheap-module-source-map' : false,
  // Динамическое обнровление старницы при внесении изменений
  devServer: {
    port: 5000,
    hot: isDev,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    // Подключаем новый
    new ESLintPlugin(myEslintOptions),
    // Очищает от ненужных файлом и оставляет только актуальные
    new CleanWebpackPlugin(),
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
      minify: {
        /* Удаление комментариев*/
        removeComments: isProd,
        /* Удаление пробелов*/
        collapseWhitespace: isProd,
      },
    }),
    // Копируем картинки
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/img'),
          to: path.resolve(__dirname, 'dist/img'),
        },
      ],
    }),
    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ],
  /* Инструмент работы с предпроцессами.
      Компилируем SCSS в CSS*/
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'MiniCssExtractPlugin.loader',
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          'css-loader',
          'sass-loader',
        ],

      },
      /** Добавляем инстурмент для изменения js под старые браузере с
       * использование пресета.
       * Транспилируем js с babel.
       */
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src/js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {targets: 'defaults'}],
            ],
            sourceType: 'unambiguous',
          },
        },
      },
      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=./fonts/[name].[ext]',
          },
        ],
      },
      {
        // Подключаем картинки из css
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader?name=./static/[name].[ext]',
          },
        ],
      },
    ],
  },
};
