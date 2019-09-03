const { Router } = require('express');
const Cinema = require('./model');
const router = new Router();

router.get('/cinemas', (request, response, next) => {
  Cinema
    .findAll()
    .then(events => response.send(events))
    .catch(err => next(err))
})

router.get('/cinema/:id', (request, response, next) => {
  Event
  //we add include so that the tickets will be filled in.
    .findAll()
    .then(event => response.send(response.body))
    .catch(err => next(err))
})