<?php

use Slim\Routing\RouteCollectorProxy;

// Auth routes
$app->group('/api/auth', function (RouteCollectorProxy $group) {
    $group->post('/register', \App\Controllers\AuthController::class . ':register');
    $group->post('/login', \App\Controllers\AuthController::class . ':login');
});

// Product routes
$app->group('/api/products', function (RouteCollectorProxy $group) {
    $group->get('', \App\Controllers\ProductController::class . ':getAll');
    $group->get('/{id}', \App\Controllers\ProductController::class . ':getById');
    $group->post('', \App\Controllers\ProductController::class . ':create')->add(\App\Middleware\AuthMiddleware::class);
    $group->put('/{id}', \App\Controllers\ProductController::class . ':update')->add(\App\Middleware\AuthMiddleware::class);
    $group->delete('/{id}', \App\Controllers\ProductController::class . ':delete')->add(\App\Middleware\AuthMiddleware::class);
});

// Cart routes
$app->group('/api/cart', function (RouteCollectorProxy $group) {
    $group->get('', \App\Controllers\CartController::class . ':get');
    $group->post('', \App\Controllers\CartController::class . ':add');
    $group->put('/{id}', \App\Controllers\CartController::class . ':update');
    $group->delete('/{id}', \App\Controllers\CartController::class . ':remove');
})->add(\App\Middleware\AuthMiddleware::class);

// Order routes
$app->group('/api/orders', function (RouteCollectorProxy $group) {
    $group->get('', \App\Controllers\OrderController::class . ':getAll');
    $group->get('/{id}', \App\Controllers\OrderController::class . ':getById');
    $group->post('', \App\Controllers\OrderController::class . ':create');
    $group->put('/{id}/status', \App\Controllers\OrderController::class . ':updateStatus')->add(\App\Middleware\AdminMiddleware::class);
})->add(\App\Middleware\AuthMiddleware::class);

// User routes
$app->group('/api/users', function (RouteCollectorProxy $group) {
    $group->get('', \App\Controllers\UserController::class . ':getAll');
    $group->get('/{id}', \App\Controllers\UserController::class . ':getById');
    $group->put('/{id}', \App\Controllers\UserController::class . ':update');
    $group->delete('/{id}', \App\Controllers\UserController::class . ':delete');
})->add(\App\Middleware\AdminMiddleware::class);