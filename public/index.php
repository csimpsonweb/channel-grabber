<?php

define('ROOT_DIR', dirname(__DIR__));

require ROOT_DIR . '/vendor/autoload.php';

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Slim\Views\PhpRenderer;

$app = new \Slim\App;
$container = $app->getContainer();
$container['renderer'] = new PhpRenderer(ROOT_DIR . '/view');

$app->get('/', function (Request $request, Response $response, array $args) {
    return $this->renderer->render($response, "/index.phtml", $args);
});

$app->get('/products', function (Request $request, Response $response, array $args) {
    $response = $response->withJson(json_decode(file_get_contents(ROOT_DIR . '/data/products.json')));
    return $response;
});


$app->run();