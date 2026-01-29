const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();
const productsFile = path.join(__dirname, '../data/products.json');

// Helper function to read products from file
const readProducts = () => {
  try {
    const data = fs.readFileSync(productsFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading products file:', error);
    return [];
  }
};

// Helper function to write products to file
const writeProducts = (products) => {
  try {
    fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing products file:', error);
    return false;
  }
};

// Helper function to create API response
const createResponse = (data, message = 'Success', success = true) => {
  return { data, message, success };
};

// GET /api/products - Get all products with pagination and filtering
router.get('/', (req, res) => {
  try {
    let products = readProducts();
    const { page = 1, limit = 12, search, category, minPrice, maxPrice } = req.query;
    
    // Apply filters
    if (search) {
      const searchLower = search.toLowerCase();
      products = products.filter(product => 
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
      );
    }
    
    if (category && category !== 'all') {
      products = products.filter(product => product.category === category);
    }
    
    if (minPrice) {
      products = products.filter(product => product.price >= parseInt(minPrice));
    }
    
    if (maxPrice) {
      products = products.filter(product => product.price <= parseInt(maxPrice));
    }
    
    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedProducts = products.slice(startIndex, endIndex);
    
    const response = createResponse({
      products: paginatedProducts,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: products.length,
        totalPages: Math.ceil(products.length / limit)
      }
    });
    
    res.json(response);
  } catch (error) {
    res.status(500).json(createResponse(null, 'Internal server error', false));
  }
});

// GET /api/products/search - Search products
router.get('/search', (req, res) => {
  try {
    let products = readProducts();
    const { q, category, minPrice, maxPrice } = req.query;
    
    if (q) {
      const searchLower = q.toLowerCase();
      products = products.filter(product => 
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower)
      );
    }
    
    if (category) {
      products = products.filter(product => product.category === category);
    }
    
    if (minPrice) {
      products = products.filter(product => product.price >= parseInt(minPrice));
    }
    
    if (maxPrice) {
      products = products.filter(product => product.price <= parseInt(maxPrice));
    }
    
    res.json(createResponse(products));
  } catch (error) {
    res.status(500).json(createResponse(null, 'Internal server error', false));
  }
});

// GET /api/products/categories - Get all categories
router.get('/categories', (req, res) => {
  try {
    const products = readProducts();
    const categories = [...new Set(products.map(product => product.category))];
    res.json(createResponse(categories));
  } catch (error) {
    res.status(500).json(createResponse(null, 'Internal server error', false));
  }
});

// GET /api/products/:id - Get product by ID
router.get('/:id', (req, res) => {
  try {
    const products = readProducts();
    const product = products.find(p => p.id === req.params.id);
    
    if (!product) {
      return res.status(404).json(createResponse(null, 'Product not found', false));
    }
    
    res.json(createResponse(product));
  } catch (error) {
    res.status(500).json(createResponse(null, 'Internal server error', false));
  }
});

// POST /api/products - Create new product
router.post('/', (req, res) => {
  try {
    const products = readProducts();
    const { name, price, description, image, quantity, category } = req.body;
    
    // Validation
    if (!name || !price || !description || !category) {
      return res.status(400).json(createResponse(null, 'Missing required fields', false));
    }
    
    const newProduct = {
      id: uuidv4(),
      name: name.trim(),
      price: parseFloat(price),
      description: description.trim(),
      image: image || 'https://via.placeholder.com/400x300?text=No+Image',
      quantity: parseInt(quantity) || 0,
      category: category.trim(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    products.push(newProduct);
    
    if (writeProducts(products)) {
      res.status(201).json(createResponse(newProduct, 'Product created successfully'));
    } else {
      res.status(500).json(createResponse(null, 'Failed to save product', false));
    }
  } catch (error) {
    res.status(500).json(createResponse(null, 'Internal server error', false));
  }
});

// PUT /api/products/:id - Update product
router.put('/:id', (req, res) => {
  try {
    const products = readProducts();
    const productIndex = products.findIndex(p => p.id === req.params.id);
    
    if (productIndex === -1) {
      return res.status(404).json(createResponse(null, 'Product not found', false));
    }
    
    const { name, price, description, image, quantity, category } = req.body;
    
    // Update product
    const updatedProduct = {
      ...products[productIndex],
      ...(name && { name: name.trim() }),
      ...(price && { price: parseFloat(price) }),
      ...(description && { description: description.trim() }),
      ...(image && { image }),
      ...(quantity !== undefined && { quantity: parseInt(quantity) }),
      ...(category && { category: category.trim() }),
      updatedAt: new Date().toISOString()
    };
    
    products[productIndex] = updatedProduct;
    
    if (writeProducts(products)) {
      res.json(createResponse(updatedProduct, 'Product updated successfully'));
    } else {
      res.status(500).json(createResponse(null, 'Failed to update product', false));
    }
  } catch (error) {
    res.status(500).json(createResponse(null, 'Internal server error', false));
  }
});

// DELETE /api/products/:id - Delete product
router.delete('/:id', (req, res) => {
  try {
    const products = readProducts();
    const productIndex = products.findIndex(p => p.id === req.params.id);
    
    if (productIndex === -1) {
      return res.status(404).json(createResponse(null, 'Product not found', false));
    }
    
    const deletedProduct = products.splice(productIndex, 1)[0];
    
    if (writeProducts(products)) {
      res.json(createResponse(deletedProduct, 'Product deleted successfully'));
    } else {
      res.status(500).json(createResponse(null, 'Failed to delete product', false));
    }
  } catch (error) {
    res.status(500).json(createResponse(null, 'Internal server error', false));
  }
});

module.exports = router;