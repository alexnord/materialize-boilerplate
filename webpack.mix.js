const mix = require('laravel-mix');

const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js').webpackConfig({
    plugins: [
        // To strip all locales except “en”
        new MomentLocalesPlugin(),
    ],
    // Other config goes here
})
   .sass('resources/sass/app.scss', 'public/css');
