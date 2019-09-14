const { Router } = require('express');
const Review = require('./model');
const router = new Router();
const Average = require('../cinema/average');
const Cinema = require('../cinema/model');

async function addAverage(review) {
  review.dataValues.average = await Average(review);
  return review;
}

router.get('/review/:id', async(request, response, next) => {
  const rawReview = await Review.findAll( {include: [Cinema], where: {id: request.params.id} } )
  console.log('rawReview', rawReview)
  const reviewWithAverage = await addAverage(rawReview.shift())
  response.send(reviewWithAverage);
  console.log(err => next(err))
})

router.get('/reviews', async (request, response, next) => {
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