var express = require('express');
var router = express.Router();
var file_poeti = require('../poeti.json');

/* GET home page. */
router.get('/:email', function (req, res, next) {
    let poeta_trovato = file_poeti.poeti.find(poeta => poeta.email == req.params.email);
    res.render('poeti', { title: 'GRANDE Cola', poeta: poeta_trovato});
});


router.get('/', function (req, res, next) {
    res.render('index', { title: 'GRANDE Cola', poeti: file_poeti.poeti});
});




module.exports = router;
