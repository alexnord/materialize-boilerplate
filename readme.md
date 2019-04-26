# Laravel Boilerplate

## About the Project

A starter kit for setting up a [Laravel](https://laravel.com) project coupled with a ReactJS frontend.

## Includes
* Registration w/ email confirmation
* Stateless Authentication
* Server side and client side tests

#### Opinionated code
* Repository design pattern
* [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer) for PSR-2 code compliance
* [ESLint](https://github.com/eslint/eslint) Javascript linter using Airbnb styleguide
* Pre-commit git hooks for CI

#### Pre-installed packages
* [Prettus Repsitory](https://github.com/andersao/l5-repository)
* [Spatie Activity Log](https://github.com/spatie/laravel-activitylog)
* [Spatie Permissions](https://github.com/spatie/laravel-permission)
* [Laravel Socialite](https://laravel.com/docs/5.8/socialite)

## Requirements

* PHP 7.2
* MySQL
* [Node](https://nodejs.org/en/download/)
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
3. **Copy the example .env file**
   
   ```sh
   $ cp .env.example .env
   ```
4. **Generate application key**
   
   ```sh
   $ php artisan key:generate
   ```
5. **Run migrations and seed DB**
   
   ```sh
   $ php artisan migrate:seed
   ```
6. **Use the Node version provided by .nvmrc**

   ```sh
   nvm use
   ```

7. **Install frontend dependencies**
   
   ```sh
   $ npm i
   ```
8. **Compile frontend assets**

   ```sh
   $ npm run prod
   ```
9. **Run website**

   ```sh
   $ php artisan serve
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

**Run linters**
```sh
$ npm run lint
```