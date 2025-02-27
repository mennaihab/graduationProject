const express = require('express');//call the express library
const app = express();//make instance from express
const bodyParser = require('body-parser');
const cors = require('cors')
const signup = require('./controllers/signup');//import signup
const signin = require('./controllers/signin'); 
const search = require('./controllers/search'); 
const auth = require('./middlewear/auth')
const { collectData } = require('./controllers/collectData')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/signup', signup.signup)
app.post('/signin', signin.signin)
app.get('/search/:Id',auth.auth,search.search)
app.get('/backend', collectData)


app.listen(8000, ()=>{
    console.log('Server running on port 8000')
})