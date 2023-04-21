const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;
//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { });

//middleware fos static  content
app.use(express.static('public'));


//app.get('/', function (req, res) {
//    res.send('Home page')
//});
app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Marjorie Martinez',
        titulo: 'Interprete'
    });
});
app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Marjorie Martinez',
        titulo: 'Interprete'
    });
});
app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Marjorie Martinez',
        titulo: 'Interprete'
    });
});
app.get('/*', function (req, res) {
    res.sendfile(__dirname + '/public/404.html');
});

//app.listen(3000)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})