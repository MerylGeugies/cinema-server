const { Router } = require('express');
const Review = require('./model');
const router = new Router();

router.get('/reviews', (request, response, next) => {
  Review
    .findAll()
    .then(reviews => response.send(reviews))
    .catch(err => next(err))
})

router.post('/reviews', (request, response, next) => {
  Review
  .create(request.body)
  .then(review => response.send(review)) 
  .catch(err => next(err))
})

router.post('/review/:id', (request, response, next) => {
  Review
  .create(request.body)
  .then(review => response.send(review)) 
  .catch(err => next(err))
})

module.exports = router;