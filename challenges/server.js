const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server
})

server.get('/', function(request, response) {
  response.redirect('/students')
})

server.get('/students', function(request, response) {
  response.render('students/index')
})

server.get('/teachers', function(request, response) {
  response.render('teachers/index')
})

server.listen(5000)
