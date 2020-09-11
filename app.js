const express = require('express');

const hbs = require('hbs');
const path = require('path');

const beerRoutes = require('./routes/beer-routes');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.use('/', beerRoutes);

app.listen(3000, () => console.log('🏃‍ on port 3000'));
