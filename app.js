require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes')

app.use(express.json());
app.set('view engine', 'ejs');

app.use(routes);

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8000, () => {
    console.log('Listening')
})
