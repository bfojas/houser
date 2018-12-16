const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const massive = require('massive');
const dotenv = require('dotenv')
dotenv.config();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database =>
    app.set('db',database)).catch(error=>console.log('massive shit', error))

app.get('/api/houses', controller.getHouses );
app.delete('/api/houses/:id', controller.deleteHouses);
app.post('/api/houses', controller.addHouse);

const PORT= 4000;
app.listen(PORT, ()=>console.log(`listening on port ${PORT}`))