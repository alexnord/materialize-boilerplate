<a href="https://materializelabs.com">
	<img src="https://d1vqe4bnlv6mwq.cloudfront.net/horizontal-logo.png" alt="Materialize Labs" width="400"/>
</a>

# Laravel Boilerplate

## About the Project

A starter kit for setting up a [Laravel](https://laravel.com) backend and GraphQL API coupled with a [ReactJS](https://reactjs.org/) frontend using [Apollo](https://github.com/apollographql/react-apollo) and the [Bootstrap](https://react-bootstrap.github.io/) UI framework.

## Includes

#### Features
* React SPA frontend (served through a Laravel web route)
* GraphQL API
* Bootstrap UI
* JWT Authentication
  * Register/login forms
* Form validation
* Server side and client side tests

#### Opinionated code
* Repository design pattern
* GraphQL API
* JWT authentication
* Pre-commit git hooks for CI
* [phpcs](https://github.com/squizlabs/PHP_CodeSniffer) for PSR-2 code compliance
* [eslint](https://github.com/eslint/eslint) Javascript linter using Airbnb styleguide

#### Pre-installed packages

##### Server Side
* [l5-repository](https://github.com/andersao/l5-repository)
* [jwt-auth](https://github.com/tymondesigns/jwt-auth)
* [laravel-activitylog](https://github.com/spatie/laravel-activitylog)
* [laravel-permission](https://github.com/spatie/laravel-permission)
* [socialite](https://laravel.com/docs/5.8/socialite)
* [graphql-laravel](https://github.com/rebing/graphql-laravel)

##### Client Side
* [react-redux](https://github.com/reduxjs/react-redux)
* [react-bootstrap](https://react-bootstrap.github.io/)
* [react-router](https://github.com/ReactTraining/react-router)
* [react-apollo](https://github.com/apollographql/react-apollo)
* [formik](https://github.com/jaredpalmer/formik)

## Requirements

* PHP 7.2>
* MySQL 5.7>
* [Node](https://nodejs.org/en/download/)
* [NVM](https://github.com/nvm-sh/nvm)
* [Composer](https://getcomposer.org/)

## Installation

For detailed Laravel setup instructions, visit [their documentation](https://laravel.com/docs/5.8/installation).

1. **Clone the repo**
   
   ```sh
   $ git clone git@github.com:alexnord/materialize-boilerplate.git
   ```
2. **Install PHP dependencies**
   
   ```sh
   $ composer install
   ```
3. **Copy the example .env file**
   
   ```sh
   $ cp .env.example .env
   ```
4. **Create SQLite DB for testing**
   
   ```sh
   $ touch database/database.sqlite
   ```

4. **Generate application keys**
   
   ```sh
   $ php artisan key:generate
   $ php artisan jwt:secret
   ```
5. **Run migrations and seed DB**
   
   ```sh
   $ php artisan migrate
   $ php artisan db:seed
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
$ npm run hot
```

**Run backend and frontend tests**
```sh
$ npm run test
```

**Run linters**
```sh
$ npm run lint
```
