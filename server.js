const express = require('express')
const hbs = require('express-handlebars')

// This is art data from json file
const arts = require('./art.json')

const server = express()
module.exports = server

// Middleware
server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))

// Display content path
const template = 'home'

// Routes
server.get('/', (req, res) => {
  res.render(template, { arts: arts })
})

// Artworks route
server.get('/artworks/:id', (req, res) => {
  const id = Number(req.params.id)
  const art = arts.find(art => art.id === id)
  res.render('artworks', art)
})