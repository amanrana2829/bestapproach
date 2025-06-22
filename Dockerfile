# Use an official PHP image with Apache
FROM php:8.2-apache

# Install system packages and PHP extensions including pdo_mysql
RUN apt-get update && apt-get install -y \
    git unzip curl libpng-dev libonig-dev libxml2-dev zip \
    libzip-dev mariadb-client nodejs npm \
    && docker-php-ext-install pdo pdo_mysql zip

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy project files
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Install and build frontend (React/Vite)
RUN npm install && npm run build

# Set Laravel permissions
RUN chmod -R 775 storage bootstrap/cache && chown -R www-data:www-data .

# ✅ Force Laravel to use file sessions (in case .env is not overriding)
ENV SESSION_DRIVER=file

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]
