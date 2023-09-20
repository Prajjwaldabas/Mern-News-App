const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const AuthRoute = require('./routes/AuthRoute')
const mongoose = require('mongoose')
const Middleware = require('./middleware/middleware')
const InterestRoute = require('./routes/UserInterest')

// set up middleware
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))

// app.use(bodyParser.json()); // Parse JSON request bodies

// Use the cors middleware
app.use(cors({
  origin: 'http://localhost:3000', // Replace with the origin of your client application
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));



app.use('/auth',AuthRoute)

app.use('/interest',InterestRoute )






  mongoose.connect(process.env.MONGO_DB,
    {useNewUrlParser:true , useUnifiedTopology:true}
    ).then(()=>{
        app.listen(process.env.PORT,()=>console.log(`Server Listening at ${process.env.PORT}`));
    }).catch((err)=>console.log(err))




