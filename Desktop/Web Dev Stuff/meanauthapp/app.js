const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

//database middleware
mongoose.connect(config.database);

//testing connection to database
mongoose.connection.on('connected', () => {
  console.log('connected to database '+ config.database)
})

mongoose.connection.on('error', (err) => {
  console.log('database error '+ err)
})

const app = express();

const users = require('./routes/users')
//port number
const port = process.env.port || 8080

//cors middleware
app.use(cors());

//set STATIC folder
app.use(express.static(path.join(__dirname, 'public')))

//Body Parser middleware
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//users route
app.use('/users', users);


app.get('/', (req, res) =>{
  res.send('invalid endpoint')
});

app.listen(port, () => {
  console.log('server started on port '+port);
})
