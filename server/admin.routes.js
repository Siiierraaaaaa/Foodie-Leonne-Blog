// admin.routes.js
const express = require('express');
const router = express.Router();

const adminController = require('./admin.controller');

// Define your admin routes here
router.post('/admin/posts', adminController.addPost);
router.delete('/admin/posts/:id', adminController.deletePost);
router.put('/api/admin/posts/:id', adminController.updatePost);

router.delete('/admin/comments/:id', adminController.deleteComment);

module.exports = router;
