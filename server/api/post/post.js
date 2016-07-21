var router = require('express').Router();
// ?? var logger = require('../../util/logger');

posts = []

router.route('/')
  .get(function(request, response){
    // logger.log('posts');
    res.json(posts);
  })

module.exports = router;
