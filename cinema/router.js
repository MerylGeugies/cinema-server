const { Router } = require('express');
const Cinema = require('./model');
const router = new Router();

router.get('/cinemas', (request, response, next) => {
  Cinema
    .findAll()
    .then(cinemas => response.send(cinemas))
    .catch(err => next(err))
})

router.post('/cinemas', (request, response, next) => {
  Cinema
  .create(request.body)
  .then(cinema => response.send(cinema)) 
  .catch(err => next(err))
})

router.get('/cinema/:id', (request, response, next) => {
  Cinema
    .findByPk(request.params.id)
    .then(cinema => response.send(cinema))
    .catch(err => next(err))
})

module.exports = router;