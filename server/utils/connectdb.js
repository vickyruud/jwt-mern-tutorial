//require mongoose to connect to mongoDB
const mongoose = require("mongoose")
//mongoDB = url from env
const url = process.env.MONGO_DB_CONNECTION_STRING

//create connection to database
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})


connect
  .then(db => {
    console.log("connected to db")
  })
  .catch(err => {
    console.log(err)
  })
