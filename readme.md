# Laravel Boilerplate

## About the Project

A starter kit for setting up a [Laravel](https://laravel.com) project coupled with a ReactJS frontend.

This package provides
* [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer) for PSR-2 code compliance
* [ESLint](https://github.com/eslint/eslint) Javascript linter
* PHPUnit and Jest testing suite
* Pre-commit git hooks for CI

## Requirements

* PHP 7.2
* MySQL
* Node and NPM
* [NVM](https://github.com/nvm-sh/nvm)
* [Composer](https://getcomposer.org/)

## Installation

For detailed Laravel setup instructions, visit [their documentation](https://laravel.com/docs/5.8/installation).

1. **Clone the repo**
   
   ```sh
   $ git clone git@github.com:alexnord/dendri.git
   ```
2. **Install PHP dependencies**
   
   ```sh
   $ composer install
   ```
3. **Run migrations and seed DB**
   
   ```sh
   $ php artisan migrate:seed
   ```
4. **Use the Node version provided by .nvmrc**

   ```sh
   nvm use
   ```

5. **Install frontend dependencies**
   
   ```sh
   $ npm i
   ```
6. **Compile frontend assets**

   ```sh
   $ npm run prod
   ```

## Useful commands

**Compile assets for development (hot module reloading enabled)**
```sh
$ npm run watch
```

**Run tests**
```sh
$ npm run test
```

**Run code sniffers**
```sh
$ npm run sniff
```