module.exports = {
  plugins: [
    require('postcss-preset-env')({
      browsers: 'last 2 versions',
    }),
    require('autoprefixer'),
    require('css-mqpacker'),
    require('postcss-color-mod-function'),
    require('postcss-custom-media'),
    require('postcss-color-functional-notation'),
    require('postcss-calc'),
    require('cssnano') ({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          }
        }
      ]
    })
  ]
}