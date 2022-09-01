var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hbs', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    nombre: 'Denise',
    apellido: 'Antokolec',
    edad: '27',
    email:'denise.antokolec@gmail.com',
    telefono: '1165441187'
  });
});

module.exports = router;
