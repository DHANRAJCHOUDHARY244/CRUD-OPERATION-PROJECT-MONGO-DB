const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const homeRoutes = require('./routes/home.js')
const bodyParser = require('body-parser')

mongoose.connect("mongodb://127.0.0.1:27017/node_crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('mongoDB connected...'));


app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('public'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', homeRoutes)

app.listen(`${port}`, () => {
    console.log('app is running on port 3000');
})
