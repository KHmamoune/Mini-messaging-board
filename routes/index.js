var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "hi there",
    user: "amando",
    added: new Date()
  },
  {
    text: "hellow world",
    user: "charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messaging board' , messages: messages});
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.message, user: req.body.author, added: new Date()})
  res.redirect('/')
})

module.exports = router;
