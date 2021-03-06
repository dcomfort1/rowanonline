const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const nunjucks = require('gulp-nunjucks-render')
const gulp = require('gulp')
const sitemap = require('gulp-sitemap')
const robots = require('gulp-robots')

const baseURL = 'https://www.rowanpartnerships.online'

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

function makeSitemap(cb) {
    return gulp.src('public/build/app/*.html', {
        read: false
    })
    .pipe(sitemap({siteUrl: baseURL}))
    .pipe(gulp.dest('public/build/app'))
}

function createRobots(cb) {
    return gulp.src('public/build/app/*.html')
        .pipe(robots({
            useragent: '*',
            sitemap: baseURL + '/sitemap.xml',
            disallow: ['']
        }))
        .pipe(gulp.dest('public/build/app'));
}


exports.assets = assets;
exports.markup = markup;
exports.makeSitemap = makeSitemap;
exports.createRobots = createRobots;
exports.default = gulp.series(markup, assets, makeSitemap, createRobots)