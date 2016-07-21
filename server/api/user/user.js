var router = require('express').Router();
// ?? var logger = require('../../util/logger');

user = []

router.route('/')
  .get(function(request, response){
    // logger.log('users');
    res.json(users);
  })

module.exports = router;
