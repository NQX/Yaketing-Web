
/*
'use strict'

$('#message').focus(function() {
    console.log("in func " + $(this))

    $(this).animate({
        height: 100
    }, "normal")
    }).blur(function() {
        $(this).animate({
            height: 50
        }, "normal")
    })
*/


function onMailBtn(){
    console.log('mail send')
}

/*
var mail = require('sendmail')();

mail( {
    from:    'noreply@yaketing.com',
    to:      'contact@yaketing.com',
    subject: 'Kontaktanfrage via Form',
    content: 'Kein Text'
},
function( err, response ) {
    if(err) {
        console.log(err);
    }
    console.dir(response);
});
*/