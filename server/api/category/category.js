var router = require('express').Router();
// ?? var logger = require('../../util/logger');

categories = []

router.route('/')
  .get(function(request, response){
    // logger.log('categories');
    res.json(categories);
  })

module.exports = router;
