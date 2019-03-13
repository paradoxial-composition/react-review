// emails.js
const SGmail = require('@sendgrid/mail')
SGmail.setApiKey('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');


function newUserEmail(email, name, token){
    console.log( "Testing !! " + name + " -//- " + email)
    const message = { 
    to : email, //email variable
     from : { email : 'scarecroww07@gmail.com' , name: 'cephalon lars'},
    // message : `Hi there, ${name}`,
    text: "This is a testing test",
    html: "<p>create password , click here http://localhost:3000/makePassword/"+token+"</p>",
    subject : "This is a test Email",
    };
    SGmail.send(message);
   }
   module.exports = {
    newUserEmail
   }