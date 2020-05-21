const purgecss = require('@fullhuman/postcss-purgecss')
  
module.exports = {
  plugins: [
    purgecss({
      content: [
        './src/**/*.html',
        './src/views/*.html',
        './src/views/partials/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
      ],
    })
  ]
}