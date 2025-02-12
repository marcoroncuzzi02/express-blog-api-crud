const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// index
router.get('/', postController.index);
// show
router.get('/:id', postController.show);
// store
router.get('/', postController.store);
// update
router.get('/:id', postController.update);
// modify
router.get('/:id', postController.modify);
// destroy
router.get('/:id', postController.destroy);

module.exports = router;