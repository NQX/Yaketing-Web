var express = require('express')
var path = require('path')
var app = express()
var port = 

app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.get('/', function(req, res) {
    res.render('index')
})

app.get('/work', function(req, res) {
    res.render('work')
})

app.listen(8000)