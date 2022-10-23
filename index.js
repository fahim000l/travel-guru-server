const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

const places = require('./places.json');

app.get('/', (req, res) => {
    res.send('Travel Guru');
});

app.get('/places', (req, res) => {
    res.send(places);
});

app.get('/places/:id', (req, res) => {
    const id = req.params.id;
    const selectedPlace = places.find(place => place.id == id);
    res.send(selectedPlace);
});

app.listen(port, () => {
    console.log('Travel guru server is running on port :', port);
});