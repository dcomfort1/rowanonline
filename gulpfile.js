const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const nunjucks = require('gulp-nunjucks-render')
const gulp = require('gulp')

function assets(cb) {
    return new Promise((resolve, reject) => {
        webpack(webpackConfig, (err, stats) => {
            if (err) {
                return reject(err)
            }
            if (stats.hasErrors()) {
                return reject(new Error(stats.compilation.errors.join('\n')))
            }
            resolve()
        })
    })
}

function markup(cb) {
    return gulp.src('src/views/*.+(html|njk|nunjucks)')
  .pipe(nunjucks({
      path: ['src/views/templates']
    }))
  .pipe(gulp.dest('public/build/app'))
}


exports.assets = assets;
exports.markup = markup;
exports.default = gulp.series(markup, assets)