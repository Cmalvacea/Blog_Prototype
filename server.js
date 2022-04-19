const express = require('express')

// Tools

const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const { default: mongoose } = require('mongoose')
const bodyParser = require('body-parser')

// Routes

const app = express()
const PostRoute = require('./src/Post_Route')

//Env 
const dotenv = require('dotenv').config()
const Port = process.env.PORT || 4000



app.set('view engine', 'ejs')
app.use('/Styles', express.static(__dirname + '/Static/'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieSession({
    name: "session",
    secret: "SessionID"
}))


app.use('/Post', PostRoute)


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/About', (req, res) => {
    res.render('about')
})



app.listen(Port, ()=> {
    console.log(`Listening at port ${Port}`)
})