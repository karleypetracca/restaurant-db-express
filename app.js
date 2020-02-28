const express = require('express'),
    es6Renderer = require('express-es6-template-engine'),
    app = express();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.listen(3333, () => {
    console.log('Server running on port 3333');
});

const rootController = require('./routes/index'),
    restController = require('./routes/restaurant');

app.use(express.static('public'));
app.use('/', rootController);
app.use('/restaurant', restController);