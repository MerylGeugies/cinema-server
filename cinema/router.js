const { Router } = require('express');
const Cinema = require('./model');
const router = new Router();
const Review = require('../review/model')
const Average = require('./average')

router.get('/cinemas', (request, response, next) => {
  Cinema
    .findAll({include: [Review]})
    .then(cinemas => response.send(cinemas))
    .catch(err => next(err))
})

router.post('/cinemas', (request, response, next) => {
  Cinema
  .create(request.body)
  .then(cinema => response.send(cinema)) 
  .catch(err => next(err))
})

// router.get('/cinema/:id', (request, response, next) => {
//   Cinema
//     .findByPk(request.params.id)
//     .then(cinema => response.send(cinema))
//     .catch(err => next(err))
// })

// async function addAverage(cinema) {
//   cinema.dataValues.average = await Average(cinema);
//   return cinema;
// }

router.get('/cinema/:id', async(request, response, next) => {
  const rawCinema = await Cinema.findAll( {include: [Review], where: {id: request.params.id} } )
  const cinema = await rawCinema.shift();
  //const CinemaWithAverage = await addAverage(cinema);
  response.send(cinema);
  console.log(err => next(err))
})

module.exports = router;