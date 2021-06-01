const path = require('path');
const vueSrc = './src';

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/REPO_NAME/' : '/',
  devServer: {
    open: true,
  },
  chainWebpack: config => {
    config.module.rules.delete('svg');
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, vueSrc),
      }
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'sass-loader',
            {
              loader: 'style-resources-loader',
              options: {
                patterns: [
                  'src/assets/styles/*.scss',
                ]
              }
            },
          ],
        },
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader',
        },
      ],
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/styles/main.scss";`
      }
    },
  },
};
