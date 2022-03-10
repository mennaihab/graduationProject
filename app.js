const express = require('express');//call the express library
const app = express();//make instance from express
const bodyParser = require('body-parser');
const {signup} = require('./controllers/signup');//import signup
const {signin} = require('./controllers/signin'); 
const {search} = require('./controllers/search'); 


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post('/signup', signup)
app.post('/signin', signin)
app.get('/search',search)


app.listen(8000, ()=>{
    console.log('Server running on port 8000')
})