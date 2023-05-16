const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    page: './src/page.jsx',
    slider: './src/slider.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    new CopyPlugin({
      patterns: [{ from: 'src/share', to: 'share' }]
    }),

    // Home page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.html',
      filename: './index.html'
      // chunks: ['index']
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/landing.html',
      filename: './landing.html'
      // chunks: ['index']
    }),

    // Internal page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/page.html',
      filename: './pages/page.html'
      // chunks: ['page']
    }),

    // Stylegide page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/stylegide.html',
      filename: './pages/stylegide.html'
      // chunks: ['page']
    }),

    // Promo page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/promo.html',
      filename: './pages/promo.html'
      // chunks: ['page']
    }),

    // About page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/about.html',
      filename: './about.html'
      // chunks: ['page']
    }),

    // Instructions page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions.html',
      filename: './instructions.html'
      // chunks: ['page']
    }),

    // Instruction1 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/instr1.html',
      filename: './instructions/instr1.html'
      // chunks: ['page']
    }),

    // Instruction2 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/instr2.html',
      filename: './instructions/instr2.html'
      // chunks: ['page']
    }),

    // Instruction3 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/instr3.html',
      filename: './instructions/instr3.html'
      // chunks: ['page']
    }),

    // Instruction4 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/instr4.html',
      filename: './instructions/instr4.html'
      // chunks: ['page']
    }),

    // Instruction5 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/instr5.html',
      filename: './instructions/instr5.html'
      // chunks: ['page']
    }),

    // Instruction6 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/instr6.html',
      filename: './instructions/instr6.html'
      // chunks: ['page']
    }),

    // Instruction7 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/instr7.html',
      filename: './instructions/instr7.html'
      // chunks: ['page']
    }),

    // Articles page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles.html',
      filename: './articles.html'
      // chunks: ['page']
    }),

    // Article1 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/art1.html',
      filename: './articles/art1.html'
      // chunks: ['page']
    }),

    // Article2 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/art2.html',
      filename: './articles/art2.html'
      // chunks: ['page']
    }),

    // Article3 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/art3.html',
      filename: './articles/art3.html'
      // chunks: ['page']
    }),

    // Article4 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/art4.html',
      filename: './articles/art4.html'
      // chunks: ['page']
    }),

    // Article5 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/art5.html',
      filename: './articles/art5.html'
      // chunks: ['page']
    }),

    // Article6 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/art6.html',
      filename: './articles/art6.html'
      // chunks: ['page']
    }),

    // Single mini video page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/vid1.html',
      filename: './articles/vid1.html'
      // chunks: ['page']
    }),

    // Single big video page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/vid2.html',
      filename: './articles/vid2.html'
      // chunks: ['page']
    }),

    // Single checklist page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/check1.html',
      filename: './articles/check1.html'
      // chunks: ['page']
    }),

    // Questions page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/questions.html',
      filename: './questions.html'
      // chunks: ['page']
    }),

    // Single question page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/questions/quest1.html',
      filename: './questions/quest1.html'
      // chunks: ['page']
    }),

    // Tepmlates page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/templates.html',
      filename: './templates.html'
      // chunks: ['page']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
