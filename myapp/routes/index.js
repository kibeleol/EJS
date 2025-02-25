var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Über uns', content: 'Willkommen auf der About-Seite!' });
});

router.get('/users', function(req, res, next) {
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 }
  ];
  res.render('users', { title: 'Benutzerliste', users });
});

module.exports = router;
