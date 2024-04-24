var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products Page' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Services Page' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Contact Me' });
});

module.exports = router;
