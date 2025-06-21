#!/usr/bin/env bash

# install dependencies
composer install --no-dev --optimize-autoloader

# migrate database (optional if using MySQL)
php artisan migrate --force

# build frontend
npm install && npm run build

# run Laravel server
php artisan serve --host=0.0.0.0 --port=8080
