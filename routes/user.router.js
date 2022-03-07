const express = require('express');
const router = express.Router();
/* Sin parametros: http://localhost:3000/api/v1/users
Con parametros: http://localhost:3000/api/v1/users?limit=1&offset=10*/
router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  limit && offset
    ? res.json({
        limit,
        offset,
      })
    : res.send('No hay parametros');
});

module.exports = router;
