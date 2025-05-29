<?php
namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Models\Product;

class ProductController {
    private $product;
    
    public function __construct() {
        $this->product = new Product();
    }
    
    public function getAll(Request $request, Response $response) {
        $query = $request->getQueryParams();
        $page = isset($query['page']) ? (int) $query['page'] : 1;
        $limit = isset($query['limit']) ? (int) $query['limit'] : 10;
        $category = isset($query['category']) ? $query['category'] : null;
        $search = isset($query['search']) ? $query['search'] : null;
        
        $products = $this->product->getAll($page, $limit, $category, $search);
        $total = $this->product->count($category, $search);
        
        $payload = [
            'data' => $products,
            'meta' => [
                'total' => $total,
                'page' => $page,
                'limit' => $limit,
                'pages' => ceil($total / $limit)
            ]
        ];
        
        $response->getBody()->write(json_encode($payload));
        return $response->withHeader('Content-Type', 'application/json');
    }
    
    public function getById(Request $request, Response $response, $args) {
        $id = $args['id'];
        $product = $this->product->getById($id);
        
        if (!$product) {
            $response->getBody()->write(json_encode(['error' => 'Product not found']));
            return $response->withStatus(404)->withHeader('Content-Type', 'application/json');
        }
        
        $response->getBody()->write(json_encode($product));
        return $response->withHeader('Content-Type', 'application/json');
    }
    
    public function create(Request $request, Response $response) {
        $data = $request->getParsedBody();
        
        // Validate input
        if (!isset($data['name']) || !isset($data['price'])) {
            $response->getBody()->write(json_encode(['error' => 'Name and price are required']));
            return $response->withStatus(400)->withHeader('Content-Type', 'application/json');
        }
        
        $product = [
            'name' => $data['name'],
            'description' => $data['description'] ?? null,
            'price' => (float) $data['price'],
            'category_id' => $data['category_id'] ?? null,
            'image' => $data['image'] ?? null,
            'stock' => $data['stock'] ?? 0
        ];
        
        $id = $this->product->create($product);
        
        if (!$id) {
            $response->getBody()->write(json_encode(['error' => 'Failed to create product']));
            return $response->withStatus(500)->withHeader('Content-Type', 'application/json');
        }
        
        $product['id'] = $id;
        $response->getBody()->write(json_encode($product));
        return $response->withStatus(201)->withHeader('Content-Type', 'application/json');
    }
    
    public function update(Request $request, Response $response, $args) {
        $id = $args['id'];
        $data = $request->getParsedBody();
        
        // Check if product exists
        $existingProduct = $this->product->getById($id);
        if (!$existingProduct) {
            $response->getBody()->write(json_encode(['error' => 'Product not found']));
            return $response->withStatus(404)->withHeader('Content-Type', 'application/json');
        }
        
        $success = $this->product->delete($id);
        
        if (!$success) {
            $response->getBody()->write(json_encode(['error' => 'Failed to delete product']));
            return $response->withStatus(500)->withHeader('Content-Type', 'application/json');
        }
        
        $response->getBody()->write(json_encode(['message' => 'Product deleted successfully']));
        return $response->withHeader('Content-Type', 'application/json');
        }
        
        $product = [];
        if (isset($data['name'])) $product['name'] = $data['name'];
        if (isset($data['description'])) $product['description'] = $data['description'];
        if (isset($data['price'])) $product['price'] = (float) $data['price'];
        if (isset($data['category_id'])) $product['category_id'] = $data['category_id'];
        if (isset($data['image'])) $product['image'] = $data['image'];
        if (isset($data['stock'])) $product['stock'] = (int) $data['stock'];
        
        $success = $this->product->update($id, $product);
        
        if (!$success) {
            $response->getBody()->write(json_encode(['error' => 'Failed to update product']));
            return $response->withStatus(500)->withHeader('Content-Type', 'application/json');
        }
        
        $updatedProduct = $this->product->getById($id);
        $response->getBody()->write(json_encode($updatedProduct));
        return $response->withHeader('Content-Type', 'application/json');
    }
    
    public function delete(Request $request, Response $response, $args) {
        $id = $args['id'];
        
        // Check if product exists
        $existingProduct = $this->product->getById($id);
        if (!$existingProduct) {
            $response->getBody()->write(json_encode(['error' => 'Product not found']));
            return $response->withStatus(404)->withHeader('Content-Type', 'application/json');