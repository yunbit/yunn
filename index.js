const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yun:dutjf2332!@cluster0.8enosqb.mongodb.net/?retryWrites=true&w=majority', {
 /* useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true,*/
}).then(( )=> console.log('mongoDB Connected...'))
  .catch(err => console.log(err))
/*app.get('/', (req, res) => {
  res.send('Hello World!') 
})*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




