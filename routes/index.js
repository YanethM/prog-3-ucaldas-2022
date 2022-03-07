const express = require('express');
const productRouter = require('./product.router');
const userRouter = require('./user.router');
const categoryRouter = require('./category.router');

/* Cuando se trabaja con api las URI deben tener:
http://localhost:3000/api/v1/... */
function routerApi(app) {
  const router = express.Router();
  /* Ruta estática por la cual iniciaran todos los end points */
  app.use('/api/v1', router);
  /* Rutas dinámicas dependiendo del recuerso o request */
  router.use('/products', productRouter);
  router.use('/users', userRouter);
  router.use('/categories', categoryRouter);
}

module.exports = routerApi;
