const express = require('express');
const router = express.Router();
/* npm i faker@5.5.3 --save -D */
const faker = require('faker');
/* Traer un array con todos los objetos
http://localhost:3000/api/v1/products */
router.get('/', (req, res) => {
  res.json([
    {
      product: 'Element1',
      brand: 'Brand1',
      reference: {
        price: 18000,
        size: 'S',
        cant: 13,
        color: {
          R: 3,
          G: 10,
          B: 0,
        },
      },
    },
    {
      product: 'Element2',
      brand: 'Brand2',
      reference: {
        price: 22000,
        size: 'XS',
        cant: 1,
      },
    },
    {
      product: 'Element3',
      brand: 'Brand3',
      reference: {
        price: 30000,
        size: 'M',
        cant: 12,
      },
    },
  ]);
});

/* Trabajar con un único parametro 
http://localhost:3000/api/v1/products/103 */
router.get('/:productId', (req, res) => {
  const { productId } = req.params;
  res.json({
    productId,
    name: 'Product 2',
    img: 'http://',
    description: 'lorem input',
    price: 312000,
    reference: [
      {
        size: {
          option1_XS: {
            specifications: {
              color: {
                color_option1: 'Azul',
                color_option2: 'Rojo',
              },
            },
          },
        },
      },
    ],
  });
});

/* Traer un array con todos los objetos de la api faker
http://localhost:3000/api/v1/products/api_faker/list_products */
router.get('/api_faker/list_products', (req, res) => {
  const list_p = [];
  for (let index = 0; index < 100; index++) {
    list_p.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(list_p);
});

/* Listar cierta cantidad de productos utilizando API Faker
Sin ingresar parametro opcional: http://localhost:3000/products/page
Ingresa parametro opcional: http://localhost:3000/products/page?limit_optional=1000 */
router.get('/page', (req, res) => {
  const array_products_faker = [];
  const { limit_optional } = req.query;
  const cant_products = limit_optional || 10;
  for (let index = 0; index < cant_products; index++) {
    array_products_faker.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(array_products_faker);
});

module.exports = router;
