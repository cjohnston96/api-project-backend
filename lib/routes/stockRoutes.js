const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stock');

router.get('/', stockController.index)
router.get('/:name', stockController.showName)
router.post('/', stockController.create)
router.put('/:name', stockController.edit)
router.delete('/:name', stockController.delete)

module.exports = router;