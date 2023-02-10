const express = require('express');
const {
    getAllItems,
    createItem,
    getItemById,
    updateItem,
    deleteItem
} = require('../controllers/items.controller');

const router = express.Router();

router.route('/').get(getAllItems).post(createItem);
router.route('/:id').get(getItemById).put(updateItem).delete(deleteItem)

module.exports = router;
