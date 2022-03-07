const express = require('express');
const router = express.Router();

/* Trabajar con dos parametros de consulta */
router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json(
    (category = [
      {
        categoryId,
        name_category: 'Female',
        sub_category: [
          {
            name_product: 'Product 1',
            productId,
            img: 'https://www.adidas.co/tenis-ultraboost-21-cold.rdy/S23908.html',
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
          },
        ],
      },
    ])
  );
});

module.exports = router;
