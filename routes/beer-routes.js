const express = require('express');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const router = express.Router();
const punkAPI = new PunkAPIWrapper();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/beers', async (req, res) => {
  try {
    const beers = await punkAPI.getBeers();

    res.render('beers/beers', { beers });
  } catch (err) {
    res.send('<h1>Internal server error</h1>');
  }
});

router.get('/random-beer', async (req, res) => {
  try {
    // Usar array destructuring pra extrair o primeiro elemento da array
    // const [randomBeer] = await punkAPI.getRandom();

    const randomBeer = await punkAPI.getRandom();

    console.log(randomBeer);

    res.render('beers/randomBeer', { ...randomBeer[0], randomBeer: true });
  } catch (err) {
    res.send('<h1>Internal server error</h1>');
  }
});

router.get('/beers/:id', async (req, res) => {
  try {
    console.log(req.params);

    const { id } = req.params;

    const beer = await punkAPI.getBeer(id);

    console.log(beer);

    res.render('beers/randomBeer', { ...beer[0], randomBeer: true });
  } catch (err) {
    res.send('<h1>Internal server error</h1>');
  }
});

module.exports = router;
