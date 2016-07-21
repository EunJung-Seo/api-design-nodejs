var router = require('express').Router();

router.use('/users', require('./user/user'));
router.use('/posts', require('./post/post'));
router.use('/categories', require('./category/category'));

module.exports = router;
