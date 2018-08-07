var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')


app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.get('/', function(req, res) {
    res.render('index')
})

app.get('/work', function(req, res) {
    res.render('work')
})



var nodemailer = require('nodemailer')

app.post('/send', function(req, res) {
    console.log('mail ist da ' + JSON.stringify(req.body))
    res.send('hello')

    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'onvejx7agi3necjd@ethereal.email',
            pass: 'WhkAqRJ8AqJSh8TWtp'
        }
      });
    
      let mailOptions = {
        from: '"Fred Foo" <foo@example.com>',
        to: 'bar@example.com',
        subject: 'Hello User',
        text: 'Hello World'
        //html: '<b>Hello there</b>'
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      })
    
})


app.listen(8000)