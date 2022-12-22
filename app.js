require('dotenv').config();

const express = require('express');
const app = express();
const session = require('express-session');
const routes = require('./routes');

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000
     }
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(routes);

app.get('/', (req, res) => {
    if (req.session.user === undefined) {
        return res.render('index');
    }
    console.log(req.session.user);
    res.render('dashboard');
})

app.listen(8000, () => {
    console.log('Listening')
})
