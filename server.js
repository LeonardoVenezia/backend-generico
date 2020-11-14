const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
})


// const mongoUri = require("./key.js")
const mongoose = require("mongoose")
// const apiCriterio = require("./rutes/criterio")
// const apiUser = require("./rutes/user")
const cors = require("cors")
const bodyParser = require("body-parser")
app.use(cors())
app.use(bodyParser())
// app.get("/", (req, res) => res.send({prueba:"hola"}));

const DB_URI = process.env.DB_URI
const PORT = process.env.PORT || '3005'

// mongoose.connect(DB_URI || mongoUri.uri)
// mongoose.connect(DB_URI)
// .then(()=> console.log("Mongo está conectado!!!!"))
// .catch(err=> console.log(err))

// app.use('/', express.static('Criterio/public'));

const userRutes = require('./rutes/user');

app.use('/api', userRutes);

app.get('/love', (req, res) => {
    res.send('Hi Love');
});

// app.use('/user', apiUser)



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));