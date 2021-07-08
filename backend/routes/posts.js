const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const postsCtrl = require('../controllers/posts');
const multer = require('../middlewares/multer-config')


//router posts
router.get('/', auth, multer, postsCtrl.getAllPosts);
router.post('/new', auth, multer, postsCtrl.createPost);
router.delete('/delete',auth, multer, postsCtrl.deletePost);
router.put('/update', postsCtrl.updatePost);

module.exports = router;