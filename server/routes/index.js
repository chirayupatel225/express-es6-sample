My Student ID is 21525649. Welcome to Express.
import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'World' });
});

export default router;
