require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));

app.use('*', (request, response) => {
    response.send('Sorry, that route does not exist.');
});

app.get('/hello', (request, response) => {
    response.status(200).send('Hello');
});

app.get('/data', (request, response) => {
    const airplanes = {
        departure: Date.now(),
        canFly: true,
        pilot: 'Well Trained'
    };
    response.status(200).json(airplanes);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});