const express = require('express')
const hbs = require('express-handlebars')

// This is an object is pulling from data.js
const { data, template } = require('./data')

const server = express()
module.exports = server

// Middleware
server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))

// Routes
// server.get('/', (req, res) => {
//   res.send('Hello, World')
// })

// const template = 'home'
// const viewData = {
//   title: 'Gallery',
//   artist: 'Tommy'
// }

server.get('/', (req, res) => {
  res.render(template, data)
  // res.render('home.hbs')
})
