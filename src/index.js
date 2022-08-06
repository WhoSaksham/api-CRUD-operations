const express = require('express');
const app = express();
const router = require('./routes/routes');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const port = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/StdDetails', () => {
  console.log('Connection Successful, we are connected!')
})


app.use(bodyparser.json())
app.use('/api/v1/details', router)


app.get('/' , (req,res) => {
  res.send('Hello Saksham')
})


app.listen(port , () => {
  console.log(`Server successfully initiated on http://127.0.0.1:${port}`)
})