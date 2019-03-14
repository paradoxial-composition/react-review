import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './db/db';

var mail = require ('./email');

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get all todos
app.get('/welcome', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});

//********************************************************************* */
app.post('/welcome/addUser', (req, res) => {
    if(!req.body.name) {
      return res.status(400).send({
        success: 'false',
        message: 'name is required'
      });
    } else if(!req.body.email) {
      return res.status(400).send({
        success: 'false',
        message: 'email is required'
      });
    }
   const todo = {
     id: db.length + 1,
     name: req.body.name,
     email: req.body.email,
     password: ""
   }
   db.push(todo);
    mail.newUserEmail("elbani.othman@gmail.com","Oto", todo.id)
   return res.status(201).send({
     success: 'true',
     message: 'todo added successfully',
     todo
   })
  });

  //************************************************* */

  app.get('/welcome/addUser/:id', (req, res) => {

    const id = parseInt(req.params.id, 10);
  
    db.map((todo) => {
  
      if (todo.id === id) {
  
        return res.status(200).send({
  
          success: 'true',
  
          message: 'todo retrieved successfully',
  
          todo,
  
        });
  
      } 
  
  });
   return res.status(404).send({
  
     success: 'false',
  
     message: 'todo does not exist',
  
    });
  
  });

//************************************************** */

app.post('/validatePassword/', (req, res) => {
  
  const id = parseInt(req.body.id, 10);
  const pass = req.body.password;

  //console.log("YO !!  -- " + req.body);
  console.log("app.js Testing !! " + pass + " // " + id);
  db.map((todo) => {

    if (todo.id === id) {

      todo.password=pass;

      return res.status(200).send({

        success: 'true',

        message: 'password changed successfully',

        todo,

      });

    } 

});
 return res.status(404).send({

   success: 'false',

   message: 'todo does not exist',

  });

});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});