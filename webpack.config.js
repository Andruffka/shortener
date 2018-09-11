var Encore = require('@symfony/webpack-encore');
var webpack = require('webpack');

Encore
    .autoProvidejQuery()
    // the project directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // uncomment to create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())

    // uncomment to define the assets of the project
    .addEntry('js/app', [
        './assets/js/bootstrap/bootstrap.js',
        'bootstrap-datepicker'
    ])
    .addStyleEntry('css/app', [
        './assets/css/bootstrap/bootstrap.css',
        'bootstrap-datepicker/dist/css/bootstrap-datepicker.css',
        './assets/css/pagerfanta.css'
    ])

    // uncomment if you use Sass/SCSS files
    // .enableSassLoader()

    // uncomment for legacy applications that require $/jQuery as a global variable

;

module.exports = Encore.getWebpackConfig();